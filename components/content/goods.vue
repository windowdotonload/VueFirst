<template>
    <div class="continer">
        <div class="item" v-for="item in goodslist" :key="item.id">
            <img :src="item.img_url" >
            <div>
                <h3>{{ item.title }}</h3>
                <p class="price">
                    <span class="new">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <div class="stock">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </div>
            </div>  
        </div>
        <button @click="getmore" type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined">获取更多消息</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            page:1,
            goodslist:[],
        }
    },
    created(){
        this.getgoods();
    },
    methods:{
        getgoods(){
            this.$http.get("api/getgoods?pageindex="+this.page).then(
                res => {
                    if(res.body.status == 0){
                        this.goodslist = this.goodslist.concat(res.body.message);
                    }
                }
            )
        },
        getmore(){
            this.page++;
            this.getgoods()
        }
    }
}
</script>

<style scoped>
    button{
        margin-top:10px;
        margin-bottom:80px
    }
    h3{
        margin-bottom: 10px;
        font-size:16px;
    }
    .continer{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .item{
        padding: 3px;
        margin: 5px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        min-height: 300px;
        width: 44%;
        justify-content: space-between;
        border: 1px solid #ccc;
    }
    .new{
        font-weight: bolder;
        font-size: 26px;
        color:red
    }
    .old{
        text-decoration: line-through;
    }
    .item img{
        width: 100%;
    }
    .stock{
        display: flex;
        justify-content: space-between;
    }
</style>>
    
