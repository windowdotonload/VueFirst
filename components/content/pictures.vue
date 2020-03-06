<template>
    <div>
        <h1>pictures</h1>
        <div id="slider" class="mui-slider" ref="divmove" @mousedown.capture="down()" @mousemove.capture="move" @mouseup.capture="up">
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
               now:0,
               lix:0,
               list:["推荐","热点","北京","社会","娱乐"],
           }
       },
       methods:{
           taggle(index){
            this.isactive = index;
           },
           down(){
            //console.log(event.clientX+"event");
            //console.log(event.clientX+"   event");
            // console.log(e.clientX);
            // console.log(this.$refs.divmove.getBoundingClientRect()+"px");
            // console.log(e);
            // this.lix = event.clientX;
            //console.log(this.lix);
           },
           move(){
            // this.$refs.divmove.style.left = -(event.clientX - this.lix)+"px";
            console.log(this.lix);
            console.log(event.clientX)
           },
           up(){
            
           }
       }
   } 
</script>

<style scoped>
   .active{
        font-weight: bolder;
        
    }
</style>