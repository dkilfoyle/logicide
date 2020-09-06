/* eslint-disable */

import { tree } from "antlr4";
import { vlgListener } from "../grammar/vlgListener.js";

class Listener extends vlgListener {
  constructor() {
    super();
    this.modules = null;
    this.curModule = null;
    this.errors = [];
  }
  enterSource_text() {
    this.modules = [];
  }
  enterModule(ctx) {
    console.log("Entering module: ", ctx.IDENTIFIER().getText());
    this.curModule = {
      id: ctx.IDENTIFIER().getText(),
      sourceLocation: {
        start: {
          line: ctx.start.line,
          column: ctx.start.column,
        },
        stop: {
          line: ctx.stop.line,
          column: ctx.stop.column,
        },
      },
      inputs: [],
      outputs: [],
      wires: [],
      gates: [],
    };
  }
  exitModule() {
    this.modules.push(this.curModule);
    this.curModule = null;
  }
  enterModule_main(ctx) {
    console.log("Entering module: !main ");
    this.curModule = {
      id: "main",
      sourceLocation: {
        start: {
          line: ctx.start.line,
          column: ctx.start.column,
        },
        stop: {
          line: ctx.stop.line,
          column: ctx.stop.column,
        },
      },
      inputs: [],
      outputs: [],
      wires: [],
      gates: [],
    };
  }
  exitModule_main() {
    this.modules.push(this.curModule);
    this.curModule = null;
  }
  exitModule_ports(ctx) {
    const portDeclarations = ctx.ansi_port_declaration();
    portDeclarations.forEach((portDecCtx) => {
      const dir = portDecCtx.port_direction().getText();
      const ids = portDecCtx.identifier_list().ids;
      this.curModule[dir + "s"].push(...ids);
    });
  }

  exitIdentifier_list(ctx) {
    ctx.ids = ctx.IDENTIFIER().map((x) => x.getText());
  }

  exitNet_declaration(ctx) {
    this.curModule.wires.push(...ctx.identifier_list().ids);
  }

  exitGate_declaration(ctx) {
    let gateInputs = ctx.identifier_list().ids.slice(1);
    gateInputs.forEach((gateInput, index) => {
      if (!(this.curModule.inputs.some((x) => x == gateInput) | this.curModule.wires.some((x) => x == gateInput))) {
        const idctx = ctx.identifier_list().IDENTIFIER(index + 1); // because IDENTIFER(0) is the output
        this.errors.push({
          startLine: idctx.symbol.line,
          startColumn: idctx.symbol.column,
          stopLine: idctx.symbol.line,
          stopColumn: idctx.symbol.column + idctx.symbol.text.length - 1,
          msg: `'${gateInput}' is not defined as a wire or input`,
          severity: "warning",
        });
        return;
      }
    });
    this.curModule.gates.push({
      id: ctx.identifier_list().ids[0],
      inputs: gateInputs,
      sourceStart: { column: ctx.start.column, line: ctx.start.line },
      sourceStop: { column: ctx.stop.column, line: ctx.stop.line },
    });
  }
}

export default function walk(ast) {
  var listener = new Listener();
  tree.ParseTreeWalker.DEFAULT.walk(listener, ast);
  return listener;
}
