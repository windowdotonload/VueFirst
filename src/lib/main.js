import "./index.css";
import "E:/Vue/project/lib/mui/css/mui.min.css";
import "E:/Vue/project/lib/mui/css/icons-extra.css";
import home from "E:/Vue/project/components/tabbar/home.vue";
import vip from "E:/Vue/project/components/tabbar/vip.vue";
import shopcar from "E:/Vue/project/components/tabbar/shopcar.vue";
import search from "E:/Vue/project/components/tabbar/search.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import app from "./app.vue";      


Vue.use(VueRouter);   

var router = new VueRouter({
    routes:[
        {path:"/home",component:home},
        {path:"/vip",component:vip},
        {path:"/shopcar",component:shopcar},
        {path:"/search",component:search},
    ],
    linkActiveClass:"mui-active",
});

var vm = new Vue({
    el:"#app",
    render: function(c){
        return c(app);
    }, 
    router,
})