<template>
  <div id="app">
    <golden-layout class="hscreen" :header-height="46">
      <gl-row>
        <gl-col :width="65">
          <gl-stack :height="80">
            <gl-component @resize="onResizeEditorWindow('editor1')" title="Editor">
              <editor ref="editor1" v-model="code"></editor>
            </gl-component>
          </gl-stack>
          <gl-component id="consoleComponent" title="Console" @resize="onResizeTerminalWindow" @open="onOpenTerminalWindow">
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
          <gl-stack>
            <gl-component title="component2">
              <div class="level"><button class="button" @click="printTerminal">Log to terminal</button></div>
            </gl-component>
            <gl-component title="component3">
              <h1>Component 3</h1>
            </gl-component>
          </gl-stack>
        </gl-col>
      </gl-row>
    </golden-layout>
  </div>
</template>

<script>
import TerminalView from "./components/TerminalView";
import Editor from "./components/Editor";
import "bulma/css/bulma.css";

import SourceFiles from "./files";

export default {
  name: "App",
  components: {
    TerminalView,
    Editor,
  },
  data() {
    return {
      glOptions: {
        dimensions: {
          headerHeight: 46,
        },
        content: [],
      },
      code: SourceFiles.Scratch,
    };
  },
  methods: {
    printTerminal() {
      this.$refs.terminal.setContent("hello");
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
