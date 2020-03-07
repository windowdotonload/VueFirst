<template>
    <div>
        <h1>pictures</h1>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
                <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);">
                    <a class="mui-control-item" v-for="(item,i) in list" 
                    @click="taggle(i)" :class="{ 'active' : isactive == i}">
                        {{item}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   export default {
       data(){
           return {
               isactive:0,
               lix:0,
               list:["推荐","热点","北京","社会","娱乐"],
           }
       },
       methods:{
           taggle(index){
            this.isactive = index;
           },
       }
   } 
</script>

<style scoped>
   .active{
        font-weight: bolder;
        
    }
</style>