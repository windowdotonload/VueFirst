<template>
    <div>
        <h1>{{list.title}}</h1>
        <hr>
        <div class="introcontent" v-html="list.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:{},
        }
    },
    created(){
        this.getlist();
    },
    methods:{
        getlist(){
            this.$http.get("api/goods/getdesc/"+this.$route.params.id).then(
                res => {
                    if(res.body.status == 0){
                        this.list = res.body.message[0];
                    }
                }
            )
        }
    }
}
</script>

<style>
    .introcontent img{
        width:100%;
    }
</style>