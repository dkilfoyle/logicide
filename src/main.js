import Vue from "vue";

import vgl from "vue-golden-layout";
import "golden-layout/src/css/goldenlayout-light-theme.css";
Vue.use(vgl);

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
