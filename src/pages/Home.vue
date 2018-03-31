<template lang="pug">
#home
  .banner
    h1.title| 以太坟
    i.iconfont(class='icon-taiji' style="float: right;")
    p| 全球第一个基于区块链技术打造的数字坟墓
    router-link(to="/buy")
      el-button(type="info" round size='large')|立即购买
    router-link(to="/faq")
    el-button(type="info" round size='large')|常见问题
  .intro
    h2| 项目特色
    el-row(:gutter="20")
      el-col(:span="8" v-for="(intro, index) in intros" :key="index")
        el-card.box-card
          i.iconfont(:class='intro.icon' style="float: left;")
          h3|{{intro.title}}
          p|{{intro.content}}
    el-card(v-for="(passage, index) in introCard" :key="index")
      i.iconfont(:class='passage.icon' style="float: left;")
      h2|{{passage.title}}
      p|{{passage.content}}


</template>

<script>
import Wallet from '@/utils/wallet';
import cards from '../data/info.json';

export default {
  name: 'Home',
  data() {
    return {
      wallet: new Wallet(this),
      introCard: cards,
      intros: [
        {
          title: '关于',
          icon: 'icon-about',
          content:
            '以太坟是基于人类共识的网络墓碑计划，期待寻找一种共识，能有效地调动全人类的力量来怀念先人。',
        },
        {
          title: '技术',
          icon: 'icon-jishu',
          content:
            '以太坟是世界上第一个完全去中心的线上坟墓。代码开源，开发者手上没有额度（可查），全自动申购。',
        },
        {
          title: '商业',
          icon: 'icon-shangye',
          content:
            '互联网+传统文化+区块链，开阔全新市场，整合中华文化传统瑰宝，更好的传承博大精深的中华文化。',
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style lang="stylus" scoped>
#home {
  max-width: 75%;
  margin: 0 auto;
}

.post {
  width: 80%;
}

.banner h1 {
  font-size: 6em;
  letter-spacing: 10px;
  background: #303133;
  color: #f2f3f5;
  display: inline;
}

.banner p {
  font-size: 24px;
  line-height: 28px;
  color: #888;
  margin: 10px 0 5px;
}

.el-card {
  margin-bottom: 20px;
}

.iconfont {
  font-size: 10rem;
}
</style>
