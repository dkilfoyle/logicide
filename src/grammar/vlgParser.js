// Generated from c:\code\JS\logicide\src\grammar\vlg.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var vlgListener = require('./vlgListener').vlgListener;
var vlgVisitor = require('./vlgVisitor').vlgVisitor;

 /* eslint-disable */ 
var grammarFileName = "vlg.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003,\u00f1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0006\u0003?\n\u0003\r\u0003\u000e\u0003@\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0007\u0004J\n\u0004\f\u0004\u000e\u0004M\u000b\u0004\u0003\u0004",
    "\u0005\u0004P\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005W\n\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "[\n\u0005\f\u0005\u000e\u0005^\u000b\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006f\n\u0006\f\u0006",
    "\u000e\u0006i\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005",
    "\tv\n\t\u0003\n\u0003\n\u0003\n\u0007\n{\n\n\f\n\u000e\n~\u000b\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0007\r",
    "\u008e\n\r\f\r\u000e\r\u0091\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u009d\n\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00ac",
    "\n\u0013\f\u0013\u000e\u0013\u00af\u000b\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016",
    "\u00be\n\u0016\f\u0016\u000e\u0016\u00c1\u000b\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005",
    "\u0018\u00d0\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0007\u0018\u00d6\n\u0018\f\u0018\u000e\u0018\u00d9\u000b\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005",
    "\u0019\u00e1\n\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0007\u001c\u00ea\n\u001c\f\u001c",
    "\u000e\u001c\u00ed\u000b\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0002",
    "\u0003.\u001e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468\u0002\u0007\u0003\u0002\n\u000b",
    "\u0003\u0002\u0013\u001a\u0004\u0002\u001d!%&\u0004\u0002!!%&\u0003",
    "\u0002+,\u0002\u00e7\u0002:\u0003\u0002\u0002\u0002\u0004>\u0003\u0002",
    "\u0002\u0002\u0006E\u0003\u0002\u0002\u0002\bS\u0003\u0002\u0002\u0002",
    "\na\u0003\u0002\u0002\u0002\fl\u0003\u0002\u0002\u0002\u000eo\u0003",
    "\u0002\u0002\u0002\u0010u\u0003\u0002\u0002\u0002\u0012w\u0003\u0002",
    "\u0002\u0002\u0014\u0081\u0003\u0002\u0002\u0002\u0016\u0087\u0003\u0002",
    "\u0002\u0002\u0018\u008a\u0003\u0002\u0002\u0002\u001a\u0092\u0003\u0002",
    "\u0002\u0002\u001c\u0096\u0003\u0002\u0002\u0002\u001e\u009a\u0003\u0002",
    "\u0002\u0002 \u00a3\u0003\u0002\u0002\u0002\"\u00a5\u0003\u0002\u0002",
    "\u0002$\u00a8\u0003\u0002\u0002\u0002&\u00b0\u0003\u0002\u0002\u0002",
    "(\u00b4\u0003\u0002\u0002\u0002*\u00b9\u0003\u0002\u0002\u0002,\u00c4",
    "\u0003\u0002\u0002\u0002.\u00cf\u0003\u0002\u0002\u00020\u00e0\u0003",
    "\u0002\u0002\u00022\u00e2\u0003\u0002\u0002\u00024\u00e4\u0003\u0002",
    "\u0002\u00026\u00e6\u0003\u0002\u0002\u00028\u00ee\u0003\u0002\u0002",
    "\u0002:;\u0005\u0004\u0003\u0002;<\u0007\u0002\u0002\u0003<\u0003\u0003",
    "\u0002\u0002\u0002=?\u0005\b\u0005\u0002>=\u0003\u0002\u0002\u0002?",
    "@\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002AB\u0003\u0002\u0002\u0002BC\u0005\u0006\u0004\u0002CD\u0007\u0002",
    "\u0002\u0003D\u0005\u0003\u0002\u0002\u0002EF\u0007\u0003\u0002\u0002",
    "FG\u0007\u0004\u0002\u0002GK\u0007\u0005\u0002\u0002HJ\u0005\u0010\t",
    "\u0002IH\u0003\u0002\u0002\u0002JM\u0003\u0002\u0002\u0002KI\u0003\u0002",
    "\u0002\u0002KL\u0003\u0002\u0002\u0002LO\u0003\u0002\u0002\u0002MK\u0003",
    "\u0002\u0002\u0002NP\u0005\u0012\n\u0002ON\u0003\u0002\u0002\u0002O",
    "P\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QR\u0007\u0006\u0002",
    "\u0002R\u0007\u0003\u0002\u0002\u0002ST\u0007\u0003\u0002\u0002TV\u0007",
    "*\u0002\u0002UW\u0005\n\u0006\u0002VU\u0003\u0002\u0002\u0002VW\u0003",
    "\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002X\\\u0007\u0005\u0002\u0002",
    "Y[\u0005\u0010\t\u0002ZY\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002",
    "\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]_\u0003",
    "\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002_`\u0007\u0006\u0002\u0002",
    "`\t\u0003\u0002\u0002\u0002ab\u0007\u0007\u0002\u0002bg\u0005\f\u0007",
    "\u0002cd\u0007\b\u0002\u0002df\u0005\f\u0007\u0002ec\u0003\u0002\u0002",
    "\u0002fi\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002gh\u0003\u0002",
    "\u0002\u0002hj\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002jk\u0007",
    "\t\u0002\u0002k\u000b\u0003\u0002\u0002\u0002lm\u0005\u000e\b\u0002",
    "mn\u00056\u001c\u0002n\r\u0003\u0002\u0002\u0002op\t\u0002\u0002\u0002",
    "p\u000f\u0003\u0002\u0002\u0002qv\u0005\u001c\u000f\u0002rv\u0005\u001e",
    "\u0010\u0002sv\u0005\"\u0012\u0002tv\u0005(\u0015\u0002uq\u0003\u0002",
    "\u0002\u0002ur\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002ut\u0003",
    "\u0002\u0002\u0002v\u0011\u0003\u0002\u0002\u0002wx\u0007\f\u0002\u0002",
    "x|\u0007\r\u0002\u0002y{\u0005\u0014\u000b\u0002zy\u0003\u0002\u0002",
    "\u0002{~\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002",
    "\u0002\u0002}\u007f\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002",
    "\u007f\u0080\u0007\u000e\u0002\u0002\u0080\u0013\u0003\u0002\u0002\u0002",
    "\u0081\u0082\u0005\u0016\f\u0002\u0082\u0083\u0007\u000f\u0002\u0002",
    "\u0083\u0084\u0005\u0018\r\u0002\u0084\u0085\u0007\u0010\u0002\u0002",
    "\u0085\u0086\u0007\u0005\u0002\u0002\u0086\u0015\u0003\u0002\u0002\u0002",
    "\u0087\u0088\u0007\u0011\u0002\u0002\u0088\u0089\u0007+\u0002\u0002",
    "\u0089\u0017\u0003\u0002\u0002\u0002\u008a\u008f\u0005\u001a\u000e\u0002",
    "\u008b\u008c\u0007\b\u0002\u0002\u008c\u008e\u0005\u001a\u000e\u0002",
    "\u008d\u008b\u0003\u0002\u0002\u0002\u008e\u0091\u0003\u0002\u0002\u0002",
    "\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002",
    "\u0090\u0019\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002",
    "\u0092\u0093\u0007*\u0002\u0002\u0093\u0094\u0007\"\u0002\u0002\u0094",
    "\u0095\u0007+\u0002\u0002\u0095\u001b\u0003\u0002\u0002\u0002\u0096",
    "\u0097\u0007\u0012\u0002\u0002\u0097\u0098\u00056\u001c\u0002\u0098",
    "\u0099\u0007\u0005\u0002\u0002\u0099\u001d\u0003\u0002\u0002\u0002\u009a",
    "\u009c\u0005 \u0011\u0002\u009b\u009d\u0007*\u0002\u0002\u009c\u009b",
    "\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009e",
    "\u0003\u0002\u0002\u0002\u009e\u009f\u0007\u0007\u0002\u0002\u009f\u00a0",
    "\u00056\u001c\u0002\u00a0\u00a1\u0007\t\u0002\u0002\u00a1\u00a2\u0007",
    "\u0005\u0002\u0002\u00a2\u001f\u0003\u0002\u0002\u0002\u00a3\u00a4\t",
    "\u0003\u0002\u0002\u00a4!\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007",
    "\u001b\u0002\u0002\u00a6\u00a7\u0005$\u0013\u0002\u00a7#\u0003\u0002",
    "\u0002\u0002\u00a8\u00ad\u0005&\u0014\u0002\u00a9\u00aa\u0007\b\u0002",
    "\u0002\u00aa\u00ac\u0005&\u0014\u0002\u00ab\u00a9\u0003\u0002\u0002",
    "\u0002\u00ac\u00af\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003\u0002\u0002",
    "\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae%\u0003\u0002\u0002",
    "\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007*\u0002",
    "\u0002\u00b1\u00b2\u0007\"\u0002\u0002\u00b2\u00b3\u0005.\u0018\u0002",
    "\u00b3\'\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007*\u0002\u0002\u00b5",
    "\u00b6\u0007*\u0002\u0002\u00b6\u00b7\u0005*\u0016\u0002\u00b7\u00b8",
    "\u0007\u0005\u0002\u0002\u00b8)\u0003\u0002\u0002\u0002\u00b9\u00ba",
    "\u0007\u0007\u0002\u0002\u00ba\u00bf\u0005,\u0017\u0002\u00bb\u00bc",
    "\u0007\b\u0002\u0002\u00bc\u00be\u0005,\u0017\u0002\u00bd\u00bb\u0003",
    "\u0002\u0002\u0002\u00be\u00c1\u0003\u0002\u0002\u0002\u00bf\u00bd\u0003",
    "\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0\u00c2\u0003",
    "\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007",
    "\t\u0002\u0002\u00c3+\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007\u001c",
    "\u0002\u0002\u00c5\u00c6\u0007*\u0002\u0002\u00c6\u00c7\u0007\u0007",
    "\u0002\u0002\u00c7\u00c8\u0007*\u0002\u0002\u00c8\u00c9\u0007\t\u0002",
    "\u0002\u00c9-\u0003\u0002\u0002\u0002\u00ca\u00cb\b\u0018\u0001\u0002",
    "\u00cb\u00d0\u00050\u0019\u0002\u00cc\u00cd\u00052\u001a\u0002\u00cd",
    "\u00ce\u00050\u0019\u0002\u00ce\u00d0\u0003\u0002\u0002\u0002\u00cf",
    "\u00ca\u0003\u0002\u0002\u0002\u00cf\u00cc\u0003\u0002\u0002\u0002\u00d0",
    "\u00d7\u0003\u0002\u0002\u0002\u00d1\u00d2\f\u0003\u0002\u0002\u00d2",
    "\u00d3\u00054\u001b\u0002\u00d3\u00d4\u0005.\u0018\u0004\u00d4\u00d6",
    "\u0003\u0002\u0002\u0002\u00d5\u00d1\u0003\u0002\u0002\u0002\u00d6\u00d9",
    "\u0003\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d7\u00d8",
    "\u0003\u0002\u0002\u0002\u00d8/\u0003\u0002\u0002\u0002\u00d9\u00d7",
    "\u0003\u0002\u0002\u0002\u00da\u00e1\u00058\u001d\u0002\u00db\u00e1",
    "\u0007*\u0002\u0002\u00dc\u00dd\u0007\u0007\u0002\u0002\u00dd\u00de",
    "\u0005.\u0018\u0002\u00de\u00df\u0007\t\u0002\u0002\u00df\u00e1\u0003",
    "\u0002\u0002\u0002\u00e0\u00da\u0003\u0002\u0002\u0002\u00e0\u00db\u0003",
    "\u0002\u0002\u0002\u00e0\u00dc\u0003\u0002\u0002\u0002\u00e11\u0003",
    "\u0002\u0002\u0002\u00e2\u00e3\t\u0004\u0002\u0002\u00e33\u0003\u0002",
    "\u0002\u0002\u00e4\u00e5\t\u0005\u0002\u0002\u00e55\u0003\u0002\u0002",
    "\u0002\u00e6\u00eb\u0007*\u0002\u0002\u00e7\u00e8\u0007\b\u0002\u0002",
    "\u00e8\u00ea\u0007*\u0002\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002",
    "\u00ea\u00ed\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002",
    "\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec7\u0003\u0002\u0002\u0002",
    "\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ee\u00ef\t\u0006\u0002\u0002",
    "\u00ef9\u0003\u0002\u0002\u0002\u0012@KOV\\gu|\u008f\u009c\u00ad\u00bf",
    "\u00cf\u00d7\u00e0\u00eb"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'module'", "'main'", "';'", "'endmodule'", "'('", 
                     "','", "')'", "'input'", "'output'", "'test'", "'begin'", 
                     "'end'", "'{'", "'}'", "'#'", "'wire'", "'and'", "'or'", 
                     "'nand'", "'nor'", "'xnor'", "'not'", "'control'", 
                     "'response'", "'assign'", "'.'", "'!'", "'~'", "'~&'", 
                     "'~|'", "'^'", "'='", "'+'", "'-'", "'&'", "'|'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "NOT", "NEG", "NAND", "NOR", "XOR", "ASSIGN", "PLUS", 
                      "MINUS", "AMPERSAND", "BAR", "ONE_LINE_COMMENT", "BLOCK_COMMENT", 
                      "WHITE_SPACE", "IDENTIFIER", "UNSIGNED_NUMBER", "BINARY_NUMBER" ];

var ruleNames =  [ "source_text", "modules", "module_main", "module", "module_ports", 
                   "ansi_port_declaration", "port_direction", "module_item", 
                   "test_bench", "test_time", "time_stamp", "time_assignment_list", 
                   "time_assignment", "net_declaration", "gate_declaration", 
                   "gate_type", "continuous_assign", "list_of_assignments", 
                   "assignment", "module_instantiation", "list_of_module_connections", 
                   "named_port_connection", "expression", "primary", "unary_operator", 
                   "binary_operator", "identifier_list", "number" ];

function vlgParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

vlgParser.prototype = Object.create(antlr4.Parser.prototype);
vlgParser.prototype.constructor = vlgParser;

Object.defineProperty(vlgParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

vlgParser.EOF = antlr4.Token.EOF;
vlgParser.T__0 = 1;
vlgParser.T__1 = 2;
vlgParser.T__2 = 3;
vlgParser.T__3 = 4;
vlgParser.T__4 = 5;
vlgParser.T__5 = 6;
vlgParser.T__6 = 7;
vlgParser.T__7 = 8;
vlgParser.T__8 = 9;
vlgParser.T__9 = 10;
vlgParser.T__10 = 11;
vlgParser.T__11 = 12;
vlgParser.T__12 = 13;
vlgParser.T__13 = 14;
vlgParser.T__14 = 15;
vlgParser.T__15 = 16;
vlgParser.T__16 = 17;
vlgParser.T__17 = 18;
vlgParser.T__18 = 19;
vlgParser.T__19 = 20;
vlgParser.T__20 = 21;
vlgParser.T__21 = 22;
vlgParser.T__22 = 23;
vlgParser.T__23 = 24;
vlgParser.T__24 = 25;
vlgParser.T__25 = 26;
vlgParser.NOT = 27;
vlgParser.NEG = 28;
vlgParser.NAND = 29;
vlgParser.NOR = 30;
vlgParser.XOR = 31;
vlgParser.ASSIGN = 32;
vlgParser.PLUS = 33;
vlgParser.MINUS = 34;
vlgParser.AMPERSAND = 35;
vlgParser.BAR = 36;
vlgParser.ONE_LINE_COMMENT = 37;
vlgParser.BLOCK_COMMENT = 38;
vlgParser.WHITE_SPACE = 39;
vlgParser.IDENTIFIER = 40;
vlgParser.UNSIGNED_NUMBER = 41;
vlgParser.BINARY_NUMBER = 42;

vlgParser.RULE_source_text = 0;
vlgParser.RULE_modules = 1;
vlgParser.RULE_module_main = 2;
vlgParser.RULE_module = 3;
vlgParser.RULE_module_ports = 4;
vlgParser.RULE_ansi_port_declaration = 5;
vlgParser.RULE_port_direction = 6;
vlgParser.RULE_module_item = 7;
vlgParser.RULE_test_bench = 8;
vlgParser.RULE_test_time = 9;
vlgParser.RULE_time_stamp = 10;
vlgParser.RULE_time_assignment_list = 11;
vlgParser.RULE_time_assignment = 12;
vlgParser.RULE_net_declaration = 13;
vlgParser.RULE_gate_declaration = 14;
vlgParser.RULE_gate_type = 15;
vlgParser.RULE_continuous_assign = 16;
vlgParser.RULE_list_of_assignments = 17;
vlgParser.RULE_assignment = 18;
vlgParser.RULE_module_instantiation = 19;
vlgParser.RULE_list_of_module_connections = 20;
vlgParser.RULE_named_port_connection = 21;
vlgParser.RULE_expression = 22;
vlgParser.RULE_primary = 23;
vlgParser.RULE_unary_operator = 24;
vlgParser.RULE_binary_operator = 25;
vlgParser.RULE_identifier_list = 26;
vlgParser.RULE_number = 27;


function Source_textContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_source_text;
    return this;
}

Source_textContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Source_textContext.prototype.constructor = Source_textContext;

Source_textContext.prototype.modules = function() {
    return this.getTypedRuleContext(ModulesContext,0);
};

Source_textContext.prototype.EOF = function() {
    return this.getToken(vlgParser.EOF, 0);
};

Source_textContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterSource_text(this);
	}
};

Source_textContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitSource_text(this);
	}
};

Source_textContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitSource_text(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Source_textContext = Source_textContext;

vlgParser.prototype.source_text = function() {

    var localctx = new Source_textContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, vlgParser.RULE_source_text);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.modules();
        this.state = 57;
        this.match(vlgParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ModulesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_modules;
    return this;
}

ModulesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModulesContext.prototype.constructor = ModulesContext;

ModulesContext.prototype.module_main = function() {
    return this.getTypedRuleContext(Module_mainContext,0);
};

ModulesContext.prototype.EOF = function() {
    return this.getToken(vlgParser.EOF, 0);
};

ModulesContext.prototype.module = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ModuleContext);
    } else {
        return this.getTypedRuleContext(ModuleContext,i);
    }
};

ModulesContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterModules(this);
	}
};

ModulesContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitModules(this);
	}
};

ModulesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitModules(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.ModulesContext = ModulesContext;

vlgParser.prototype.modules = function() {

    var localctx = new ModulesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, vlgParser.RULE_modules);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 59;
        		this.module();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 62; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 64;
        this.module_main();
        this.state = 65;
        this.match(vlgParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Module_mainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_module_main;
    return this;
}

Module_mainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Module_mainContext.prototype.constructor = Module_mainContext;

Module_mainContext.prototype.module_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Module_itemContext);
    } else {
        return this.getTypedRuleContext(Module_itemContext,i);
    }
};

Module_mainContext.prototype.test_bench = function() {
    return this.getTypedRuleContext(Test_benchContext,0);
};

Module_mainContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterModule_main(this);
	}
};

Module_mainContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitModule_main(this);
	}
};

Module_mainContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitModule_main(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Module_mainContext = Module_mainContext;

vlgParser.prototype.module_main = function() {

    var localctx = new Module_mainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, vlgParser.RULE_module_main);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(vlgParser.T__0);
        this.state = 68;
        this.match(vlgParser.T__1);
        this.state = 69;
        this.match(vlgParser.T__2);
        this.state = 73;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (vlgParser.T__15 - 16)) | (1 << (vlgParser.T__16 - 16)) | (1 << (vlgParser.T__17 - 16)) | (1 << (vlgParser.T__18 - 16)) | (1 << (vlgParser.T__19 - 16)) | (1 << (vlgParser.T__20 - 16)) | (1 << (vlgParser.T__21 - 16)) | (1 << (vlgParser.T__22 - 16)) | (1 << (vlgParser.T__23 - 16)) | (1 << (vlgParser.T__24 - 16)) | (1 << (vlgParser.IDENTIFIER - 16)))) !== 0)) {
            this.state = 70;
            this.module_item();
            this.state = 75;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 77;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__9) {
            this.state = 76;
            this.test_bench();
        }

        this.state = 79;
        this.match(vlgParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ModuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_module;
    return this;
}

ModuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuleContext.prototype.constructor = ModuleContext;

ModuleContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

ModuleContext.prototype.module_ports = function() {
    return this.getTypedRuleContext(Module_portsContext,0);
};

ModuleContext.prototype.module_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Module_itemContext);
    } else {
        return this.getTypedRuleContext(Module_itemContext,i);
    }
};

ModuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterModule(this);
	}
};

ModuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitModule(this);
	}
};

ModuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitModule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.ModuleContext = ModuleContext;

vlgParser.prototype.module = function() {

    var localctx = new ModuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, vlgParser.RULE_module);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(vlgParser.T__0);
        this.state = 82;
        this.match(vlgParser.IDENTIFIER);
        this.state = 84;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__4) {
            this.state = 83;
            this.module_ports();
        }

        this.state = 86;
        this.match(vlgParser.T__2);
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (vlgParser.T__15 - 16)) | (1 << (vlgParser.T__16 - 16)) | (1 << (vlgParser.T__17 - 16)) | (1 << (vlgParser.T__18 - 16)) | (1 << (vlgParser.T__19 - 16)) | (1 << (vlgParser.T__20 - 16)) | (1 << (vlgParser.T__21 - 16)) | (1 << (vlgParser.T__22 - 16)) | (1 << (vlgParser.T__23 - 16)) | (1 << (vlgParser.T__24 - 16)) | (1 << (vlgParser.IDENTIFIER - 16)))) !== 0)) {
            this.state = 87;
            this.module_item();
            this.state = 92;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 93;
        this.match(vlgParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Module_portsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_module_ports;
    return this;
}

Module_portsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Module_portsContext.prototype.constructor = Module_portsContext;

Module_portsContext.prototype.ansi_port_declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Ansi_port_declarationContext);
    } else {
        return this.getTypedRuleContext(Ansi_port_declarationContext,i);
    }
};

Module_portsContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterModule_ports(this);
	}
};

Module_portsContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitModule_ports(this);
	}
};

Module_portsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitModule_ports(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Module_portsContext = Module_portsContext;

vlgParser.prototype.module_ports = function() {

    var localctx = new Module_portsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, vlgParser.RULE_module_ports);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.match(vlgParser.T__4);
        this.state = 96;
        this.ansi_port_declaration();
        this.state = 101;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__5) {
            this.state = 97;
            this.match(vlgParser.T__5);
            this.state = 98;
            this.ansi_port_declaration();
            this.state = 103;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 104;
        this.match(vlgParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Ansi_port_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_ansi_port_declaration;
    return this;
}

Ansi_port_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ansi_port_declarationContext.prototype.constructor = Ansi_port_declarationContext;

Ansi_port_declarationContext.prototype.port_direction = function() {
    return this.getTypedRuleContext(Port_directionContext,0);
};

Ansi_port_declarationContext.prototype.identifier_list = function() {
    return this.getTypedRuleContext(Identifier_listContext,0);
};

Ansi_port_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterAnsi_port_declaration(this);
	}
};

Ansi_port_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitAnsi_port_declaration(this);
	}
};

Ansi_port_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitAnsi_port_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Ansi_port_declarationContext = Ansi_port_declarationContext;

vlgParser.prototype.ansi_port_declaration = function() {

    var localctx = new Ansi_port_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, vlgParser.RULE_ansi_port_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.port_direction();
        this.state = 107;
        this.identifier_list();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Port_directionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_port_direction;
    return this;
}

Port_directionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Port_directionContext.prototype.constructor = Port_directionContext;


Port_directionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterPort_direction(this);
	}
};

Port_directionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitPort_direction(this);
	}
};

Port_directionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitPort_direction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Port_directionContext = Port_directionContext;

vlgParser.prototype.port_direction = function() {

    var localctx = new Port_directionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, vlgParser.RULE_port_direction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        _la = this._input.LA(1);
        if(!(_la===vlgParser.T__7 || _la===vlgParser.T__8)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Module_itemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_module_item;
    return this;
}

Module_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Module_itemContext.prototype.constructor = Module_itemContext;


 
Module_itemContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function InstanceContext(parser, ctx) {
	Module_itemContext.call(this, parser);
    Module_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InstanceContext.prototype = Object.create(Module_itemContext.prototype);
InstanceContext.prototype.constructor = InstanceContext;

vlgParser.InstanceContext = InstanceContext;

InstanceContext.prototype.module_instantiation = function() {
    return this.getTypedRuleContext(Module_instantiationContext,0);
};
InstanceContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterInstance(this);
	}
};

InstanceContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitInstance(this);
	}
};

InstanceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitInstance(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GateContext(parser, ctx) {
	Module_itemContext.call(this, parser);
    Module_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GateContext.prototype = Object.create(Module_itemContext.prototype);
GateContext.prototype.constructor = GateContext;

vlgParser.GateContext = GateContext;

GateContext.prototype.gate_declaration = function() {
    return this.getTypedRuleContext(Gate_declarationContext,0);
};
GateContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterGate(this);
	}
};

GateContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitGate(this);
	}
};

GateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitGate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NetContext(parser, ctx) {
	Module_itemContext.call(this, parser);
    Module_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NetContext.prototype = Object.create(Module_itemContext.prototype);
NetContext.prototype.constructor = NetContext;

vlgParser.NetContext = NetContext;

NetContext.prototype.net_declaration = function() {
    return this.getTypedRuleContext(Net_declarationContext,0);
};
NetContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterNet(this);
	}
};

NetContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitNet(this);
	}
};

NetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitNet(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignContext(parser, ctx) {
	Module_itemContext.call(this, parser);
    Module_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignContext.prototype = Object.create(Module_itemContext.prototype);
AssignContext.prototype.constructor = AssignContext;

vlgParser.AssignContext = AssignContext;

AssignContext.prototype.continuous_assign = function() {
    return this.getTypedRuleContext(Continuous_assignContext,0);
};
AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitAssign(this);
	}
};

AssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};



vlgParser.Module_itemContext = Module_itemContext;

vlgParser.prototype.module_item = function() {

    var localctx = new Module_itemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, vlgParser.RULE_module_item);
    try {
        this.state = 115;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.T__15:
            localctx = new NetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 111;
            this.net_declaration();
            break;
        case vlgParser.T__16:
        case vlgParser.T__17:
        case vlgParser.T__18:
        case vlgParser.T__19:
        case vlgParser.T__20:
        case vlgParser.T__21:
        case vlgParser.T__22:
        case vlgParser.T__23:
            localctx = new GateContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 112;
            this.gate_declaration();
            break;
        case vlgParser.T__24:
            localctx = new AssignContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 113;
            this.continuous_assign();
            break;
        case vlgParser.IDENTIFIER:
            localctx = new InstanceContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 114;
            this.module_instantiation();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Test_benchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_test_bench;
    return this;
}

Test_benchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Test_benchContext.prototype.constructor = Test_benchContext;

Test_benchContext.prototype.test_time = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Test_timeContext);
    } else {
        return this.getTypedRuleContext(Test_timeContext,i);
    }
};

Test_benchContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterTest_bench(this);
	}
};

Test_benchContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitTest_bench(this);
	}
};

Test_benchContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitTest_bench(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Test_benchContext = Test_benchContext;

vlgParser.prototype.test_bench = function() {

    var localctx = new Test_benchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, vlgParser.RULE_test_bench);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(vlgParser.T__9);
        this.state = 118;
        this.match(vlgParser.T__10);
        this.state = 122;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__14) {
            this.state = 119;
            this.test_time();
            this.state = 124;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 125;
        this.match(vlgParser.T__11);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Test_timeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_test_time;
    return this;
}

Test_timeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Test_timeContext.prototype.constructor = Test_timeContext;

Test_timeContext.prototype.time_stamp = function() {
    return this.getTypedRuleContext(Time_stampContext,0);
};

Test_timeContext.prototype.time_assignment_list = function() {
    return this.getTypedRuleContext(Time_assignment_listContext,0);
};

Test_timeContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterTest_time(this);
	}
};

Test_timeContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitTest_time(this);
	}
};

Test_timeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitTest_time(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Test_timeContext = Test_timeContext;

vlgParser.prototype.test_time = function() {

    var localctx = new Test_timeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, vlgParser.RULE_test_time);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.time_stamp();
        this.state = 128;
        this.match(vlgParser.T__12);
        this.state = 129;
        this.time_assignment_list();
        this.state = 130;
        this.match(vlgParser.T__13);
        this.state = 131;
        this.match(vlgParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Time_stampContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_time_stamp;
    return this;
}

Time_stampContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Time_stampContext.prototype.constructor = Time_stampContext;

Time_stampContext.prototype.UNSIGNED_NUMBER = function() {
    return this.getToken(vlgParser.UNSIGNED_NUMBER, 0);
};

Time_stampContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterTime_stamp(this);
	}
};

Time_stampContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitTime_stamp(this);
	}
};

Time_stampContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitTime_stamp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Time_stampContext = Time_stampContext;

vlgParser.prototype.time_stamp = function() {

    var localctx = new Time_stampContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, vlgParser.RULE_time_stamp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(vlgParser.T__14);
        this.state = 134;
        this.match(vlgParser.UNSIGNED_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Time_assignment_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_time_assignment_list;
    return this;
}

Time_assignment_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Time_assignment_listContext.prototype.constructor = Time_assignment_listContext;

Time_assignment_listContext.prototype.time_assignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Time_assignmentContext);
    } else {
        return this.getTypedRuleContext(Time_assignmentContext,i);
    }
};

Time_assignment_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterTime_assignment_list(this);
	}
};

Time_assignment_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitTime_assignment_list(this);
	}
};

Time_assignment_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitTime_assignment_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Time_assignment_listContext = Time_assignment_listContext;

vlgParser.prototype.time_assignment_list = function() {

    var localctx = new Time_assignment_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, vlgParser.RULE_time_assignment_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.time_assignment();
        this.state = 141;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__5) {
            this.state = 137;
            this.match(vlgParser.T__5);
            this.state = 138;
            this.time_assignment();
            this.state = 143;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Time_assignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_time_assignment;
    this.val = null; // Token
    return this;
}

Time_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Time_assignmentContext.prototype.constructor = Time_assignmentContext;

Time_assignmentContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

Time_assignmentContext.prototype.ASSIGN = function() {
    return this.getToken(vlgParser.ASSIGN, 0);
};

Time_assignmentContext.prototype.UNSIGNED_NUMBER = function() {
    return this.getToken(vlgParser.UNSIGNED_NUMBER, 0);
};

Time_assignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterTime_assignment(this);
	}
};

Time_assignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitTime_assignment(this);
	}
};

Time_assignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitTime_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Time_assignmentContext = Time_assignmentContext;

vlgParser.prototype.time_assignment = function() {

    var localctx = new Time_assignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, vlgParser.RULE_time_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        this.match(vlgParser.IDENTIFIER);
        this.state = 145;
        this.match(vlgParser.ASSIGN);
        this.state = 146;
        localctx.val = this.match(vlgParser.UNSIGNED_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Net_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_net_declaration;
    return this;
}

Net_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Net_declarationContext.prototype.constructor = Net_declarationContext;

Net_declarationContext.prototype.identifier_list = function() {
    return this.getTypedRuleContext(Identifier_listContext,0);
};

Net_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterNet_declaration(this);
	}
};

Net_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitNet_declaration(this);
	}
};

Net_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitNet_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Net_declarationContext = Net_declarationContext;

vlgParser.prototype.net_declaration = function() {

    var localctx = new Net_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, vlgParser.RULE_net_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.match(vlgParser.T__15);
        this.state = 149;
        this.identifier_list();
        this.state = 150;
        this.match(vlgParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Gate_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_gate_declaration;
    this.instanceid = null; // Token
    this.ids = null; // Identifier_listContext
    return this;
}

Gate_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Gate_declarationContext.prototype.constructor = Gate_declarationContext;

Gate_declarationContext.prototype.gate_type = function() {
    return this.getTypedRuleContext(Gate_typeContext,0);
};

Gate_declarationContext.prototype.identifier_list = function() {
    return this.getTypedRuleContext(Identifier_listContext,0);
};

Gate_declarationContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

Gate_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterGate_declaration(this);
	}
};

Gate_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitGate_declaration(this);
	}
};

Gate_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitGate_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Gate_declarationContext = Gate_declarationContext;

vlgParser.prototype.gate_declaration = function() {

    var localctx = new Gate_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, vlgParser.RULE_gate_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.gate_type();
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.IDENTIFIER) {
            this.state = 153;
            localctx.instanceid = this.match(vlgParser.IDENTIFIER);
        }

        this.state = 156;
        this.match(vlgParser.T__4);
        this.state = 157;
        localctx.ids = this.identifier_list();
        this.state = 158;
        this.match(vlgParser.T__6);
        this.state = 159;
        this.match(vlgParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Gate_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_gate_type;
    return this;
}

Gate_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Gate_typeContext.prototype.constructor = Gate_typeContext;


Gate_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterGate_type(this);
	}
};

Gate_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitGate_type(this);
	}
};

Gate_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitGate_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Gate_typeContext = Gate_typeContext;

vlgParser.prototype.gate_type = function() {

    var localctx = new Gate_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, vlgParser.RULE_gate_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << vlgParser.T__16) | (1 << vlgParser.T__17) | (1 << vlgParser.T__18) | (1 << vlgParser.T__19) | (1 << vlgParser.T__20) | (1 << vlgParser.T__21) | (1 << vlgParser.T__22) | (1 << vlgParser.T__23))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Continuous_assignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_continuous_assign;
    return this;
}

Continuous_assignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Continuous_assignContext.prototype.constructor = Continuous_assignContext;

Continuous_assignContext.prototype.list_of_assignments = function() {
    return this.getTypedRuleContext(List_of_assignmentsContext,0);
};

Continuous_assignContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterContinuous_assign(this);
	}
};

Continuous_assignContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitContinuous_assign(this);
	}
};

Continuous_assignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitContinuous_assign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Continuous_assignContext = Continuous_assignContext;

vlgParser.prototype.continuous_assign = function() {

    var localctx = new Continuous_assignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, vlgParser.RULE_continuous_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.match(vlgParser.T__24);
        this.state = 164;
        this.list_of_assignments();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function List_of_assignmentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_list_of_assignments;
    return this;
}

List_of_assignmentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
List_of_assignmentsContext.prototype.constructor = List_of_assignmentsContext;

List_of_assignmentsContext.prototype.assignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignmentContext);
    } else {
        return this.getTypedRuleContext(AssignmentContext,i);
    }
};

List_of_assignmentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterList_of_assignments(this);
	}
};

List_of_assignmentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitList_of_assignments(this);
	}
};

List_of_assignmentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitList_of_assignments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.List_of_assignmentsContext = List_of_assignmentsContext;

vlgParser.prototype.list_of_assignments = function() {

    var localctx = new List_of_assignmentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, vlgParser.RULE_list_of_assignments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.assignment();
        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__5) {
            this.state = 167;
            this.match(vlgParser.T__5);
            this.state = 168;
            this.assignment();
            this.state = 173;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

AssignmentContext.prototype.ASSIGN = function() {
    return this.getToken(vlgParser.ASSIGN, 0);
};

AssignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitAssignment(this);
	}
};

AssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.AssignmentContext = AssignmentContext;

vlgParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, vlgParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.match(vlgParser.IDENTIFIER);
        this.state = 175;
        this.match(vlgParser.ASSIGN);
        this.state = 176;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Module_instantiationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_module_instantiation;
    this.moduleid = null; // Token
    this.instanceid = null; // Token
    return this;
}

Module_instantiationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Module_instantiationContext.prototype.constructor = Module_instantiationContext;

Module_instantiationContext.prototype.list_of_module_connections = function() {
    return this.getTypedRuleContext(List_of_module_connectionsContext,0);
};

Module_instantiationContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(vlgParser.IDENTIFIER);
    } else {
        return this.getToken(vlgParser.IDENTIFIER, i);
    }
};


Module_instantiationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterModule_instantiation(this);
	}
};

Module_instantiationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitModule_instantiation(this);
	}
};

Module_instantiationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitModule_instantiation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Module_instantiationContext = Module_instantiationContext;

vlgParser.prototype.module_instantiation = function() {

    var localctx = new Module_instantiationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, vlgParser.RULE_module_instantiation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        localctx.moduleid = this.match(vlgParser.IDENTIFIER);
        this.state = 179;
        localctx.instanceid = this.match(vlgParser.IDENTIFIER);
        this.state = 180;
        this.list_of_module_connections();
        this.state = 181;
        this.match(vlgParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function List_of_module_connectionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_list_of_module_connections;
    return this;
}

List_of_module_connectionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
List_of_module_connectionsContext.prototype.constructor = List_of_module_connectionsContext;

List_of_module_connectionsContext.prototype.named_port_connection = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Named_port_connectionContext);
    } else {
        return this.getTypedRuleContext(Named_port_connectionContext,i);
    }
};

List_of_module_connectionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterList_of_module_connections(this);
	}
};

List_of_module_connectionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitList_of_module_connections(this);
	}
};

List_of_module_connectionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitList_of_module_connections(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.List_of_module_connectionsContext = List_of_module_connectionsContext;

vlgParser.prototype.list_of_module_connections = function() {

    var localctx = new List_of_module_connectionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, vlgParser.RULE_list_of_module_connections);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(vlgParser.T__4);
        this.state = 184;
        this.named_port_connection();
        this.state = 189;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__5) {
            this.state = 185;
            this.match(vlgParser.T__5);
            this.state = 186;
            this.named_port_connection();
            this.state = 191;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 192;
        this.match(vlgParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Named_port_connectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_named_port_connection;
    this.paramid = null; // Token
    this.variableid = null; // Token
    return this;
}

Named_port_connectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Named_port_connectionContext.prototype.constructor = Named_port_connectionContext;

Named_port_connectionContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(vlgParser.IDENTIFIER);
    } else {
        return this.getToken(vlgParser.IDENTIFIER, i);
    }
};


Named_port_connectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterNamed_port_connection(this);
	}
};

Named_port_connectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitNamed_port_connection(this);
	}
};

Named_port_connectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitNamed_port_connection(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Named_port_connectionContext = Named_port_connectionContext;

vlgParser.prototype.named_port_connection = function() {

    var localctx = new Named_port_connectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, vlgParser.RULE_named_port_connection);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.match(vlgParser.T__25);
        this.state = 195;
        localctx.paramid = this.match(vlgParser.IDENTIFIER);
        this.state = 196;
        this.match(vlgParser.T__4);
        this.state = 197;
        localctx.variableid = this.match(vlgParser.IDENTIFIER);
        this.state = 198;
        this.match(vlgParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};

ExpressionContext.prototype.unary_operator = function() {
    return this.getTypedRuleContext(Unary_operatorContext,0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.binary_operator = function() {
    return this.getTypedRuleContext(Binary_operatorContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



vlgParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 44;
    this.enterRecursionRule(localctx, 44, vlgParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.T__4:
        case vlgParser.IDENTIFIER:
        case vlgParser.UNSIGNED_NUMBER:
        case vlgParser.BINARY_NUMBER:
            this.state = 201;
            this.primary();
            break;
        case vlgParser.NOT:
        case vlgParser.NEG:
        case vlgParser.NAND:
        case vlgParser.NOR:
        case vlgParser.XOR:
        case vlgParser.AMPERSAND:
        case vlgParser.BAR:
            this.state = 202;
            this.unary_operator();
            this.state = 203;
            this.primary();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 213;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expression);
                this.state = 207;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 208;
                this.binary_operator();
                this.state = 209;
                this.expression(2); 
            }
            this.state = 215;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function PrimaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_primary;
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;

PrimaryContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

PrimaryContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

PrimaryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrimaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterPrimary(this);
	}
};

PrimaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitPrimary(this);
	}
};

PrimaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitPrimary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.PrimaryContext = PrimaryContext;

vlgParser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, vlgParser.RULE_primary);
    try {
        this.state = 222;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.UNSIGNED_NUMBER:
        case vlgParser.BINARY_NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 216;
            this.number();
            break;
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 217;
            this.match(vlgParser.IDENTIFIER);
            break;
        case vlgParser.T__4:
            this.enterOuterAlt(localctx, 3);
            this.state = 218;
            this.match(vlgParser.T__4);
            this.state = 219;
            this.expression(0);
            this.state = 220;
            this.match(vlgParser.T__6);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Unary_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_unary_operator;
    return this;
}

Unary_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_operatorContext.prototype.constructor = Unary_operatorContext;

Unary_operatorContext.prototype.NOT = function() {
    return this.getToken(vlgParser.NOT, 0);
};

Unary_operatorContext.prototype.NEG = function() {
    return this.getToken(vlgParser.NEG, 0);
};

Unary_operatorContext.prototype.AMPERSAND = function() {
    return this.getToken(vlgParser.AMPERSAND, 0);
};

Unary_operatorContext.prototype.NAND = function() {
    return this.getToken(vlgParser.NAND, 0);
};

Unary_operatorContext.prototype.BAR = function() {
    return this.getToken(vlgParser.BAR, 0);
};

Unary_operatorContext.prototype.NOR = function() {
    return this.getToken(vlgParser.NOR, 0);
};

Unary_operatorContext.prototype.XOR = function() {
    return this.getToken(vlgParser.XOR, 0);
};

Unary_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterUnary_operator(this);
	}
};

Unary_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitUnary_operator(this);
	}
};

Unary_operatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitUnary_operator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Unary_operatorContext = Unary_operatorContext;

vlgParser.prototype.unary_operator = function() {

    var localctx = new Unary_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, vlgParser.RULE_unary_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        _la = this._input.LA(1);
        if(!(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (vlgParser.NOT - 27)) | (1 << (vlgParser.NEG - 27)) | (1 << (vlgParser.NAND - 27)) | (1 << (vlgParser.NOR - 27)) | (1 << (vlgParser.XOR - 27)) | (1 << (vlgParser.AMPERSAND - 27)) | (1 << (vlgParser.BAR - 27)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Binary_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_binary_operator;
    return this;
}

Binary_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Binary_operatorContext.prototype.constructor = Binary_operatorContext;

Binary_operatorContext.prototype.AMPERSAND = function() {
    return this.getToken(vlgParser.AMPERSAND, 0);
};

Binary_operatorContext.prototype.BAR = function() {
    return this.getToken(vlgParser.BAR, 0);
};

Binary_operatorContext.prototype.XOR = function() {
    return this.getToken(vlgParser.XOR, 0);
};

Binary_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterBinary_operator(this);
	}
};

Binary_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitBinary_operator(this);
	}
};

Binary_operatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitBinary_operator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Binary_operatorContext = Binary_operatorContext;

vlgParser.prototype.binary_operator = function() {

    var localctx = new Binary_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, vlgParser.RULE_binary_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 226;
        _la = this._input.LA(1);
        if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (vlgParser.XOR - 31)) | (1 << (vlgParser.AMPERSAND - 31)) | (1 << (vlgParser.BAR - 31)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Identifier_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_identifier_list;
    return this;
}

Identifier_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Identifier_listContext.prototype.constructor = Identifier_listContext;

Identifier_listContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(vlgParser.IDENTIFIER);
    } else {
        return this.getToken(vlgParser.IDENTIFIER, i);
    }
};


Identifier_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterIdentifier_list(this);
	}
};

Identifier_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitIdentifier_list(this);
	}
};

Identifier_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitIdentifier_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Identifier_listContext = Identifier_listContext;

vlgParser.prototype.identifier_list = function() {

    var localctx = new Identifier_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, vlgParser.RULE_identifier_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
        this.match(vlgParser.IDENTIFIER);
        this.state = 233;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 229;
                this.match(vlgParser.T__5);
                this.state = 230;
                this.match(vlgParser.IDENTIFIER); 
            }
            this.state = 235;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.UNSIGNED_NUMBER = function() {
    return this.getToken(vlgParser.UNSIGNED_NUMBER, 0);
};

NumberContext.prototype.BINARY_NUMBER = function() {
    return this.getToken(vlgParser.BINARY_NUMBER, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.NumberContext = NumberContext;

vlgParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, vlgParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        _la = this._input.LA(1);
        if(!(_la===vlgParser.UNSIGNED_NUMBER || _la===vlgParser.BINARY_NUMBER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


vlgParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 22:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

vlgParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.vlgParser = vlgParser;
