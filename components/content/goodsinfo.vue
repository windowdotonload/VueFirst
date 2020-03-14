<template>
    <div>
        <transition
        @before-enter="before"
        @enter="enter"
        @after-enter="after" mode="out-in">
            <div class="ball" v-show="flag" ref="ball"></div>
        </transition>

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
					市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price" style="color:red;font-weight:bloder;font-size:20px">￥{{ goodsinfo.sell_price }}</span>
				</div>
			</div>
            <div style="margin-left:15px">购买数量：
                <div style="margin-bottom:15px" class="mui-numbox" data-numbox-min="1">
					<button class="mui-btn mui-btn-numbox-minus" type="button" disabled="">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" ref="num" @change="addam">
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
                <br>
                <div class="mui-btn mui-btn-primary">
					立即购买
				</div>
                <button @click="add" type="button" class="mui-btn mui-btn-danger">
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
            <router-link :to="'/home/intro/'+id" tag="button" type="button" class="mui-btn mui-btn-primary mui-btn-block">图文介绍</router-link>
            <router-link :to="'/home/phonerem/'+id" tag="button" style="margin-bottom:80px" type="button" class="mui-btn mui-btn-warning mui-btn-block">商品评价</router-link>
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
            flag:false,
            max:0,
            selected:1,
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
                        this.max = res.body.message[0].stock_quantity;
                    }   
                }
            )
        },
        addam(){
            this.selected = this.$refs.num.value;
        },
        add(){
            this.flag = !this.flag;

            var goodsinfo = {
                id:this.id,
                count:this.selected,
                price: this.goodsinfo.sell_price,
                choose:true,
            }

            this.$store.commit("addtocar",goodsinfo);
        },

        before(el){
                el.style.transform = "translate(0, 0)";
        },
        enter(el,done){
            const ball = this.$refs.ball.getBoundingClientRect();
            const car = document.getElementById("shopcar").getBoundingClientRect();

            const x = car.left - ball.left + 38;
            const y = car.top - ball.top + 5;

            el.style.transform = `translate(${x}px,${y}px)`;
            el.style.transition = "all 0.5s ease";

            done();
        },
        after(){
            this.flag = !this.flag;
        },
    },
    watch: {
        max: function(n,o){
            mui(".mui-numbox").numbox().setOption("max", n);
        }
    },
}
</script>

<style scoped>
    img{
        height:100%;
    }
    .mint-swipe{
        height: 200px;
        text-align: center;
    }
    .ball{
        position: absolute;
        width: 16px;
        height: 16px;
        background:red;
        border-radius: 50%;
        z-index: 999;
        left:150px;
        top:406px;
    }
</style>