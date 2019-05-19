import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import index from "./views/index";
var router = new VueRouter({
    routes: [{
        path: "/",
        redirect: "/index" //重定向
    },
    {
        path: "/index",
        component: index
    }
    ]
});

// 把路由对象暴露出去
export default router;