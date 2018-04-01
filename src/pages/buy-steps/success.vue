<template lang="pug" functional>
  .step3
      i.el-icon-circle-check(style="font-size: 12rem;color: #67C23A;")
      h1| Purchase successfully
      p| Your EtherFen purchase request has been sent to the Ethereum network,
       |You can see later in #[router-link(to='/my')| My Tombs]
      p| Ethereum Transaction ID is {{props.txId}}
      a(:href="'https://etherscan.io/tx/' + props.txId")|
            el-button(round type='success' size='large')|Track this Tx.
      router-link(to='/my')|
            el-button(round type='success' size='large')|My Tombs
</template>

<style lang="stylus" scoped>
.el-button
    margin-right 10px
    margin-left 10px
</style>
