import "./index.css";
import "E:/Vue/project/lib/mui/css/mui.min.css";
import "E:/Vue/project/lib/mui/css/icons-extra.css";
import home from "E:/Vue/project/components/tabbar/home.vue";
import vip from "E:/Vue/project/components/tabbar/vip.vue";
import shopcar from "E:/Vue/project/components/tabbar/shopcar.vue";
import search from "E:/Vue/project/components/tabbar/search.vue";
import thenews from "E:/Vue/project/components/content/thenews.vue";
import newsinfo from "E:/Vue/project/components/content/newsinfo.vue";
import pictures from "E:/Vue/project/components/content/pictures.vue";
import pictureinfo from "E:/Vue/project/components/content/pictureinfo.vue";
import goods from "E:/Vue/project/components/content/goods.vue"
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import VuePreview from 'vue-preview';
import app from "./app.vue"; 
import MintUI from "mint-ui";
import moment from 'moment';
import "mint-ui/lib/style.css";


Vue.use(VuePreview);
Vue.use(VueRouter);  
Vue.use(MintUI); 
Vue.use(VueResource);
Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON = true;

Vue.filter("dateformat",function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern);
})

var router = new VueRouter({
    routes:[
        {path:"/",component:home},
        {path:"/home",component:home},
        {path:"/vip",component:vip},
        {path:"/shopcar",component:shopcar},
        {path:"/search",component:search},
        {path:"/home/thenews",component:thenews},
        {path:"/home/newsinfo/:id",component:newsinfo},
        {path:"/home/pictures",component:pictures},
        {path:"/home/photoinfo/:id",component:pictureinfo},
        {path:"/home/goods",component:goods},
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