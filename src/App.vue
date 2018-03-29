<template lang="pug">
#app
  el-container
    el-header
      nav-header
    el-main
      router-view
    el-footer
      footer-t
</template>

<script>
import NavHeader from '@/components/NavHeader';
import FooterT from '@/components/Footer';

export default {
  name: 'App',
  components: {
    NavHeader,
    FooterT,
  },
};
</script>

<style lang="stylus">
@import url(https://at.alicdn.com/t/font_609008_ywmyvxyru5uhm2t9.css);
#app
  font-family "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
.el-footer
  font-size 12px
a
  color #409eff
  text-decoration none

</style>
