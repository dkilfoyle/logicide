export default {
  data: function() {
    return { showWhichGates: "all" };
  },
  computed: {
    selectedInstance: function() {
      return this.getInstance(this.instanceID);
    },
    instanceTree: function() {
      const buildNode = (id) => {
        const instance = this.instances.find((x) => x.id == id);
        const res = {
          text: instance.id.slice(instance.id.lastIndexOf("_") + 1) + " : " + instance.module,
          data: { id: instance.id },
        };
        if (id == "main") res.state = { selected: true, expanded: true };
        if (instance.instances.length > 0) res.children = instance.instances.map((ci) => buildNode(ci));
        return res;
      };
      if (this.instances.length > 0) return [buildNode("main")];
      else return [];
    },
    selectedGates: function() {
      if (!this.instances.length) return [];
      switch (this.showWhichGates) {
        case "all":
          return this.allInstanceGates;
        case "wires":
          return [...this.getGates(this.instanceID)];
        case "outputs":
          return [...this.getOutputs(this.instanceID)];
        case "inputs":
          return [...this.getInputs(this.instanceID)];
        case "ports":
          return [...this.getInputs(this.instanceID), ...this.getOutputs(this.instanceID)];
      }
      return [];
    },
    allInstanceGates: function() {
      return [...new Set([...this.getInputs(this.instanceID), ...this.getGates(this.instanceID), ...this.getOutputs(this.instanceID)])];
    },
  },
  methods: {},
};
