import "./index.css";
import "E:/Vue/project/lib/mui/css/mui.min.css";
import "E:/Vue/project/lib/mui/css/icons-extra.css";
import home from "E:/Vue/project/components/tabbar/home.vue";
import vip from "E:/Vue/project/components/tabbar/vip.vue";
import shopcar from "E:/Vue/project/components/tabbar/shopcar.vue";
import search from "E:/Vue/project/components/tabbar/search.vue";
import thenews from "E:/Vue/project/components/content/thenews.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import app from "./app.vue"; 
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";


Vue.use(VueRouter);  
Vue.use(MintUI); 
Vue.use(VueResource);

var router = new VueRouter({
    routes:[
        {path:"/",component:home},
        {path:"/home",component:home},
        {path:"/vip",component:vip},
        {path:"/shopcar",component:shopcar},
        {path:"/search",component:search},
        {path:"/home/thenews",component:thenews},
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