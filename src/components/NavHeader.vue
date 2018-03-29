<template lang="pug">
el-menu.menu(router, :default-active="$route.path", :default-openeds="['/']", mode="horizontal")
  el-menu-item(index="/")
    span(slot="title")
      | 以太坟
  el-menu-item(index="/home")
    span(slot="title")
      | 首页
  el-menu-item(index="/buy")
    span(slot="title")
      | 购买
  el-menu-item(index="/my")
    span(slot="title")
      | 我的坟
  el-menu-item(index="/memorial")
    span(slot="title")
      | 纪念堂
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
