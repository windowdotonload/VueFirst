<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3472426374,1500119397&fm=26&gp=0.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583821234811&di=5aa0ac82cffc0041d38117fbbd44f870&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151120%2Fmp43096225_1448003202299_3.jpeg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583821421704&di=9831086bd85aa50168e4accff47211a4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01270e554231b00000019ae93b66d7.jpg%401280w_1l_2o_100sh.jpg" alt=""></mt-swipe-item>
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
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goods">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">goods</div>
                </router-link>    
            </li>
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
                list:[],
            } 
        },
        created(){
            // this.getlunbo();
        },
        methods: {
            // getlunbo(){
            //     this.$http.get("api/getlunbo").
            //     then(res => {
            //         if(res.body.status == 0){
            //             this.list = res.body.message;
            //         }
            //     }
            //     )
            // }
        },
    }
</script>

<style scoped>
    img{
        width:100%;
        height:100%;
    }
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item:nth-child(1){
        background: red;
    }
    .mint-swipe-item:nth-child(2){
        background: blue;
    }
    .mint-swipe-item:nth-child(3){
        background: tomato;
    }
</style>