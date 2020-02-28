import "./index.css";
import "E:/Vue/project/lib/mui/css/mui.min.css";
import Vue from "vue";
import VueRouter from "vue-router";
import app from "./app.vue";


Vue.use(VueRouter);

var vm = new Vue({
    el:"#app",
    render: function(c){
        return c(app);
    }

})