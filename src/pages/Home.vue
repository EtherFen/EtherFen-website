<template lang="pug">
#home
  .banner
    h1.title| EtherFen (以太坟)
    i.iconfont(class='icon-taiji' style="float: right;")
    p| The world's first blockchain digital graves dedicated to the funeral ecosystem.
    p| 全球第一个基于区块链技术打造的数字坟墓
    router-link(to="/buy")
      el-button(type="info" round size='large')| Buy
    router-link(to="/faq")
    el-button(type="info" round size='large')| FAQ
  .intro
    h2| Features
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
          title: 'Intro',
          icon: 'icon-about',
          content:
            'EtherFen is a blockchain project based on human consensus. It is looking forward to finding a consensus that can effectively mobilize the power of all mankind to remember ancestors.',
        },
        {
          title: 'Tech',
          icon: 'icon-jishu',
          content:
            'EtherFen is the world’s first blockchain-based digital grave. Codes are open sourced, developers have no quota (can be checked), automatic purchase.',
        },
        {
          title: 'Business',
          icon: 'icon-shangye',
          content:
            'EtherFen is deeply inspired by the Buddhist and Dao. In their culture, Everything is empty. That\'s the reason for developing this dApp.',
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
  max-width: 95%;
  margin: 0 auto;
}

.post {
  width: 80%;
}

.banner h1 {
  font-size: 6em;
  letter-spacing: 5px;
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
