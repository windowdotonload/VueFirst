<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/thenews">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/pictures">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
                    <div class="mui-media-body">news</div>
                </router-link>     
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div></a></li>
        </ul>
    </div>
</template>

<script> 
    export default {
        data(){
            return {
                
            }
        },
        created(){
            // this.getlunbo();
        },
        methods: {
            // getlunbo(){
            //     this.$http.get("http://vue.studyit.io/api/getlunbo").
            //     then(function(res){
            //         console.log(res.body);
            //     })
            // }
        },
    }
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item:nth-child(1){
        background: url("http://pics3.baidu.com/feed/c995d143ad4bd113bad526a475a7f5094bfb051e.jpeg?token=0834baa55a27e05ab36db92063bc2d4a&s=61D12A641D5E365F4BCC9DA803001093");
        background-size: 100% 100%;
    }
    .mint-swipe-item:nth-child(2){
        background: blue;
    }
    .mint-swipe-item:nth-child(3){
        background: tomato;
    }
</style>