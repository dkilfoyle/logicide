<template>
  <div class="columns">
    <div class="column">
      <div class="block">
        <b-radio v-model="showWhichGates" name="showWhichGates" native-value="all">All</b-radio>
        <b-radio v-model="showWhichGates" name="showWhichGates" native-value="inputs">Inputs</b-radio>
        <b-radio v-model="showWhichGates" name="showWhichGates" native-value="outputs">Outputs</b-radio>
      </div>

      <div class="columns" v-for="g in selectedGates" :key="g">
        <div class="column is-1">
          <div class="text-caption">{{ getLocalId(g) }}</div>
        </div>
        <div class="column">
          <dygraph :data="tracedata(g)" :options="traceOptions(g)" ref="traces"></dygraph>
        </div>
      </div>
      <div class="columns">
        <div class="column is-1">
          <div class="text-caption">Clock</div>
        </div>
        <div class="column">
          <dygraph
            :data="clock"
            :options="{
              showRangeSelector: true,
              rangeSelectorHeight: 80,
              axes: { y: { axisLabelWidth: 5 } },
            }"
            ref="clock"
          ></dygraph>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectionMixin from "../mixins/selections";
import UtilsMixin from "../mixins/utils";
import dygraph from "./dygraph";

import _DygraphRoot from "dygraphs";
window.Dygraph = _DygraphRoot;
require("dygraphs/src/extras/synchronizer");

export default {
  props: ["gates", "instances", "instanceID", "simulation"],
  mixins: [SelectionMixin, UtilsMixin],
  components: { dygraph },
  data() {
    return {};
  },
  computed: {
    clock: function () {
      return this.simulation.clock.map((x, i) => [i, x]);
    },
  },
  watch: {
    selectedGates: function () {
      if (!this.ready) return;
      this.$nextTick(() => {
        this.syncTraces();
      });
    },
  },
  methods: {
    syncTraces() {
      if (this.$refs.traces.length == 0) return;
      let traces = this.$refs.traces.map((x) => x.graph);
      traces.push(this.$refs.clock.graph);
      window.Dygraph.synchronize(traces);
    },
    tracedata: function (id) {
      let data = [];
      for (let i = 0; i < this.simulation.time.length; i++) {
        data.push([this.simulation.time[i], this.simulation.gates[id][i]]);
      }
      return data;
    },
    traceOptions: function (id) {
      return {
        height: 50,
        showRangeSelector: false,
        xRangePad: 5,
        axes: {
          x: {
            drawAxis: false,
            drawGrid: false,
            // axisLabelWidth: 0,
            // axisLabelFontSize: 0,
          },
          y: {
            drawAxis: true,
            drawGrid: false,
            axisLabelWidth: 5,
            axisLineColor: "white",
            axisLabelFormatter: () => {
              return null;
            },
          },
        },
        series: {
          Y1: { color: this.traceColor(id) },
        },
      };
    },
    traceColor: function (id) {
      if (this.isOutput(this.instanceID, id)) return "rgb(255,99,132)";
      if (this.isInput(this.instanceID, id)) {
        return "steelblue";
      }

      return "darkgrey";
    },
  },
  mounted() {
    // this.syncTraces();
  },
};
</script>

<style></style>
