<template>
    <div class="remarkcon">
        <h3>发表评论</h3>
        <textarea placeholder="请输入" maxlength="120" v-model="msg"></textarea>
        <button @click="input" type="button" class="mui-btn mui-btn-primary mui-btn-block">发表</button>
        
        <div class="comment">
            <ul>
                <li v-for="(item,i) in list" :key="item.id">
                    <div class="c-content" >
                        第 {{i+1}} 楼用户{{item.user_name}}
                       </div> 
                       <div class="c-content-1" > 
                        {{ item.content =="undefined"?"此用户什么都没说":item.content}}
                       </div>
                </li>
            </ul>
        </div>
        <button @click="getmore" type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined">获取更多消息</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:"",
                page:1,
                list:[],
            }
        },
        created(){
            this.getdata();
        },
        props:["id"],
        methods:{
            getmore(){
                this.page++;
                this.getdata();
            },
            getdata(){
                this.$http.get("api/getcomments/"+this.id+"?page="+this.page).then(
                    res => {
                        if(res.body.status === 0){
                            this.list = this.list.concat(res.body.message);
                        }
                    }
                )
            },
            input(){
                this.$http.post("api/postcomment/"+this.$route.params.id,{
                    content:this.msg,
                }).then(
                    res => {
                        if(res.body.status == 0){
                            var cmt = {
                            user_name: "匿名用户",
                            add_time: Date.now(),
                            content: this.msg.trim()
                            };
                            this.list.unshift(cmt);
                            this.msg = "";
                        }
                    }
                )
            }
        }
    }
</script>

<style scoped>  
    .remarkcon{
        margin-bottom: 80px;
    }
    .comment{
        border: 1px solid black;
        margin: 10px;
        padding: 10px;
    }
    .c-content{
        height: 20px;
        background:skyblue;
        opacity: 0.5;
    }
    .c-content-1{
        text-align: center;
    }
    li{
        list-style: none;
    }
</style>