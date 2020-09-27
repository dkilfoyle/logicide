(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports, require("d3"), require("elkjs"))
    : typeof define === "function" && define.amd
    ? define(["exports", "d3", "elkjs"], factory)
    : factory((global.d3 = global.d3 || {}), global.d3, global.ELK);
})(this, function(exports, d3, ELK) {
  "use strict";

  ELK = ELK && ELK.hasOwnProperty("default") ? ELK["default"] : ELK;

  var PORT_MARKERS = {
    WEST: {
      INPUT: "#westInPortMarker",
      OUTPUT: "#westOutPortMarker",
    },
    EAST: {
      INPUT: "#eastInPortMarker",
      OUTPUT: "#eastOutPortMarker",
    },
    NORTH: {
      INPUT: "#northInPortMarker",
      OUTPUT: "#northOutPortMarker",
    },
    SOUTH: {
      INPUT: "#southInPortMarker",
      OUTPUT: "#southOutPortMarker",
    },
  };

  function addMarkers(defs, PORT_PIN_SIZE) {
    // real size of marker
    var w = 7;
    var h = 10;

    function addMarker(id, arrowTranslate, arrowRotate = 0) {
      var rightArrow = "M 0 4  2 4  2 0  7 5  2 10  2 6  0 6 Z";
      var trans = "";

      if (arrowTranslate[0] != 0 || arrowTranslate[1] != 0) trans += "translate(" + arrowTranslate[0] + ", " + arrowTranslate[1] + ")";

      if (arrowRotate != 0) trans += "rotate(" + arrowRotate + ")";

      var cont = defs.append("g");

      cont
        .attr("id", id)
        .attr("class", "port")
        .append("path")
        .attr("d", rightArrow);

      if (trans) cont.attr("transform", trans);
    }

    var horizYoffet = (PORT_PIN_SIZE[1] - h) * 0.5;
    var horizYoffet2 = (PORT_PIN_SIZE[1] + h) * 0.5;

    var vertXOffet = -(PORT_PIN_SIZE[1] - w) * 0.5;
    addMarker("westInPortMarker", [0, horizYoffet]);
    addMarker("westOutPortMarker", [w, horizYoffet2], 180);

    addMarker("eastInPortMarker", [w, horizYoffet2], 180);
    addMarker("eastOutPortMarker", [0, horizYoffet]);

    addMarker("northInPortMarker", [vertXOffet, -w], 90);
    addMarker("northOutPortMarker", [vertXOffet, 0], 270);

    addMarker("southInPortMarker", [vertXOffet, w], 270);
    addMarker("southOutPortMarker", [vertXOffet, 0], 90);
  }

  function getIOMarker(d) {
    var side = d.properties.portSide;
    var portType = d.direction;
    var marker = PORT_MARKERS[side][portType];
    if (marker === undefined) {
      throw new Error("Wrong side, portType", side, portType);
    }
    return marker;
  }

  /**
   * Node renderer selector,
   * by specified selector functions select renderer object for node
   */
  class NodeRenderers {
    constructor() {
      this.renderers = [];
      // renderer : list of nodes
      this.nodesForRenderers = {};
      // data.id : renderer
      this.rendererForNode = {};
    }

    registerRenderer(renderer) {
      this.renderers.push(renderer);
    }

    prepare(node) {
      var r = null;
      this.renderers.some(function(ren) {
        if (ren.selector(node)) r = ren;
        return r != null;
      });
      if (r == null) {
        throw new Error("Can not resolve renderer for node " + node);
      }

      var nodeList = this.nodesForRenderers[r];
      if (typeof nodeList === "undefined") {
        nodeList = [];
        this.nodesForRenderers[r] = nodeList;
      }

      nodeList.push(node);
      this.rendererForNode[node.id] = r;

      r.prepare(node);
    }

    render(root, nodeG) {
      // [TODO] find out how to construct d3.selection from list of html objects
      //var nodes = this.nodesForRenderers;
      //for (var r in dictionary) {
      //    if (dictionary.hasOwnProperty(r)) {
      //        r.render(root, nodes);
      //    }
      //}
      var rfn = this.rendererForNode;
      var nfr = this.nodesForRenderers;
      this.renderers.forEach(function(r) {
        var _nfr = nfr[r];
        if (typeof _nfr !== "undefined" && _nfr.length > 0) {
          var nodes = nodeG.filter(function(n) {
            return rfn[n.id] === r;
          });
          r.render(root, nodes);
        }
      });
    }
  }

  class GenericNodeRenderer {
    /**
     * @param schematic instance of HwSchematic
     **/
    constructor(schematic) {
      this.schematic = schematic;
    }
    /**
     * check if this selector should be used for this node
     **/
    selector(node) {
      return true;
    }

    getNodeLabelWidth(d) {
      var schematic = this.schematic;
      var widthOfText = schematic.widthOfText.bind(schematic);
      return widthOfText(d.hwMeta.name);
    }

    /**
     * Init bodyText and resolve size of node from body text and ports
     *
     * @param d component node
     *
     */
    initNodeSizes(d) {
      var schematic = this.schematic;
      if (d.properties["org.eclipse.elk.noLayout"]) return;
      var ignorePortLabel = d.children && !d.hideChildren;
      if (d.ports != null)
        d.ports.forEach(function(p) {
          p.ignoreLabel = ignorePortLabel;
        });
      var widthOfText = schematic.widthOfText.bind(schematic);

      var labelW = this.getNodeLabelWidth(d);
      var max = Math.max;
      var bodyTextSize = this.initBodyTextLines(d);
      const MBT = schematic.MAX_NODE_BODY_TEXT_SIZE;
      bodyTextSize[0] = Math.min(bodyTextSize[0], MBT[0]);
      bodyTextSize[1] = Math.min(bodyTextSize[1], MBT[1]);

      // {PortSide: (portCnt, portWidth)}
      var portDim = {
        WEST: [0, 0],
        EAST: [0, 0],
        SOUTH: [0, 0],
        NORTH: [0, 0],
      };
      var PORT_PIN_SIZE_x = schematic.PORT_PIN_SIZE[0],
        PORT_PIN_SIZE_y = schematic.PORT_PIN_SIZE[1];
      var CHAR_WIDTH = schematic.CHAR_WIDTH;
      if (d.ports != null)
        d.ports.forEach(function(p) {
          var t = p.properties.portSide;
          var indent = 0;
          if (p.hwMeta.level > 0) indent = (p.hwMeta.level + 1) * CHAR_WIDTH;
          var portW = widthOfText(p.hwMeta.name) + indent;
          var pDim = portDim[t];
          if (pDim === undefined) throw new Error(t);
          pDim[0]++;
          pDim[1] = max(pDim[1], portW);

          // dimension of connection pin
          p.width = PORT_PIN_SIZE_x;
          p.height = PORT_PIN_SIZE_y;
        });

      var west = portDim["WEST"],
        east = portDim["EAST"],
        south = portDim["SOUTH"],
        north = portDim["NORTH"];

      var portColums = 0;
      if (west[0] && west[1] > 0) portColums += 1;
      if (east[0] && east[1] > 0) portColums += 1;

      var middleSpacing = 0;
      if (portColums == 2) middleSpacing = schematic.NODE_MIDDLE_PORT_SPACING;
      var portW = max(west[1], east[1]);

      d.portLabelWidth = portW;
      d.width = max(portW * portColums + middleSpacing, labelW, max(south[0], north[0]) * schematic.PORT_HEIGHT) + bodyTextSize[0] + CHAR_WIDTH;
      d.height = max(max(west[0], east[0]) * schematic.PORT_HEIGHT, bodyTextSize[1], max(south[1], north[1]) * CHAR_WIDTH);
    }

    /**
     * Split bodyText of one to lines and resolve dimensions of body text
     *
     * @param d component node
     */
    initBodyTextLines(d) {
      var schematic = this.schematic;
      var max = Math.max;
      var bt = d.hwMeta.bodyText;
      if (bt) {
        if (typeof bt === "string") {
          bt = d.hwMeta.bodyText = bt.split("\n");
        }
        var bodyTextW = 0;
        bt.forEach(function(line) {
          bodyTextW = max(bodyTextW, line.length);
        });
        bodyTextW *= schematic.CHAR_WIDTH;
        var bodyTextH = bt.length * schematic.CHAR_HEIGHT;
      } else {
        var bodyTextW = 0;
        var bodyTextH = 0;
      }
      var pad = schematic.BODY_TEXT_PADDING;
      if (bodyTextW > 0) bodyTextW += pad[1] + pad[3];
      if (bodyTextH > 0) bodyTextH += pad[0] + pad[2];
      return [bodyTextW, bodyTextH];
    }

    /**
     * @param bodyTexts list of strings
     */
    renderTextLines(bodyTexts) {
      var schematic = this.schematic;
      const padTop = schematic.BODY_TEXT_PADDING[0];
      const padLeft = schematic.BODY_TEXT_PADDING[3];
      const MBT = schematic.MAX_NODE_BODY_TEXT_SIZE;
      const CHAR_WIDTH = schematic.CHAR_WIDTH;
      const CHAR_HEIGHT = schematic.CHAR_HEIGHT;

      bodyTexts.each(function() {
        var bodyText = d3.select(this);
        var d = bodyText.data()[0];
        var bodyTextLines = d.hwMeta.bodyText;
        var _MBT = [MBT[0] / CHAR_WIDTH, MBT[1] / schematic.CHAR_HEIGHT];

        if (bodyTextLines && (d.children == null || d.children.length == 0 || d.hideChildren)) {
          bodyTextLines.forEach(function(line, dy) {
            if (line.length > _MBT[0]) line = line.slice(0, _MBT[0] - 3) + "...";
            if (dy > _MBT[1]) return;
            bodyText
              .append("tspan")
              .attr("x", d.portLabelWidth + padLeft)
              .attr("y", padTop)
              .attr("dy", dy + "em")
              .text(line);
          });
        }
      });
    }

    /**
     * Prepare node before ELK processing
     * */
    prepare(node) {
      this.initNodeSizes(node);
    }

    /**
     * Render svg of node
     *
     * @param root root svg element where nodes should be rendered
     * @param nodeG svg g for each node with data binded
     * */
    render(root, nodeG) {
      var schematic = this.schematic;
      var node = nodeG.attr("class", function(d) {
        if (d.hwMeta && d.hwMeta.isExternalPort) {
          return "node-external-port";
        } else {
          return "node";
        }
      });
      var nodeBody = node.append("rect");
      // set dimensions and style of node
      nodeBody
        .attr("width", function(d) {
          return d.width;
        })
        .attr("height", function(d) {
          return d.height;
        })
        .attr("rx", 5) // rounded corners
        .attr("ry", 5);

      // apply node positions
      node.attr("transform", function(d) {
        if (typeof d.x === "undefined" || typeof d.x === "undefined") {
          throw new Error("Node with undefined position", d);
        }
        return "translate(" + d.x + " " + d.y + ")";
      });

      // spot node label
      node.append("text").text(function(d) {
        if (d.hwMeta && !d.hwMeta.isExternalPort) {
          return d.hwMeta.name;
        } else {
          return "";
        }
      });

      // spot node body text
      node.append("text").call(this.renderTextLines.bind(this));

      this.renderPorts(node);
    }

    renderPorts(node) {
      var schematic = this.schematic;
      var PORT_HEIGHT = schematic.PORT_HEIGHT;
      var CHAR_WIDTH = schematic.CHAR_WIDTH;
      var portG = node
        .selectAll(".port")
        .data(function(d) {
          return d.ports || [];
        })
        .enter()
        .append("g");

      // apply port positions
      portG
        //.transition()
        //.duration(0)
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        });

      // spot port name
      portG
        .append("text")
        .text(function(d) {
          if (d.ignoreLabel) return "";
          else if (d.hwMeta.level) {
            var indent = "-".repeat(d.hwMeta.level);
            var side = d.properties.portSide;
            if (side == "WEST") {
              return indent + d.hwMeta.name;
            } else if (side == "EAST") {
              return d.hwMeta.name + indent;
            } else {
              throw new Error(side);
            }
          } else return d.hwMeta.name;
        })
        .attr("x", function(d) {
          var side = d.properties.portSide;
          if (side == "WEST") {
            return 7;
          } else if (side == "EAST") {
            //if (d.hwMeta.name === null || d.hwMeta.name.length == 0) {
            //    return 0;
            //}
            if (typeof this.getBBox == "undefined") {
              // JSDOM under nodejs
              return -this.textContent.length * CHAR_WIDTH - CHAR_WIDTH / 2;
            }
            return -this.getBBox().width - CHAR_WIDTH / 2;
          } else if (side == "NORTH") {
            return 0;
          } else if (side == "SOUTH") {
            return 0;
          } else {
            throw new Error(side);
          }
        })
        .attr("y", PORT_HEIGHT * 0.75);

      // spot input/output marker
      portG.append("use").attr("href", getIOMarker);
    }
  }

  /**
   * Library of functions which creates shapes of operator nodes (gate symbols)
   **/

  /**
   * Draw a circle for arithmetic nodes
   */
  function nodeCircle(root) {
    root
      .append("circle")
      .attr("r", "12.5")
      .attr("cx", "12.5")
      .attr("cy", "12.5");
  }

  /**
   * Draw a negation circle for nodes like NOT, NAND, NOR, etc...
   */
  function negationCircle(root, x, y) {
    root
      .append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", "3");
  }

  function nodeCircleWithText(root, text) {
    // width="25" height="25"
    var tl = text.length;
    if (tl > 2) {
      throw new Error("Text too big for small node circle");
    }
    var x = 8;
    if (tl == 2) x = 4;

    nodeCircle(root);
    root
      .append("text")
      .attr("x", x)
      .attr("y", 16)
      .text(text);
  }

  function operatorBox(root) {
    root
      .append("rect")
      .attr("width", "25")
      .attr("height", "25")
      .attr("x", "0")
      .attr("y", "0");
  }

  /**
   * Draw a AND gate symbol
   */
  function AND(root, addName = true) {
    // width="30" height="25"
    var g = root.append("g");
    g.append("path").attr("d", "M0,0 L0,25 L15,25 A15 12.5 0 0 0 15,0 Z");
    g.attr("transform", "scale(0.8) translate(0, 3)");
    if (addName)
      root
        .append("text")
        .attr("x", 8)
        .attr("y", 16)
        .text("&");
    return g;
  }

  /**
   * Draw a NAND gate symbol
   */
  function NAND(root) {
    // width="30" height="25"
    AND(root, false);
    negationCircle(root, 34, 12.5);
  }

  var OR_SHAPE_PATH = "M3,0 A30 25 0 0 1 3,25 A30 25 0 0 0 33,12.5 A30 25 0 0 0 3,0";
  /**
   * Draw a OR gate symbol
   */
  function OR(root, addName = true) {
    // width="30" height="25"
    var g = root.append("g");
    g.append("path").attr("d", OR_SHAPE_PATH);
    g.attr("transform", "scale(0.8) translate(0, 3)");
    if (addName)
      root
        .append("text")
        .attr("x", 5)
        .attr("y", 16)
        .text("or");
    return g;
  }

  /**
   * Draw a NOR gate symbol
   */
  function NOR(root) {
    // width="33" height="25"
    var g = OR(root, false);
    g.append("circle")
      .attr("cx", "34")
      .attr("cy", "12.5")
      .attr("r", "3");
    root
      .append("text")
      .attr("x", 5)
      .attr("y", 16)
      .text("!|");
  }

  /**
   * Draw a XOR gate symbol
   */
  function XOR(root) {
    var g = OR(root, false);
    g.append("path").attr("d", "M0,0 A30 25 0 0 1 0,25");
    root
      .append("text")
      .attr("x", 8)
      .attr("y", 16)
      .text("^");

    return g;
  }

  /**
   * Draw a NXOR gate symbol
   */
  function NXOR(root) {
    // width="33" height="25"
    var g = XOR(root);
    negationCircle(g, 35, 12.5);
    root
      .append("text")
      .attr("x", 4)
      .attr("y", 16)
      .text("!^");
  }

  /**
   * Draw a NOT gate symbol
   */
  function NOT(root) {
    // width="30" height="20"
    root.append("path").attr("d", "M0,2.5 L0,22.5 L20,12.5 Z");
    negationCircle(root, 23, 12.5);
    root
      .append("text")
      .attr("x", 2)
      .attr("y", 16)
      .text("!");
  }

  /**
   * Draw a FF register symbol
   */
  function FF(root) {
    // width="25" height="25"
    operatorBox(root);

    root.append("path").attr("d", "M0,2 L5,7 L0,12");

    root
      .append("text")
      .attr("x", 5)
      .attr("y", 16)
      .text("FF");
  }

  function RISING_EDGE(root) {
    // width="25" height="25"
    operatorBox(root);

    root.append("path").attr("d", "M5,20 L12.5,20 L12.5,5 L20,5");
  }

  function FALLING_EDGE(root) {
    // width="25" height="25"
    operatorBox(root);

    root.append("path").attr("d", "M5,5 L12.5,5 L12.5,20 L20,20");
  }

  const SHAPES = {
    NOT: NOT,

    AND: AND,
    NAND: NAND,
    OR: OR,
    NOR: NOR,
    XOR: XOR,
    NXOR: NXOR,

    RISING_EDGE: RISING_EDGE,
    FALLING_EDGE: FALLING_EDGE,

    ADD: function ADD(root) {
      nodeCircleWithText(root, "+");
    },
    SUB: function SUB(root) {
      nodeCircleWithText(root, "-");
    },

    EQ: function EQ(root) {
      nodeCircleWithText(root, "=");
    },
    NEQ: function NEQ(root) {
      nodeCircleWithText(root, "!=");
    },
    LT: function LT(root) {
      nodeCircleWithText(root, "<");
    },
    LE: function LE(root) {
      nodeCircleWithText(root, "<=");
    },
    GE: function GE(root) {
      nodeCircleWithText(root, ">=");
    },
    GT: function GT(root) {
      nodeCircleWithText(root, ">");
    },

    MUL: function GT(root) {
      nodeCircleWithText(root, "*");
    },
    DIV: function GT(root) {
      nodeCircleWithText(root, "/");
    },

    FF: FF,
  };

  class OperatorNodeRenderer extends GenericNodeRenderer {
    constructor(schematic) {
      super(schematic);

      this.SHAPES = SHAPES;
      this.DEFULT_NODE_SIZE = [25, 25];
    }
    prepare(node) {
      var defs = this.schematic.defs;
      var SHAPES$$1 = this.SHAPES;
      for (var key in SHAPES$$1) {
        if (SHAPES$$1.hasOwnProperty(key)) {
          this.addShapeToDefs(defs, key, SHAPES$$1[key]);
        }
      }
      node.width = this.DEFULT_NODE_SIZE[0];
      node.height = this.DEFULT_NODE_SIZE[1];
    }

    selector(node) {
      return typeof this.SHAPES[node.hwMeta.name] !== "undefined";
    }

    addShapeToDefs(defs, id, shape) {
      var cont = defs.append("g");

      cont.attr("id", id);
      cont.attr("class", "node-operator");
      shape(cont);
    }

    /**
     * Render svg of node
     *
     * @param root root svg element where nodes should be rendered
     * @param nodeG svg g for each node with data binded
     * */
    render(root, nodeG) {
      var schematic = this.schematic;

      // apply node positions
      nodeG
        //.transition()
        //.duration(0)
        .attr("transform", function(d) {
          if (typeof d.x === "undefined" || typeof d.x === "undefined") {
            throw new Error("Node with undefined position", d);
          }
          return "translate(" + d.x + " " + d.y + ")";
        });

      nodeG.append("use").attr("href", function(d) {
        return "#" + d.hwMeta.name;
      });
    }
  }

  /**
   * Draw a multiplexer operator symbol
   */

  function MUX_SHAPE(root) {
    // width="20" height="40"
    root.append("path").attr("d", "M0,0 L20,10 L20,30 L0,40 Z");
  }

  class MuxNodeRenderer extends GenericNodeRenderer {
    constructor(schematic) {
      super(schematic);
      this.DEFULT_NODE_SIZE = [20, 40];
    }

    prepare(node) {
      var defs = this.schematic.defs;
      this.addShapeToDefs(defs);
      node.width = this.DEFULT_NODE_SIZE[0];
      node.height = this.DEFULT_NODE_SIZE[1];
    }

    selector(node) {
      return node.hwMeta.name === "MUX" || node.hwMeta.name === "LATCHED_MUX";
    }

    addShapeToDefs(defs) {
      var cont = defs.append("g");
      cont.attr("id", "MUX");
      cont.attr("class", "node-operator");
      MUX_SHAPE(cont);

      var cont = defs.append("g");
      cont.attr("id", "LATCHED_MUX");
      cont.attr("class", "node-operator");
      MUX_SHAPE(cont);
      cont
        .append("text")
        .text("LA")
        .attr("y", "10")
        .attr("x", "10")
        .attr("style", "writing-mode: tb;");
    }

    /**
     * Render svg of node
     *
     * @param root root svg element where nodes should be rendered
     * @param nodeG svg g for each node with data binded
     * */
    render(root, nodeG) {
      var schematic = this.schematic;

      // apply node positions
      nodeG.attr("transform", function(d) {
        if (typeof d.x === "undefined" || typeof d.x === "undefined") {
          throw new Error("Node with undefined position", d);
        }
        return "translate(" + d.x + " " + d.y + ")";
      });

      nodeG.append("use").attr("href", function(d) {
        return "#" + d.hwMeta.name;
      });
    }
  }

  class SliceNodeRenderer extends GenericNodeRenderer {
    selector(node) {
      return node.hwMeta.name === "SLICE" || node.hwMeta.name === "CONCAT";
    }

    getNodeLabelWidth(node) {
      return 0;
    }

    render(root, nodeG) {
      var schematic = this.schematic;
      var node = nodeG;
      var nodeBody = node.append("rect");
      // set dimensions and style of node
      nodeBody
        .attr("width", function(d) {
          return d.width;
        })
        .attr("height", function(d) {
          return d.height;
        })
        .attr("class", "node")
        .attr("rx", 5) // rounded corners
        .attr("ry", 5);

      // black thick line
      node
        .append("rect")
        .attr("x", function(d) {
          if (d.hwMeta.name == "SLICE") {
            return 0;
          } else {
            return d.width - 3;
          }
        })
        .attr("width", "3")
        .attr("height", function(d) {
          return d.height;
        })
        .attr("style", "fill:black;");

      // apply node positions
      node
        //.transition()
        //.duration(0)
        .attr("transform", function(d) {
          if (typeof d.x === "undefined" || typeof d.x === "undefined") {
            throw new Error("Node with undefined position", d);
          }
          return "translate(" + d.x + " " + d.y + ")";
        });

      this.renderPorts(node);
    }
  }

  const RUNNING_IN_NODE = typeof require !== "undefined";
  const NO_LAYOUT = "org.eclipse.elk.noLayout";
  // kgraph properties that shall be copied
  const KGRAPH_KEYS = ["x", "y", "width", "height", "sections", "sourcePoint", "targetPoint", "junctionPoints", "properties"].reduce(function(
    p,
    c
  ) {
    p[c] = 1;
    return p;
  },
  {});

  class d3elk {
    constructor() {
      // containers
      this.nodes = [];
      this.edges = [];
      this.graph = {}; // internal (hierarchical graph)
      this._options = {};
      // {id(str): object from input graph}
      this._d3ObjMap = {};
      // dimensions
      this.width = 0;
      this.height = 0;
      this._transformGroup = undefined;

      // the layouter instance
      this.layouter = new ELK({
        algorithms: ["layered"],
      });
    }

    /**
     * Setting the available area, the positions of the layouted graph are
     * currently scaled down.
     */
    size(size) {
      if (!arguments.length) return [this.width, this.height];

      this.width = size[0];
      this.height = size[1];

      // console.log(`d3elk: size(${this.width}, ${this.height}`);
      if (this.graph != null) {
        this.graph.width = this.width;
        this.graph.height = this.height;
      }
      return this;
    }

    /**
     * Convert section from ELK json to svg path string
     */
    static section2svgPath(section) {
      var pathBuff = ["M", section.startPoint.x, section.startPoint.y];
      if (section.bendPoints)
        section.bendPoints.forEach(function(bp, i) {
          pathBuff.push("L");
          pathBuff.push(bp.x);
          pathBuff.push(bp.y);
        });

      pathBuff.push("L");
      pathBuff.push(section.endPoint.x);
      pathBuff.push(section.endPoint.y);
      return pathBuff.join(" ");
    }

    /**
     * Sets the group used to perform 'zoomToFit'.
     * */
    transformGroup(g) {
      if (!arguments.length) return this._transformGroup;
      this._transformGroup = g;
      return this;
    }

    options(opts) {
      if (!arguments.length) return this._options;
      this._options = opts;
      return this;
    }

    /**
     * Start the layout process.
     */
    start() {
      return this.layouter.layout(this.graph, { layoutOptions: this._options }).then(this.applyLayout.bind(this));
    }

    getNodes() {
      if (this.__nodeCache != null) return this.__nodeCache;

      var queue = [this.graph],
        nodes = [],
        parent;
      // note that svg z-index is document order, literally
      while ((parent = queue.pop()) != null) {
        if (!parent.properties[NO_LAYOUT]) {
          nodes.push(parent);
          (parent.children || []).forEach(function(c) {
            queue.push(c);
          });
        }
      }
      this.__nodeCache = nodes;
      return nodes;
    }

    getPorts() {
      if (this.__portsCache != null) return this.__portsCache;

      var ports = d3.merge(
        this.getNodes().map(function(n) {
          return n.ports || [];
        })
      );
      this.__portsCache = ports;
    }

    getEdges() {
      if (this.__edgesCache != null) return this.__edgesCache;

      this.__edgesCache = this.graph.edges || [];

      var edgesOfChildren = d3.merge(
        this.getNodes()
          .filter(function(n) {
            return !n.hideChildren;
          })
          .map(function(n) {
            return n.edges || [];
          })
      );

      this.__edgesCache = this.__edgesCache.concat(edgesOfChildren);
      return this.__edgesCache;
    }

    invalidateCaches() {
      this._d3ObjMap = {};
      this.__nodeCache = null;
      this.__portsCache = null;
      this.__edgesCache = null;
    }

    kgraph(root) {
      if (!arguments.length) return this.graph;

      var g = (this.graph = root);
      this.invalidateCaches();
      // alias applyLayout method
      if (!g.id) g.id = "root";
      if (!g.properties) g.properties = { algorithm: "layered" };
      if (!g.properties.algorithm) g.properties.algorithm = "layered";
      if (!g.width) g.width = this.width;
      if (!g.height) g.height = this.height;

      return this;
    }

    onError(e) {
      throw e;
    }

    /**
     * Clean all layout possitions from nodes, nets and ports
     */
    cleanLayout(n) {
      if (!arguments.length) var n = this.graph;

      var cleanLayout = this.cleanLayout.bind(this);
      delete n.x;
      delete n.y;
      (n.ports || []).forEach(function(p) {
        delete p.x;
        delete p.y;
      });
      (n.edges || []).forEach(function(e) {
        delete e.sections;
        delete e.junctionPoints;
      });
      (n.children || []).forEach(function(c) {
        cleanLayout(c);
      });
    }

    /**
     * Apply layout for the kgraph style. Converts relative positions to
     * absolute positions.
     */
    applyLayout(kgraph) {
      this.zoomToFit(kgraph);
      var nodeMap = {};
      // convert to absolute positions
      d3elk.toAbsolutePositions(kgraph, { x: 0, y: 0 }, nodeMap);
      d3elk.toAbsolutePositionsEdges(kgraph, nodeMap);
      this.copyElkProps(kgraph, this.graph);
    }

    /**
     * Webworker creates new graph object and layout props has to be
     * copied back to original graph
     *
     * @param srcGraph: new graph from ELK worker
     * @param dstGraph: original graph provided by user
     **/
    copyElkProps(srcGraph, dstGraph) {
      var d3Objs = this._d3ObjMap;
      // init d3Objs
      d3Objs[dstGraph.id] = d3Objs;
      (dstGraph.edges || []).forEach(function(e) {
        if (e.id in d3Objs) throw new Error();
        d3Objs[e.id] = e;
      });
      (dstGraph.children || []).forEach(function(n) {
        d3Objs[n.id] = n;
      });
      (dstGraph.ports || []).forEach(function(p) {
        d3Objs[p.id] = p;
      });

      var copyProps = d3elk.copyProps.bind(this);
      // copy props from this node
      copyProps(srcGraph, dstGraph);
      (srcGraph.ports || []).forEach(function(p) {
        copyProps(p, d3Objs[p.id]);
      });
      (srcGraph.labels || []).forEach(function(l, i) {
        copyProps(l, dstGraph.labels[i]);
      });
      // copy props from edges in this node
      (srcGraph.edges || []).forEach(function(e) {
        var l = d3Objs[e.id];
        copyProps(e, l);
        copyProps(e.source, l.source);
        copyProps(e.target, l.target);
        // make sure the bendpoint array is valid
        l.bendPoints = e.bendPoints || [];
      });
      // copy props of children
      var copyElkProps = this.copyElkProps.bind(this);
      (srcGraph.children || []).forEach(function(n) {
        copyElkProps(n, d3Objs[n.id]);
      });
    }
    static copyProps(src, dst) {
      var keys = KGRAPH_KEYS;
      for (var k in src) {
        if (keys[k]) {
          dst[k] = src[k];
        }
      }
    }

    static toAbsolutePositions(n, offset, nodeMap) {
      n.x = (n.x || 0) + offset.x;
      n.y = (n.y || 0) + offset.y;
      nodeMap[n.id] = n;
      // the offset for the children has to include padding
      var childOffset = { x: n.x, y: n.y };
      if (n.padding) {
        childOffset.x += n.padding.left || 0;
        childOffset.y += n.padding.top || 0;
      }
      // children
      (n.children || []).forEach(function(c) {
        c.parent = n;
        d3elk.toAbsolutePositions(c, childOffset, nodeMap);
      });
    }

    static isDescendant(node, child) {
      var parent = child.parent;
      while (parent) {
        if (parent == node) {
          return true;
        }
        parent = parent.parent;
      }
      return false;
    }

    static toAbsolutePositionsEdges(n, nodeMap) {
      // edges
      (n.edges || []).forEach(function(e) {
        // transform edge coordinates to absolute coordinates. Note that
        // node coordinates are already absolute and that
        // edge coordinates are relative to the source node's parent node
        // (unless the target node is a descendant of the source node)
        var srcNode = nodeMap[e.source];
        var tgtNode = nodeMap[e.target];
        var relative = d3elk.isDescendant(srcNode, tgtNode) ? srcNode : srcNode.parent;

        var offset = { x: 0, y: 0 };
        if (relative) {
          offset.x = relative.x || 0;
          offset.y = relative.y || 0;
        }
        if (relative.padding) {
          offset.x += relative.padding.left || 0;
          offset.y += relative.padding.top || 0;
        }
        if (e.sections)
          e.sections.forEach(function(s) {
            // ... and apply it to the edge
            if (s.startPoint) {
              s.startPoint.x += offset.x;
              s.startPoint.y += offset.y;
            }
            if (s.endPoint) {
              s.endPoint.x += offset.x;
              s.endPoint.y += offset.y;
            }
            (s.bendPoints || []).forEach(function(bp) {
              bp.x += offset.x;
              bp.y += offset.y;
            });
          });
        if (e.junctionPoints)
          e.junctionPoints.forEach(function(jp) {
            jp.x += offset.x;
            jp.y += offset.y;
          });
      });
      // children
      (n.children || []).forEach(function(c) {
        d3elk.toAbsolutePositionsEdges(c, nodeMap);
      });
    }

    /**
     * If a top level transform group is specified, we set the scale such that
     * the available space is used to its maximum.
     */
    zoomToFit(node) {
      if (node === null) {
        node = this.graph;
      }
      // console.log("zoomToFit: ", this.width, this.height);
      var xOffset = -node.x;
      var yOffset = -node.y;
      var w = node.width || 1;
      var h = node.height || 1;
      // scale everything so that it fits the specified size
      var scale = Math.min(this.width / w, this.height / h);
      // centering
      xOffset += (this.width / scale - node.width) / 2;
      yOffset += (this.height / scale - node.height) / 2;

      // if a transformation group was specified we
      // perform a 'zoomToFit'
      if (this._transformGroup) {
        var g = this._transformGroup;
        var t = d3.zoomTransform(g.node());
        t.k = scale;
        t.x = xOffset * scale;
        t.y = yOffset * scale;
        if (!RUNNING_IN_NODE) {
          g = g.transition().duration(200);
        }
        g.attr("transform", t);
      }
    }

    terminate() {
      if (this.layouter) this.layouter.terminateWorker();
    }
  }

  function renderLinks(root, edges) {
    var linkWrap = root
      .selectAll(".link-wrap")
      .data(edges)
      .enter()
      .append("path")
      .attr("class", "link-wrap");

    var link = root
      .selectAll(".link")
      .data(edges)
      .enter()
      .append("path")
      .attr("class", "link");

    var junctionPoints = [];
    // apply edge routes
    linkWrap
      //.transition()
      .attr("d", function(d) {
        if (!d.sections) {
          d._svgPath = "";
          return "";
        }
        if (d.bendpoints || d.sections.length > 1) {
          throw new Error("NotImplemented");
        }
        if (d.junctionPoints)
          d.junctionPoints.forEach(function(jp) {
            junctionPoints.push(jp);
          });
        d._svgPath = d3elk.section2svgPath(d.sections[0]);
        return d._svgPath;
      });
    link
      //.transition()
      .attr("d", function(d) {
        return d._svgPath;
      });

    var junctionPoint = root
      .selectAll(".junction-point")
      .data(junctionPoints)
      .enter()
      .append("circle")
      .attr("r", "3")
      .attr("cx", function(d) {
        return d.x;
      })
      .attr("cy", function(d) {
        return d.y;
      })
      .attr("class", "junction-point");

    return [link, linkWrap, junctionPoint];
  }

  class Tooltip {
    constructor(root) {
      var t = (this.tooltip = document.createElement("div"));
      t.className = "hwschematic-tooltip";
      t.style.display = "none";
      t.style.possition = "absolute";
      root.appendChild(t);
    }

    show(evt, text) {
      var t = this.tooltip;
      t.style.display = "block";
      t.innerHTML = text;
      t.style.left = evt.pageX + 10 + "px";
      t.style.top = evt.pageY + 10 + "px";
    }

    hide() {
      this.tooltip.style.display = "none";
    }
  }

  /**
   * apply hideChildren flag no node
   **/
  function applyHideChildren(n) {
    if (n.hideChildren) {
      if (n.children !== undefined) {
        n.__children = n.children;
        n.__edges = n.edges;
        delete n.children;
        delete n.edges;
      }
    } else {
      if (n.__children !== undefined) {
        n.children = n.__children;
        n.edges = n.__edges;
        delete n.__children;
        delete n.__edges;
      }
    }
    (n.children || []).forEach(applyHideChildren);
  }

  /**
   * Convert hyperedges to edges in whole graph
   *
   * @param n root node
   * @param idOffset int, max id in graph, used for generating
   *                 of new edges from hyperedges
   **/

  function hyperEdgesToEdges(n, idOffset) {
    if (typeof n.edges !== "undefined") {
      var newEdges = [];
      n.edges.forEach(function(e) {
        var isHyperEdge = typeof e.sources !== "undefined";
        if (isHyperEdge) {
          for (var s = 0; s < e.sources.length; s++) {
            var src = e.sources[s];
            for (var t = 0; t < e.targets.length; t++) {
              var dst = e.targets[t];
              idOffset += 1;
              newEdges.push({
                hwMeta: { parent: e },
                id: "" + idOffset,
                source: src[0],
                sourcePort: src[1],
                target: dst[0],
                targetPort: dst[1],
              });
            }
          }
        } else {
          newEdges.push(e);
        }
      });
      n.edges = newEdges;
    }
    if (typeof n.children !== "undefined") {
      for (var i = 0; i < n.children.length; i++) {
        idOffset = hyperEdgesToEdges(n.children[i], idOffset);
      }
    }
    return idOffset;
  }

  /**
   * Get parent of net for net
   **/
  function getNet(e) {
    if (typeof e.hwMeta.parent !== "undefined") {
      return e.hwMeta.parent;
    } else {
      return e;
    }
  }

  function initParents(node, parent) {
    node.hwMeta.parent = parent;
    (node.children || []).forEach(function(n) {
      initParents(n, node);
    });
  }

  function getNameOfEdge(e) {
    var name = "<tspan>unnamed</tspan>";
    if (e.hwMeta) {
      if (typeof e.hwMeta.name === "undefined") {
        var p = e.hwMeta.parent;
        var pIsHyperedge = typeof p.sources !== "undefined";
        if (pIsHyperedge && p.hwMeta) {
          name = p.hwMeta.name;
        }
      } else {
        name = e.hwMeta.name;
      }
    }
    return name;
  }

  /**
   * HwScheme builds scheme diagrams after bindData(data) is called
   *
   * @param svg: root svg element where scheme will be rendered
   * @attention zoom is not applied it is only used for focusing on objects
   * @note do specify size of svg to have optimal result
   */
  class HwSchematic {
    constructor(svg) {
      this.svg = svg;
      this.PORT_PIN_SIZE = [7, 13];
      this.PORT_HEIGHT = this.PORT_PIN_SIZE[1];
      this.CHAR_WIDTH = 7.55;
      this.CHAR_HEIGHT = 13;
      this.NODE_MIDDLE_PORT_SPACING = 20;
      this.MAX_NODE_BODY_TEXT_SIZE = [400, 400];
      // top, right, bottom, left
      this.BODY_TEXT_PADDING = [15, 10, 0, 10];
      this.tooltip = document.getElem;
      this.defs = svg.append("defs");
      this.root = svg.append("g");
      this._nodes = null;
      this._edges = null;
      this.layouter = new d3elk();
      this.layouter.options({
        edgeRouting: "ORTHOGONAL",
      });
      this.layouter.transformGroup(this.root);
      this.tooltip = new Tooltip(document.getElementsByTagName("body")[0]);
      this.nodeRenderers = new NodeRenderers();

      addMarkers(this.defs, this.PORT_PIN_SIZE);
      this.nodeRenderers.registerRenderer(new OperatorNodeRenderer(this));
      this.nodeRenderers.registerRenderer(new MuxNodeRenderer(this));
      this.nodeRenderers.registerRenderer(new SliceNodeRenderer(this));
      this.nodeRenderers.registerRenderer(new GenericNodeRenderer(this));

      //this.svg.on("resize", this.onresize.bind(this));
    }
    //onresize(ev) {
    //    console.log(ev);
    //}

    getHtmlIdOfNode(node) {
      return "node-id-" + node.id;
    }

    widthOfText(text) {
      if (text) {
        return text.length * this.CHAR_WIDTH;
      } else {
        return 0;
      }
    }

    removeGraph() {
      this.root.selectAll("*").remove();
    }

    /**
     * Set bind graph data to graph rendering engine
     *
     * @return promise for this job
     */
    bindData(graph) {
      this.removeGraph();
      hyperEdgesToEdges(graph, graph.hwMeta.maxId);
      initParents(graph, null);
      applyHideChildren(graph);

      var nodeRenderers = this.nodeRenderers;
      var layouter = this.layouter;
      // config of layouter

      layouter
        .kgraph(graph)
        .size([
          parseInt(this.svg.style("width") || this.svg.attr("width"), 10),
          parseInt(this.svg.style("height") || this.svg.attr("height"), 10),
        ]);
      var nodes = layouter.getNodes().slice(1); // skip root node
      // nodes are ordered, childeren at the end
      nodes.forEach(nodeRenderers.prepare.bind(nodeRenderers));
      // by "g" we group nodes along with their ports
      var edges = layouter.getEdges();
      this._nodes = nodes;
      this._edges = edges;
      return layouter.start().then(this.applyLayout.bind(this));
    }

    applyLayout() {
      var root = this.root;
      var schematic = this;
      var layouter = this.layouter;
      var nodeRenderers = this.nodeRenderers;
      var bindData = this.bindData.bind(this);
      var getHtmlIdOfNode = this.getHtmlIdOfNode.bind(this);
      var nodes = this._nodes;
      var edges = this._edges;

      var node = root
        .selectAll(".node")
        .data(nodes)
        .enter()
        .append("g")
        .attr("id", getHtmlIdOfNode);
      nodeRenderers.render(root, node);

      function toggleHideChildren(node) {
        node.hideChildren = !node.hideChildren;
      }

      node.on("click", function(d) {
        var children;
        var nextFocusTarget;
        if (d.hideChildren) {
          // children are hidden, will expand
          children = d.__children;
          nextFocusTarget = d;
        } else {
          // children are visible, will collapse
          children = d.children;
          nextFocusTarget = d.hwMeta.parent;
        }

        if (!children || children.length == 0) return; // does not have anything to expand

        var graph = layouter.kgraph();
        layouter.cleanLayout();
        root.selectAll("*").remove();
        toggleHideChildren(d);

        bindData(graph).then(function() {
          layouter.zoomToFit(nextFocusTarget);
        });
      });

      var [link, linkWrap, junctionPoint] = renderLinks(root, edges);
      var netToLink = {};
      edges.forEach(function(e) {
        netToLink[getNet(e).id] = {
          core: [],
          wrap: [],
        };
      });
      linkWrap._groups.forEach(function(lg) {
        lg.forEach(function(l) {
          var e = d3.select(l).data()[0];
          netToLink[getNet(e).id]["wrap"].push(l);
        });
      });
      link._groups.forEach(function(lg) {
        lg.forEach(function(l) {
          var e = d3.select(l).data()[0];
          netToLink[getNet(e).id]["core"].push(l);
        });
      });

      linkWrap.on("mouseover", function(d) {
        var netWrap = netToLink[getNet(d).id]["wrap"];
        d3.selectAll(netWrap).attr("class", "link-wrap-activated");

        schematic.tooltip.show(d3.event, getNameOfEdge(d));
      });
      linkWrap.on("mouseout", function(d) {
        var netWrap = netToLink[getNet(d).id]["wrap"];
        d3.selectAll(netWrap).attr("class", "link-wrap");

        schematic.tooltip.hide();
      });

      function onLinkClick(d) {
        var net = getNet(d);
        var doSelect = (net.selected = !net.selected);
        // propagate click on all nets with same source

        var netCore = netToLink[net.id]["core"];
        d3.selectAll(netCore).classed("link-selected", doSelect);
        d3.event.stopPropagation();
      }

      // Select net on click
      link.on("click", onLinkClick);
      linkWrap.on("click", onLinkClick);
    }
    terminate() {
      if (this.layouter) this.layouter.terminate();
    }
  }

  exports.HwSchematic = HwSchematic;

  Object.defineProperty(exports, "__esModule", { value: true });
});
