<template>
  <div id="app">
    <golden-layout class="hscreen" :header-height="46" :showPopoutIcon="false">
      <gl-row>
        <gl-col :width="10">
          <gl-component :closable="false" title="Menu">
            <button class="button" @click="compile">Compile</button>
          </gl-component>
        </gl-col>

        <gl-col :width="55">
          <gl-stack :height="80" v-model="codeTab">
            <gl-component @resize="onResizeEditorWindow('editor1')" title="Editor">
              <editor ref="editor1" tabId="Scratch" v-model="sourceFiles.Scratch"></editor>
            </gl-component>
          </gl-stack>
          <gl-component id="consoleComponent" title="Console" @resize="onResizeTerminalWindow" @open="onOpenTerminalWindow" :closable="false">
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
        </gl-col>
        <gl-col>
          <gl-component title="Gates">
            <div class="level">
              <button class="button" @click="printTerminal">Log to terminal</button>
            </div>
          </gl-component>
          <gl-component title="Schematic">
            <h1>Component 3</h1>
          </gl-component>
        </gl-col>
      </gl-row>
    </golden-layout>
  </div>
</template>

<script>
import TerminalView from "./components/TerminalView";
import Editor from "./components/Editor";
import "bulma/css/bulma.css";

const Chalk = require("chalk");
let options = { enabled: true, level: 2 };
const chalk = new Chalk.Instance(options);
const shortJoin = (strs) => {
  const x = strs.join(", ");
  if (x.length < 21) return x;
  else return x.slice(0, 40) + "...";
};

import vlgParser from "./lib/vlgParser.js";
import vlgCompiler from "./lib/vlgCompiler.js";

import UtilsMixin from "./mixins/utils";

export default {
  name: "App",
  components: {
    TerminalView,
    Editor,
  },
  mixins: [UtilsMixin],
  data() {
    return {
      glOptions: {
        dimensions: {
          headerHeight: 46,
        },
        content: [],
      },
      codeTab: "Scratch",
      sourceFiles: require("./files").default,
    };
  },
  computed: {
    code() {
      return this.sourceFiles[this.codeTab];
    },
  },
  methods: {
    printTerminal() {
      console.log(this.sourceFiles);
      console.log(this.code);
    },
    onResizeEditorWindow(editorName) {
      this.$refs[editorName].onResize();
    },
    onResizeTerminalWindow() {
      this.$nextTick(() => this.$refs.terminal.fit());
    },
    onOpenTerminalWindow() {
      this.$refs.terminal.open();
    },
    termWriteln(str) {
      this.$refs.terminal.setContent(str);
    },
    compile() {
      const newCompiled = {};
      newCompiled.sourceFile = this.codeTab;
      this.termWriteln(chalk.bold.green("• Compiling: ") + chalk.yellow(this.codeTab));

      const parse = vlgParser(this.code).parseState;
      console.log("Parse: ", this.stripReactive(parse));
      if (parse.isError) {
        newCompiled.state = "error";
        this.termWriteln(chalk.red("└── Parser error: ") + parse.error);
        return;
      }

      newCompiled.state = "success";
      newCompiled.parseTree = parse.result;
      this.termWriteln(
        chalk.green(`├── Parsed ${newCompiled.parseTree.length} modules: ${chalk.white(newCompiled.parseTree.map((x) => x.id).join(", "))}`)
      );

      // const walk = vlgWalker(newCompiled.parseTree);
      const walk = vlgCompiler(newCompiled.parseTree);
      console.log("Compiled: ", this.stripReactive(walk));

      newCompiled.instances = [...walk.instances];
      newCompiled.gates = [...walk.gates];

      this.termWriteln(
        chalk.green(
          `├── Generated ${newCompiled.instances.length} instances: ${chalk.white(shortJoin(newCompiled.instances.map((x) => x.id)))}`
        )
      );
      this.termWriteln(
        chalk.green(`└── Generated ${newCompiled.gates.length} gates: ${chalk.white(shortJoin(newCompiled.gates.map((x) => x.id)))}`)
      );

      this.termWriteln(chalk.green.inverse(" DONE ") + "  Compiled successfully");

      newCompiled.timestamp = Date.now();
      newCompiled.simulation = { ready: false };
      this.compiled = newCompiled; // do it this way so that Vue does not propogate reactive changes until this.compiled is fully updated
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.editor {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hscreen {
  width: 100vw;
  height: 100vh;
  overflow: none;
}

.lm_header .lm_tab {
  font-size: 16px;
}

.lm_tab {
  height: 40px !important;
  line-height: 40px;
}

.lm_close_tab {
  height: 35px !important;
}

.lm_controls {
  top: 13px;
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
</style>
