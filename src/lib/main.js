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
import goods from "E:/Vue/project/components/content/goods.vue";
import goodsinfo from "E:/Vue/project/components/content/goodsinfo.vue";
import intro from "E:/Vue/project/components/content/intro.vue";
import pho from "E:/Vue/project/components/content/pho.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import VuePreview from 'vue-preview';
import app from "./app.vue"; 
import MintUI from "mint-ui";
import moment from 'moment';
import Vuex from 'vuex';
import "mint-ui/lib/style.css";



Vue.use(VuePreview);
Vue.use(VueRouter);  
Vue.use(MintUI); 
Vue.use(VueResource);
Vue.use(Vuex);
Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON = true;

Vue.filter("dateformat",function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern);
})

var router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:home},
        {path:"/vip",component:vip},
        {path:"/shopcar",component:shopcar},
        {path:"/search",component:search},
        {path:"/home/thenews",component:thenews},
        {path:"/home/newsinfo/:id",component:newsinfo},
        {path:"/home/pictures",component:pictures},
        {path:"/home/photoinfo/:id",component:pictureinfo},
        {path:"/home/goods",component:goods},
        {path:"/home/goodsinfo/:id/:c",component:goodsinfo},
        {path:"/home/intro/:id",component:intro},
        {path:"/home/phonerem/:id",component:pho}
    ],
    linkActiveClass:"mui-active",
});

var car = JSON.parse(localStorage.getItem("car") || '[]');
const store = new Vuex.Store({
    state:{
        car:car,
    },
    mutations:{   
        addtocar(state,goodsinfo){
            var flag = false;

            state.car.some(item => {
                if(item.id == goodsinfo.id){
                    item.count += parseInt(goodsinfo.count);
                    flag = true;
                    return true;
                }
            })

            if(flag == false){
                state.car.push(goodsinfo);
            }
            localStorage.setItem("car",JSON.stringify(state.car));
        },
        update(state,goodsinfo){
            state.car.some(item => {
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count);
                    return true;
                }
            })
            localStorage.setItem("car",JSON.stringify(state.car));
        },
        remove(state,id){
            state.car.some((item,i) => {
                if(item.id == id){
                    state.car.splice(i,1);
                    return true;
                }
            })
            
            localStorage.setItem("car",JSON.stringify(state.car));
        },
        updatechoose(state,info){
            state.car.some(item => {
                if(item.id == info.id){
                    item.choose = info.choose;
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters:{         //getters只涉及取数据，而不进行修改
        getall(state){
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            })
            return c;
        },
        getcount(state){
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.count;
            })
            return o;
        },
        getifchoose(state){
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.choose;
            })
            return o;
        },
        getallcount(state){
            var o = {
                count:0,
                price:0,
            }
            state.car.forEach(item => {
                if(item.choose == true){
                    o["count"] += item.count;
                    o.price += item.price*item.count;
                }
            })
            return o;
        }
    }
});

var vm = new Vue({
    el:"#app",
    render: function(c){
        return c(app);
    }, 
    router,
    store,
})