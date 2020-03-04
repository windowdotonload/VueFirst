<template>
    <div>
        <h5>remark</h5>
        <textarea  cols="30" rows="10" v-model="msg"></textarea>
        <button @click="getlist" type="button" class="mui-btn mui-btn-primary mui-btn-block">Block button</button>
        <div class="comment">
            <!-- 暂无后端数据所以是把评论存储到localstorage中，并从中获取数据 -->
            <ul>
                <li v-for="item in list">
                    <div class="c-content" >
                        the user NO.1 says: {{ item.user}}
                       </div> 
                       <div class="c-content-1" > 
                        the content here {{ item.content}}
                       </div>
                </li>
            </ul>
           
        </div>
        <button type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined">Block button</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:"",
                list:[],
            }
        },
        created(){
            this.getlist();
        },
        methods:{
            getlist(){
                var newdata = {user:this.msg,content:this.msg};
                var list1 = JSON.parse(localStorage.getItem("item") || "[]");
                list1.unshift(newdata);
                localStorage.setItem("item",JSON.stringify(list1));
                this.msg = "";
                this.list = list1;
            }
        }
    }
</script>

<style scoped>
    .comment{
        margin: 10px;
        border: 1px solid black;
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