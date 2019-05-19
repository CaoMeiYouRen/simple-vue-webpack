import Vue from "vue";

// 导入组件
import "./components/index";
//导入路由
import router from "./router";
// 导入 app 组件
import App from "./App.vue";
new Vue({
    el: "#app",
    render: (c) => c(App),
    router,
});
