<template>
    <div class="continer">
        <!-- 顶部 -->
        <div class="title">
            <span @click="goback" v-show="flag">返 回</span>
            applicationdemo
        </div>
        <!-- 主视图 -->
            <div class="content">
                <transition>
                    <router-view></router-view>    
                </transition>
            </div>
        <!-- 底部 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/vip">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
            </router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">{{ this.$store.getters.getall}}</span>
                </span>
				<span class="mui-tab-label" id="shopcar">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
// import mui from "E:/Vue/project/lib/mui/js/mui.min.js";
export default {
    data(){
        return {
            flag:true,
        }
    },
    created() {
        this.flag = this.$route.path === "/home" ? false : true;
        // mui('.mui-bar-tab').on('tap','a',function(){document.location.href=this.href;});
    },
    methods:{
        goback(){
            this.$router.go(-1);
        }
    },
    watch:{
        "$route.path":function(n){
            if (n === "/home") {
                this.flag = false;
            } else {
                this.flag = true;
            }
        }
    }
}
</script>

<style scoped>
    *{
        margin:0;
        padding: 0;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.5s ease;
    }

    .continer{
        border: 1px solid transparent;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
    .content{
        margin-top: 50px;
        overflow-x: hidden; 
    }
    .title{
        z-index:999;
        width: 100%;
        height: 50px;
        background: skyblue;
        line-height: 50px;
        text-align: center;
        font-size: 18px;
        font-weight: bolder;
        top: 0;
        position: fixed;
    }
    .title span{
        position: absolute;
        left: 0;
        height: 50px;
        line-height: 50px;
        color:white;
    }
</style>