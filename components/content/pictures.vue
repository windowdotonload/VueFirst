<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
                <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);">
                    <a class="mui-control-item" v-for="(item,i) in list" :key="item.id"
                    @click="taggle(i)" :class="{ 'active' : isactive == i}">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>

        <ul class="photo-list">
            <router-link v-for="item in piclist" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
              <img v-lazy="item.img_url">
              <div class="info">
                <h1 class="info-title">{{ item.title }}</h1>
                <div class="info-body">{{ item.zhaiyao }}</div>
              </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
   export default {
       data(){
           return {
               isactive:0,
               list:[],
               piclist:[],
           }
       },
       created() {
            this.taggle(0);
       },
       methods:{
           taggle(index){
            this.isactive = index;
            this.$http.get("api/getimgcategory").then(
                result => {
                    if(result.body.status == 0){
                        this.list = result.body.message;
                    }
                }
            );
            this.$http.get("api/getimages/"+index).then(
                res => {
                    if(res.status == 200){
                        this.piclist = res.body.message;
                    }
                }
            )
           },
       }
   } 
</script>

<style scoped>
   .active{
        font-weight: bolder;
        
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    img{
        width: 100%;

    }
    li{
        position: relative;
        margin-top: 20px;
    }
    .info{
        position: absolute;
        bottom:0;
        background:skyblue;
        opacity: 0.5; 
    }
    .info h1{
        font-size: 20px;
        margin: 5px;
        font-weight: 900;
    }
    .info-body{
        max-height: 20px;
        overflow: hidden;
    }
</style>