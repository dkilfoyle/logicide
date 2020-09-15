<template>
  <b-menu-item :label="label" @click="$emit('selected', label)">
    <tree-menu @selected="selected" :key="node.label" v-for="node in nodes" :nodes="node.nodes" :label="node.label"></tree-menu>
  </b-menu-item>
</template>

<script>
export default {
  props: ["label", "nodes"],
  name: "tree-menu",
  methods: {
    selected(id) {
      this.$emit("selected", id);
    },
  },
};
</script>

<style></style>
