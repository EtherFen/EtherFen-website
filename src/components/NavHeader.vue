<template lang="pug">
el-menu.menu(router, :default-active="$route.path", :default-openeds="['/']", mode="horizontal")
  el-menu-item(index="/")
    span(slot="title")
      | EtherFen (以太坟)
  el-menu-item(index="/home")
    span(slot="title")
      | Home
  el-menu-item(index="/buy")
    span(slot="title")
      | Buy 购买
  el-menu-item(index="/my")
    span(slot="title")
      | My tombs 我的坟墓
  el-menu-item(index="/memorial")
    span(slot="title")
      | Graveyard 墓 园
  el-menu-item(index="/faq")
    span(slot="title")
      | FAQ
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus" scoped>
.menu
  height 100%
</style>
