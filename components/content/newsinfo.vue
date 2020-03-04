<template>
    <div>
        <!-- 暂无后端数据，页面内容为手写 -->
        <h1>newsinfo</h1>
        <hr>
        <div class="content">
            此处显示从后端数据获取的新闻内容
            {{ this.$route.params.id }}
        </div>
        <hr>
        <remark></remark>

    </div>
</template>

<script>
import remark from"E:/Vue/project/components/content/remark.vue";

export default {
    components:{
        remark,
    }
}
</script>

<style scoped> 
    hr{
        margin: 10px;
    }
    .content{
        margin-top: 20px;
        text-align: center;
    }
</style>
