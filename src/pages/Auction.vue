<template lang="pug">
#auction
  img.cash(src="https://ws2.sinaimg.cn/large/006tNc79ly1fprq46v3ovj31kw14n7wh.jpg")
  h2| 以太坟实时发行价格：{{ price }} ETH
  h2| 即将发行以太坟唯一编号：坟第 {{ totalSupply }} 号
  el-checkbox(v-model="isAgree")|我已阅读 #[router-link(to="/faq")| 常见问题 ]
                                |并知晓以太坟不是ICO而是区块链信息存储服务
  el-button(type="primary", @click="applyAuction"
  round size='large' icon='el-icon-check' :disabled='!isAgree')| 购买坟墓
</template>

<script>
import Wallet from '@/utils/wallet';

export default {
  name: 'Auction',
  data() {
    return {
      wallet: new Wallet(this),
      price: 0,
      totalSupply: '0',
      isAgree: false,
      data: '114514',
    };
  },
  methods: {
    getPrice() {
      this.wallet.contract.getPrice((error, result) => {
        if (error) {
          this.$message({
            type: 'error',
            message: error,
          });
        } else {
          this.price = this.wallet.toEther(result);
        }
      });
    },
    getTotalSupply() {
      this.wallet.contract.totalSupply((error, result) => {
        if (error) {
          this.$message({
            type: 'error',
            message: error,
          });
        } else {
          this.totalSupply = result.toString();
        }
      });
    },
    applyAuction() {
      this.wallet.contract.buyAndCrave(this.data, {
        value: this.wallet.toWei(this.price),
        gas: 220000,
        gasPrice: 1000000000 * 20,
      }, (error, result) => {
        if (!error) {
          this.$message({
            type: 'info',
            message: `已请求 ${result}`,
          });
        } else {
          this.$message({
            type: 'error',
            message: error,
          });
        }
      });
    },
  },
  mounted() {
    this.getPrice();
    this.getTotalSupply();
  },
};
</script>

<style lang="stylus" scoped>
#auction
  text-align center
  padding 20px
.post
  width: 80%
.cash
  width: 50%
  padding: 20px
</style>
