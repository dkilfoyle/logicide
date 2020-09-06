<template>
  <div class="columns">
    <div class="column is-narrow">
      <div class="text-subtitle2">{{ file }}</div>
      <!-- <q-tree :nodes="instanceTree" node-key="id" selected-color="primary" :selected.sync="instanceID" default-expand-all /> -->
    </div>

    <div class="column">
      <div class="control">
        <label for="" class="radio">
          <input type="radio" name="showWhichGates" id="all" />
          All
        </label>
        <label for="" class="radio">
          <input type="radio" name="showWhichGates" id="inputs" />
          Inputs
        </label>
        <label for="" class="radio">
          <input type="radio" name="showWhichGates" id="outputs" />
          Outputs
        </label>
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
  props: ["gates", "instances", "file"],
  mixins: [SelectionMixin, UtilsMixin],
  data() {
    return {};
  },
};
</script>

<style></style>
