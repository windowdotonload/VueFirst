<template>
    <div class="shopcarcon">
        <div>
            <div v-for="item in list" :key="item.id" class="mui-card">
				<div  class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="value"></mt-switch>
                        <img :src="item.thumb_path">
                        <div class="content"> 
                            <h1 style="font-size:13px">{{item.title}}</h1>
                            <span style="color:red;font-size:20px">￥{{ item.sell_price }}</span>
                            <div style="margin-bottom:15px" class="mui-numbox" data-numbox-min="1">
                                <button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
                                <input ref="num" @change="update(item.id)" id="test" class="mui-input-numbox" type="number" :value="$store.getters.getcount[item.id]">
                                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                            </div>
                            <a style="position:absolute;right:15px;bottom:0" @click.prevent>删除</a>
                        </div>           
                    </div>
				</div>
			</div>
        </div>
        
        <div>
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>
        </div>
        
        

    </div>
</template>

<script>
import mui from "E:/Vue/project/lib/mui/js/mui.min.js";
export default {
    data() {
        return {
            value:true,
            list:[],      
        }
    },
    created(){
        this.getlist();
    },
    // mounted(){
    //     mui(".mui-numbox").numbox();
    //     console.log("dou         "+document.getElementsByClassName("mui-numbox")[0]);
    //     var list = [];
    //     list = this.$refs.num;
    //     console.log("list    "+list);
    //     console.log(this.$refs);
    // },
    updated(){
        mui(".mui-numbox").numbox();
        // console.log("update     "+this.$refs.num);
        // console.dir(this.$refs.num[0].value);
    },
    methods:{
        getlist(){
            var goodslist = [];
            this.$store.state.car.forEach(item => {
                goodslist.push(item.id);
            });
            if(goodslist.length<=0){
                return;
            }else{
                this.$http.get("api/goods/getshopcarlist/"+goodslist.join(",")).then(
                    res => {
                        if(res.body.status === 0){
                            this.list = res.body.message;
                        }
                    }
                )
            } 
        },
        update(i){
            var goodsinfo = {
            id:i,
            count:this.$refs.num[0].value,
            };
            console.log(this.count);
            // console.log(parseInt(goodsinfo.count)+"---"+goodsinfo.id);
            this.$store.commit("update",goodsinfo);
            console.dir(this.$refs);    
        }
    }
}
</script>

<style scoped>
    h1{
        line-height: 15px;
    }
    .shopcarcon{
        background:#ccc;
        padding-top:5px;
        padding-bottom:5px;
    }
    img{
        width:60px;
        margin-left: 5px;
    }
    .mui-card-content-inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .content{
        flex-direction: column;
        justify-content: space-between;
    }
</style>