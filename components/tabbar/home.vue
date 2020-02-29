<template>
    <div>
        <h1>home</h1>
        <mt-swipe :auto="3000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        },
        created(){
            this.getlunbo();
        },
        methods: {
            getlunbo(){
                this.$http.get("http://vue.studyit.io/api/getlunbo").
                then(function(res){
                    console.log(res.body);
                })
            }
        },
    }
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item:nth-child(1){
        background: red;
    }
    .mint-swipe-item:nth-child(2){
        background: blue;
    }
    .mint-swipe-item:nth-child(3){
        background: tomato;
    }
</style>