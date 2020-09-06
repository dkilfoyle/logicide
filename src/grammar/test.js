const antlr4 = require("antlr4");
const vlgLexer = require("./vlgLexer.js");
const vlgParser = require("./vlgParser.js");
// const vlgVisitor = require("./vlgVisitor.js").vlgVisitor;
const vlgListener = require("./vlgListener.js").vlgListener;

const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8");

const chars = new antlr4.InputStream(input);
const lexer = new vlgLexer.vlgLexer(chars);

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new vlgParser.vlgParser(tokens);
const tree = parser.source_text();

// class Visitor extends vlgVisitor {
//   visitTerminal(ctx) {
//     return ctx.getText();
//   }
//   visitSource_text(ctx) {
//     const modules = ctx.module();
//     console.log(modules);
//     return ctx.module().map((x) => this.visit(x));
//   }
//   visitModule(ctx) {
//     const id = this.visit(ctx.identifier());
//     const ports = this.visit(ctx.list_of_port_declarations());
//     return { id, ports };
//   }
// }
// const output = tree.accept(new Visitor());

class Listener extends vlgListener {
  constructor() {
    super();
    this.modules = null;
    this.curModule = null;
  }
  enterSource_text() {
    this.modules = [];
  }
  enterModule(ctx) {
    this.curModule = {
      id: ctx.identifier().getText(),
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
  exitModule_ports(ctx) {
    const portDeclarations = ctx.ansi_port_declaration();
    portDeclarations.forEach((portDecCtx) => {
      const dir = portDecCtx.port_direction().getText();
      const ids = portDecCtx.identifier_list().ids;
      this.curModule[dir + "s"].push(...ids);
    });
  }

  exitIdentifier_list(ctx) {
    ctx.ids = ctx.identifier().map((x) => x.getText());
  }

  exitNet_declaration(ctx) {
    this.curModule.wires.push(...ctx.identifier_list().ids);
  }

  exitGate_declaration(ctx) {
    let inputs = ctx.identifier_list().ids.slice(1);
    // TODO: semantic error checking: make sure the gate inputs are already declared, either as a module input or a wire
    this.curModule.gates.push({
      id: ctx.identifier_list().ids[0],
      inputs,
    });
  }
}

var listener = new Listener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

console.log(listener.modules);
