<template lang="pug" functional>
#footer
    h1| EtherFen Foundation All Right Reserved.
    .social-media
      p| Find us on social media
          a(:href="way.url" v-for="(way,indx) in props.ways" :key="indx")
                el-tooltip(class="item" effect="dark" :content="way.title" placement="top")
                    i.iconfont(:class='way.icon')

</template>

<style lang="stylus" scoped>
#footer
  color: #627792;
  font-size: 12px;
  text-align: left;
#footer h1
  font-size 24px
  float left

.legal
  float left

.social-media
  float right
.iconfont
  font-size 36px
  margin 5px
.icon-telegram
  color: #1890ff
.icon-twitter
  color: #69c0ff
.icon-github
  color: #262626
.icon-medium
  color: #262626

</style>
