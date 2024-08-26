import { createSSRApp } from "vue";
import "uno.css";
import "./style/index.css";
import App from "./App.vue";
import { pinia } from "./store";
import { install } from "./i18n/i18n";

export function createApp() {
  const app = createSSRApp(App);

  app.use(pinia);
  install({ app });
  return {
    app,
  };
}
