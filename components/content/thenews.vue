<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newlist" 
            :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id"> 
                    <img class="mui-media-object mui-pull-left" src="item.img_url">
                    <div class="mui-media-body">
                        <h3>{{ item.title }}</h3>
                        <p class="mui-ellipsis">
                            <span>发表时间：{{ item.add_time | dateformat}}</span>
                            <span>点击：{{item.click}}次</span> 
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                newlist:[],
            }
        },
        created(){
            this.getlist();
        },
        methods:{
            getlist(){
                this.$http.get("api/getnewslist").then(
                    res => {
                        if(res.body.status == 0){
                            this.newlist = res.body.message;
                        }
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
    }
</style>