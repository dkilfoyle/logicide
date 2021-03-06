<template>
  <div id="app">
    <golden-layout class="hscreen" :header-height="36" :showPopoutIcon="false">
      <gl-row>
        <gl-col :width="10">
          <gl-component class="myMenu" :closable="false" title="Files">
            <liquor-tree
              :data="sourceTree"
              :options="{ nodeIndent: 14 }"
              @node:selected="onCodeTreeSelection"
            ></liquor-tree>Options Update on
            type Compile Gates Schematic
          </gl-component>
          <gl-component class="myMenu" :closable="false" title="Outline">
            <liquor-tree
              ref="outline"
              :options="{ nodeIndent: 14 }"
              @node:selected="onModuleTreeSelection"
            ></liquor-tree>
          </gl-component>
        </gl-col>

        <gl-col :width="55">
          <gl-stack :height="80" v-model="currentFileTab" :closable="false">
            <gl-component
              :tabId="openFile.name"
              v-for="openFile in openFiles"
              :key="openFile.name"
              @resize="onResizeEditorWindow(openFile.name + '_editor')"
              :title="openFile.name"
            >
              <editor
                :ref="openFile.name + '_editor'"
                :tabId="openFile.name"
                v-model="openFile.code"
                @passLint="onPassLint"
                @onDidChangeModelContent="onChangeEditorModelContent"
              ></editor>
            </gl-component>
          </gl-stack>
          <gl-stack>
            <gl-component
              id="consoleComponent"
              title="Console"
              @resize="onResizeTerminalWindow"
              @open="onOpenTerminalWindow"
              :closable="false"
            >
              <TerminalView
                ref="terminal"
                auto-size
                :options="{
                  scrollback: 5000,
                  disableStdin: true,
                  useFlowControl: true,
                }"
                title="MyConsole"
                dark-mode
              />
            </gl-component>
            <gl-component title="Simulation" :closable="false">
              <div class="columns">
                <div class="column">
                  <b-button @click="compile">Compile</b-button>
                  <b-button @click="simulate">Simulate</b-button>
                </div>
              </div>
            </gl-component>
          </gl-stack>
        </gl-col>
        <gl-col>
          <gl-stack>
            <gl-component title="Gates" class="myBulma" :closable="false">
              <gates
                :state="currentFile.state"
                :gates="currentFile.gates"
                :instances="currentFile.instances"
                :instanceID="instanceID"
              ></gates>
            </gl-component>
            <gl-component title="Traces" class="myBulma" :closable="false">
              <div v-if="currentFile.simulation.ready">
                <traces
                  :gates="currentFile.gates"
                  :instances="currentFile.instances"
                  :instanceID="instanceID"
                  :simulation="currentFile.simulation"
                ></traces>
              </div>
              <div v-else>
                <b-button @click="simulate">Simulate</b-button>
                {{ currentFile.simulation.ready }}
              </div>
            </gl-component>
          </gl-stack>

          <gl-component
            title="Schematic"
            @resize="onResizeSchematicWindow"
            ref="schematicContainer"
          >
            <schematic
              ref="schematic"
              :state="currentFile.state"
              :file="currentFile"
              :gates="currentFile.gates"
              :instances="currentFile.instances"
            ></schematic>
          </gl-component>
        </gl-col>
      </gl-row>
    </golden-layout>
  </div>
</template>

<script>
// import "bulma/css/bulma.css";

import TerminalView from "./components/TerminalView";
import Editor from "./components/Editor";
import Gates from "./components/Gates";
import Schematic from "./components/Schematic";
import Traces from "./components/Traces";

import LiquorTree from "liquor-tree";

const Chalk = require("chalk");
let options = { enabled: true, level: 2 };
const chalk = new Chalk.Instance(options);
const shortJoin = (strs) => {
  const x = strs.join(", ");
  if (x.length < 21) return x;
  else return x.slice(0, 40) + "...";
};

import vlgParse from "./lib/vlgAntlrParser.js"; // parsec parser
import vlgWalk from "./lib/vlgAntlrListener.js"; // parsec parser
import vlgCompile from "./lib/vlgModuleCompiler.js"; // parsec parser
import evaluateGates from "./lib/simulation.js";

const indexBy = (array, prop) =>
  array.reduce((output, item) => {
    output[item[prop]] = item;
    return output;
  }, {});

import UtilsMixin from "./mixins/utils";
import SelectionMixin from "./mixins/selections";

export default {
  name: "App",
  components: {
    TerminalView,
    Editor,
    Gates,
    Schematic,
    LiquorTree,
    Traces,
  },
  mixins: [UtilsMixin, SelectionMixin],
  data() {
    return {
      glOptions: {
        dimensions: {
          headerHeight: 46,
        },
        content: [],
      },

      instanceID: "main",

      openFiles: {},
      currentFileTab: "Scratch",

      outlineReady: false,

      sourceFiles: require("./files").SourceFiles,
      sourceTree: require("./files").SourceTree,

      EVALS_PER_STEP: 5,
    };
  },
  computed: {
    currentFile() {
      return this.currentFileTab != ""
        ? this.openFiles[this.currentFileTab]
        : {};
    },
    code() {
      return this.currentFile.code;
    },
    instances() {
      return (this.currentFile && this.currentFile.instances) || [];
    },
    gates() {
      return (this.currentFile && this.currentFile.gates) || [];
    },
  },
  created() {
    this.addFileTab("Scratch");
  },
  watch: {
    instanceTree() {
      this.updateOutline();
    },
    currentFileTab() {
      this.instanceID = "main";
    },
  },
  methods: {
    onChangeEditorModelContent() {
      this.updateOutline();
    },
    updateOutline() {
      this.$nextTick(() => this.$refs.outline.setModel(this.instanceTree));
    },
    addFileTab(sourceName) {
      // todo: add source1, source2 if already exists
      this.$set(this.openFiles, sourceName, {
        name: sourceName,
        code: this.sourceFiles[sourceName],
        instances: [],
        gates: [],
        simulation: { ready: false, gates: {}, time: [], maxTime: 0 },
        state: "uncompiled",
      });
    },
    onCodeTreeSelection(node) {
      if (node.children.length == 0) this.addFileTab(node.text);
    },
    onModuleTreeSelection(node) {
      this.instanceID = node.data.id;
    },
    printTerminal() {
      console.log(this.sourceFiles);
      console.log(this.code);
    },

    // resize events

    onResizeEditorWindow(editorName) {
      this.$refs[editorName][0].onResize();
    },
    onResizeTerminalWindow() {
      this.$nextTick(() => this.$refs.terminal.fit());
    },
    onResizeSchematicWindow() {
      const width = this.$refs.schematicContainer.container.width;
      const height = this.$refs.schematicContainer.container.height;
      this.$nextTick(() => this.$refs.schematic.onResize(width, height));
    },

    onOpenTerminalWindow() {
      this.$refs.terminal.open();
    },
    termWriteln(str) {
      this.$refs.terminal.setContent(str);
    },

    onPassLint(e) {
      this.currentFile.parseResult = { ...e.parseResult };
      this.currentFile.walkResult = { ...e.walkResult };

      // compile turns [modules] into instances and gates
      // needed for updating of gates table and schematic

      this.currentFile.compileResult = vlgCompile(
        this.currentFile.walkResult.modules
      );
      this.currentFile.instances = [
        ...this.currentFile.compileResult.instances,
      ];
      this.currentFile.gates = [...this.currentFile.compileResult.gates];
      this.currentFile.state = "compiled " + Date.now();
      console.log("app: onPassLint: ", this.currentFile);
    },

    compile() {
      this.termWriteln(
        chalk.bold.green("• Compiling: ") + chalk.yellow(this.currentFileTab)
      );

      this.currentFile.parseResult = vlgParse(this.currentFile.code);
      if (this.currentFile.parseResult.errors.length > 0) {
        this.currentFile.state = "parseError";
        this.termWriteln(
          chalk.red("└── Syntax error(s): ") +
            this.currentFile.parseResult.errors.length
        );
        return;
      }

      this.currentFile.walkResult = vlgWalk(this.currentFile.parseResult.ast);
      if (this.currentFile.walkResult.errors.length > 0) {
        this.currentFile.state = "walkError";
        this.termWriteln(
          chalk.red("└── Semantic error(s): ") +
            this.currentFile.walkResult.errors.length
        );
        return;
      }

      this.termWriteln(
        chalk.green(
          `├── Parsed ${
            this.currentFile.walkResult.modules.length
          } modules: ${chalk.white(
            this.currentFile.walkResult.modules.map((x) => x.id).join(", ")
          )}`
        )
      );

      this.currentFile.compileResult = vlgCompile(
        this.currentFile.walkResult.modules
      );
      this.currentFile.state = "compiled";
      this.currentFile.instances = [
        ...this.currentFile.compileResult.instances,
      ];
      this.currentFile.gates = [...this.currentFile.compileResult.gates];
      console.log(
        "Compiled: ",
        this.stripReactive(this.currentFile.compileResult)
      );

      this.termWriteln(
        chalk.green(
          `├── Generated ${
            this.currentFile.instances.length
          } instances: ${chalk.white(
            shortJoin(this.currentFile.instances.map((x) => x.id))
          )}`
        )
      );
      this.termWriteln(
        chalk.green(
          `└── Generated ${this.currentFile.gates.length} gates: ${chalk.white(
            shortJoin(this.currentFile.gates.map((x) => x.id))
          )}`
        )
      );

      this.termWriteln(
        chalk.green.inverse(" DONE ") + "  Compiled successfully"
      );

      this.currentFile.timestamp = Date.now();
      this.currentFile.simulation = { ready: false };
    },
    simulate() {
      this.showTerminal = true;
      this.termWriteln(
        chalk.bold.cyan("• Simulating: ") + chalk.yellow(this.currentFile.name)
      );

      const newSimulation = {
        gates: {},
        clock: [],
        time: [],
        ready: false,
      };

      this.currentFile.gates.forEach((g) => {
        g.state = 0;
        newSimulation.gates[g.id] = [];
      });

      var gatesLookup = indexBy(this.currentFile.gates, "id");
      var instancesLookup = indexBy(this.currentFile.instances, "id");
      var modulesLookup = indexBy(this.currentFile.walkResult.modules, "id");

      const maxClock = modulesLookup.Main.clock.reduce(
        (acc, val) => Math.max(val.time, acc),
        0
      );

      if (gatesLookup["main_clock"]) gatesLookup["main_clock"].state = 0;

      for (let clock = 0; clock <= maxClock; clock++) {
        newSimulation.time.push(clock);
        modulesLookup.Main.clock.forEach((c) => {
          if (c.time == clock) {
            c.assignments.forEach((a) => {
              // can only assign values to control types
              if (gatesLookup["main_" + a.id].logic == "control")
                gatesLookup["main_" + a.id].state = a.value;
            });
          }
        });

        if (gatesLookup["main_clock"])
          gatesLookup["main_clock"].state =
            ~gatesLookup["main_clock"].state & 1; // tick-tock

        for (let i = 0; i < this.EVALS_PER_STEP; i++) {
          evaluateGates(this.currentFile.gates, gatesLookup);
        }
        this.currentFile.gates.forEach((g) => {
          newSimulation.gates[g.id].push(gatesLookup[g.id].state);
        });

        newSimulation.clock.push(clock % 2);

        modulesLookup.Main.clock.forEach((x, index, all) => {
          if (x.time != clock) return;

          const lineChar = index == all.length - 1 ? "└" : "├";

          this.termWriteln(
            chalk.cyan(
              `${lineChar}── Time ${clock.toString().padStart(3, "0")} :`
            ) +
              shortJoin(x.assignments.map((a) => a.id + "=" + a.value)) +
              chalk.cyan(" => ") +
              shortJoin(
                instancesLookup.main.gates
                  .filter((gateId) => gatesLookup[gateId].logic == "response")
                  .map((o) => this.getLocalId(o) + "=" + gatesLookup[o].state)
              )
          );
        });
      }
      this.termWriteln(
        chalk.cyan.inverse(" DONE ") + "  Simulated successfully"
      );
      newSimulation.maxTime = newSimulation.time[newSimulation.time.length - 1];
      newSimulation.timestamp = Date.now();
      newSimulation.ready = true;
      this.currentFile.simulation = newSimulation;
      console.log(
        "Simulation: ",
        this.stripReactive(this.currentFile.simulation)
      );
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 5px;
  background: whitesmoke;
}

.myBulma {
  padding: 0.8rem;
}

.myMenu {
  padding: 0.1rem;
}

.glComponent {
  background: white;
}

.editor {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hscreen {
  width: calc(100vw - 10px);
  height: calc(100vh - 10px);
  overflow: none;
}

.lm_header .lm_tab {
  font-size: 16px;
}

.lm_tab {
  height: 30px !important;
  line-height: 30px;
}

.lm_close_tab {
  height: 25px !important;
}

.lm_controls {
  top: 8px;
}

::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar-track-piece {
  background: 0 0;
}

::-webkit-scrollbar-track {
  background-color: "rgb(121, 121, 121)";
  border-left: rgba(121, 121, 121, 0.5) solid 1px;
}

::-webkit-scrollbar-track:hover {
  background-color: "rgb(212, 212, 212)";
}

::-webkit-scrollbar-thumb {
  background-color: rgba(121, 121, 121, 0.4);
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(121, 121, 121, 0.7);
}

.tree-anchor {
  padding-left: 0px;
}
</style>
