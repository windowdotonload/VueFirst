<template>
    <div>
        <h1>{{photoinfo.title}}</h1>
        <div class="contain">
            <span>{{photoinfo.add_time}}</span>
            <span>{{photoinfo.click}}</span>
        </div>
        
        <hr>
        <!-- 缩略图 -->
        <div class="thumbs">
            <vue-preview :slides="list"></vue-preview>
        </div>
        <hr>
        <!-- 评论模块组件 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                id:this.$route.params.id,
                list:[],
                photoinfo:{},
            }
        },
        created() {
            this.getinfo();
            this.getphoto();
        },
        methods:{
            getinfo(){
                this.$http.get('api/getimageInfo/' + this.id).then(result => {
                    if (result.body.status === 0) {
                    this.photoinfo = result.body.message[0]
                    }
                })
            },
            getphoto(){
                this.$http.get("api/getthumimages/"+this.id).then(
                    res => {
                        if(res.body.status === 0 ){
                            res.body.message.forEach(item => {
                            item.w = 600;
                            item.h = 600;
                            item.msrc = item.src
                        })
                        this.list = res.body.message;
                        }
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .contain{
        display: flex;
        justify-content: space-between;
    }
    .thumbs .my-gallery {
        display: flex;
        flex-wrap: wrap;
    }
    .thumbs figure {
        width: 100px;
        height: 100px;
        margin: 10px;
        box-shadow: 0 0 8px #999;
    }
    .thumbs figure img {
        width: 100%;
        height: 100%;
    }
    
</style>