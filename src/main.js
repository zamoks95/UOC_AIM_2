import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import "./firebase";
import Notifications from "vue-notification";
Vue.use(Notifications);

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faSearch,
  faChevronRight,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Styles
import "./styles/main.scss";

import router from "./router";

library.add(faBars, faSearch, faChevronRight, faUser, faSignOutAlt); // añade iconos de fontawesome a libreria
Vue.component("fa-icon", FontAwesomeIcon); // definimos el componente <fa-icon> para usar los iconos en los templates

Vue.use(BootstrapVue); // instala BootstrapVue
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
