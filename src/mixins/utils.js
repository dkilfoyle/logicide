export default {
  methods: {
    stripReactive: (x) => JSON.parse(JSON.stringify(x)),
    getLocalId: (x) => x.substr(x.lastIndexOf("_") + 1),
    getNamespace: (x) => x.substr(0, x.lastIndexOf("_")),
    getInputs: function(instanceId) {
      return this.getInstance(instanceId).inputs;
    },
    getOutputs: function(instanceId) {
      return this.getInstance(instanceId).outputs.map((x) => x.substr(0, x.indexOf("-out")));
    },
    getGates: function(instanceId) {
      return this.getInstance(instanceId).gates.filter((x) => this.getGate(x).type == "gate");
    },
    isInput: function(instanceId, id) {
      return this.getInputs(instanceId).some((x) => x == id) || this.getGate(id).logic == "control";
    },
    isOutput: function(instanceId, id) {
      return this.getOutputs(instanceId).some((x) => x == id) || this.getGate(id).logic == "response";
    },
    getGate: function(id) {
      return this.gates.find((x) => x.id == id);
    },
    getInstance: function(id) {
      return this.instances.find((x) => x.id == id);
    },
  },
};
