<template lang="pug" functional>
#footer
    h1| EtherFen Foundation All Right Reserved.
    .social-media
      p| 在社交媒体找到我们
          a(:href="way.url" v-for="(way,indx) in props.ways" :key="indx")
                el-tooltip(class="item" effect="dark" :content="way.title" placement="top")
                    i.iconfont(:class='way.icon')
    .legal
      | 法律声明：以太坟是一种区块链应用，#[b|不一定有收藏价值]。
      |当你使用以太坊购买了以太坟时，你购买的是把数据写入区块链的服务，所收取费将捐献给 EtherFen Foundation。
      |而并非首次代币发行（Initial Coin Offering)。
      |以太坟是虚拟物品。由于区块链系统原理上的不可逆性，购买以太坟后不接受退款。

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
