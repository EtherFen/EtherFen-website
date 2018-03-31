<template lang="pug" functional>
  .step3
      i.el-icon-circle-check(style="font-size: 12rem;color: #67C23A;")
      h1| 购买成功
      p| 你的以太坟购买请求已经发送到以太坊网络上，稍等即可在 #[router-link(to='/my')|我的坟墓] 中查看
      p| 以太坊系统交易号 {{props.txId}}
      a(:href="'https://etherscan.io/tx/' + props.txId")|
            el-button(round type='success' size='large')|在 EtherScan 追踪交易
      router-link(to='/my')|
            el-button(round type='success' size='large')|查看我的坟墓
</template>

<style lang="stylus" scoped>
.el-button
    margin-right 10px
    margin-left 10px
</style>
