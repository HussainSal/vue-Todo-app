import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./config/firebase.ts";

import "./global.css";

createApp(App).use(router).mount("#app");
