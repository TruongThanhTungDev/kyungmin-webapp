import { createApp, h } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "./index.css";
import "ant-design-vue/dist/reset.css";
import router from "./router/index.js";
import "vue-lite-youtube-embed/style.css";
import "vue3-carousel/dist/carousel.css";

const app = createApp({
  render() {
    return h(App);
  },
});
app.use(Antd);
app.use(router);
app.mount("#app");
