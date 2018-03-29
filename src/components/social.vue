<template lang="pug" functional>
.media
    h2| 我们的社交媒体
    el-row(:gutter="20")
        el-col(:span="8"  v-for="(way,idx) in props.ways" key="idx")
            a(:href="way.url")
                el-card.box-card
                    i.iconfont(:class='way.icon' style="float: left;")
                    h3| {{way.title}}
</template>

