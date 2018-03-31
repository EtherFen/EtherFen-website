<template lang="pug">
#app
  el-container
    el-header
      nav-header
    el-main
      router-view
    el-footer
      footer-t(:ways="this.socialMedia")
</template>

<script>
import NavHeader from '@/components/NavHeader';
import FooterT from '@/components/Footer';
import ways from './data/social.json';

export default {
  name: 'App',
  components: {
    NavHeader,
    FooterT,
  },
  data() {
    return {
      socialMedia: ways,
    };
  },
};
</script>

<style lang="stylus">
@import url(https://at.alicdn.com/t/font_609008_mgsb0455uu2l0udi.css);
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
.tip
  padding: 8px 16px;
  background-color: #ecf8ff;
  border-radius: 4px;
  border-left: 5px solid #50bfff;
  margin: 20px 0;
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;

</style>
