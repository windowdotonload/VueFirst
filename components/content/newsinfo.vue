<template>
    <div>

        <div class="content">
            <h3 class="title">{{ newinfo.title }}</h3>
            <p class="subtitle">
                <span>发表时间：{{ newinfo.add_time | dateformat}}</span>
                <span>点击：{{ newinfo.click }}次</span>
            </p>
        </div>
        <hr>
        <div class="content" v-html="newinfo.content"></div>
        <hr>
        <remark :id="id"></remark>

    </div>
</template>

<script>
import remark from "E:/Vue/project/components/content/remark.vue";

export default {
    data(){
        return {
            id:this.$route.params.id,
            newinfo:{},
        }
    },
    created(){
        this.getinfo();
    },
    methods:{
        getinfo(){
            this.$http.get("api/getnew/"+this.id).then(
                res => {
                    if(res.body.status == 0){
                        this.newinfo = res.body.message[0];
                    }
                }
            )
        }
    },
    components:{
        remark,
    }
}
</script>

<style scoped> 
    h3{
        line-height: 30px;
    }
    hr{
        margin: 10px;
    }
    .content{
        margin-top: 20px;
        text-align: center;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
    }
</style>
