<template>
  <div class="columns">
    <div class="column">
      <div class="block">
        <b-radio v-model="showWhichGates" name="showWhichGates" native-value="all">All</b-radio>
        <b-radio v-model="showWhichGates" name="showWhichGates" native-value="inputs">Inputs</b-radio>
        <b-radio v-model="showWhichGates" name="showWhichGates" native-value="outputs">Outputs</b-radio>
      </div>

      <div class="table-container"></div>
      <table class="table is-fullwidth">
        <thead class="bg-teal">
          <tr class="text-white">
            <th class="text-left">GlobalID</th>
            <!-- <th>InstanceID</th> -->
            <th class="text-left">Function</th>
            <th class="text-left">Inputs</th>
            <th class="text-right">State</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="g in selectedGates" :key="g">
            <td>{{ g }}</td>
            <!-- <td>{{ g.instanceid }}</td> -->
            <td>{{ getGate(g).logic }}</td>
            <td>{{ getGate(g).inputs.join(", ") }}</td>
            <td class="text-right">{{ getGate(g).state }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SelectionMixin from "../mixins/selections";
import UtilsMixin from "../mixins/utils";

export default {
  props: ["gates", "instances", "file", "instanceID"],
  mixins: [SelectionMixin, UtilsMixin],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
