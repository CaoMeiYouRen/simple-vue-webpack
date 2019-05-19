import Vue from "vue";
import AppFooter from "./AppFooter.vue";
import AppHeader from "./AppHeader.vue";
const components = {
    AppFooter,
    AppHeader
};
//批量注册
Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
});