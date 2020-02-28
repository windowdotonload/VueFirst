<template>
    <div class="continer">
        <!-- 顶部 -->
        <div class="title">application</div>
        <!-- 主视图 -->
        <div class="content">
            <h1>app</h1>
        </div>
        <!-- 底部 -->
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
    </div>
</template>

<script></script>

<style scoped>
    .continer{
        border: 1px solid transparent;
    }
    .content{
        margin-top: 50px;
        
    }
    .title{
        width: 100%;
        height: 50px;
        background: skyblue;
        line-height: 50px;
        text-align: center;
        font-size: 18px;
        font-weight: bolder;
        position: fixed;
    }
</style>