<template>
    <div>

        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<mt-swipe :auto="3000">
                        <mt-swipe-item v-for="item in lunbo" :key="item.id">
                            <img :src="item.src" >
                        </mt-swipe-item>
                    </mt-swipe>
				</div>
			</div>
		</div>

        <div class="mui-card" style="padding-bottom:5px">
			<div class="mui-card-header">{{ goodsinfo.title }}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.sell_price }}</span>
				</div>
			</div>
            <div style="margin-left:15px">购买数量：
                <div style="margin-bottom:15px" class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
					<button class="mui-btn mui-btn-numbox-minus" type="button" disabled="">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1">
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
                <br>
                <div class="mui-btn mui-btn-primary">
					立即购买
				</div>
                <button type="button" class="mui-btn mui-btn-danger">
					加入购物车
				</button>
            </div>
		</div>

        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                <p>商品货号：{{ goodsinfo.goods_no }}</p>
                <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
                <p>上架时间：{{ goodsinfo.add_time | dateformat }}</p>
                </div>
            </div>
            <router-link to="/home/intro" tag="button" type="button" class="mui-btn mui-btn-primary mui-btn-block">图文介绍</router-link>
            <router-link to="/home/phonerem" tag="button" style="margin-bottom:80px" type="button" class="mui-btn mui-btn-warning mui-btn-block">商品评价</router-link>
        </div>
    </div>
</template>

<script>
import mui from "E:/Vue/project/lib/mui/js/mui.min.js";
export default {
    data(){
        return {
            id:this.$route.params.id,
            lunbo:[],
            goodsinfo:{},
        }
    },
    created(){
        mui(".mui-numbox").numbox(),
        this.getlunbo();
        this.getgoodsinfo();
    },
    methods:{
        getlunbo(){
            this.$http.get("api/getthumimages/"+this.id).then(
                res => {
                    if(res.body.status == 0){
                        this.lunbo = res.body.message;
                    }
                }
            )
        },
        getgoodsinfo(){
            this.$http.get("api/goods/getinfo/"+this.id).then(
                res => {
                    if(res.body.status == 0){
                        this.goodsinfo = res.body.message[0];
                    }   
                }
            )
        }
    }
}
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
</style>