<template>
    <div>
        <h1>N E W S</h1>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;" class="">
                    <img class="mui-media-object mui-pull-left" src="https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=11578103,2709364078&fm=58">
                    <div class="mui-media-body">
                        幸福
                        <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/12"> 
                    <img class="mui-media-object mui-pull-left" src="https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=11578103,2709364078&fm=58">
                    <div class="mui-media-body">
                        木屋
                        <p class="mui-ellipsis">
                            <span>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</span>
                            <span>浏览量：0</span> 
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=11578103,2709364078&fm=58">
                    <div class="mui-media-body">
                        CBD
                        <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                </a>
            </li>

        </ul>
    </div>
</template>

<script></script>

<style scoped>
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
    }
    .mui-ellipsis span{
        width: 60%;
    }
</style>