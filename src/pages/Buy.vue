<template lang="pug">
#auction
  el-steps(:active="stepIdx" style=" margin-bottom: 20px; " simple)
      el-step(title="Start" icon="el-icon-document")
      el-step(title="Custom" icon="el-icon-edit")
      el-step(title="Success" icon="el-icon-check")
  .steps
    .step1(v-show="stepIdx === 0")
      img.cash(src="https://ws2.sinaimg.cn/large/006tNc79ly1fprq46v3ovj31kw14n7wh.jpg")
      h2| Price：{{ price }} ETH
      h2| Est. next tomb number：No. {{ totalSupply }}
      h4| You will need MetaMask for this purchase
      el-checkbox(v-model="isAgree")| I have read #[router-link(to="/faq")| FAQ ]
                                    |and accept those claim
      br
      el-button(type="primary", @click="stepIdx++"
        round size='large' icon='el-icon-check' :disabled='!isAgree')| Next

    el-form(label-position="right" label-width="80px" :model="personData" v-show="stepIdx === 1")
      el-form-item(label="Name")
        el-input(v-model="personData.name")

      el-form-item(label="Date of Born")
        el-date-picker(
        v-model="personData.start"
        type="date"
        placeholder="Please choose DoB"
        value-format="timestamp")

      el-form-item(label="Death Date")
        //- el-input(v-model="personData.end")
        el-date-picker(
        v-model="personData.end"
        type="date"
        placeholder="Please choose DD"
        value-format="timestamp")

      el-button(type="primary", @click="applyAuction"
        round size='large' icon='el-icon-check' :disabled='isAllEntered')| Buy with MetaMask
    success(:txId="txId" v-if="stepIdx === 2")

</template>

<script>
import Wallet from '@/utils/wallet';
import success from './buy-steps/success';

export default {
  name: 'Auction',
  components: {
    success,
  },
  data() {
    return {
      wallet: new Wallet(this),
      stepIdx: 0,
      txId: null,
      price: 0,
      totalSupply: '0',
      isAgree: false,
      personData: {
        name: null,
        start: null,
        end: null,
      },
    };
  },
  computed: {
    isAllEntered() {
      const personData = this.personData;
      return (
        personData.name === null ||
        personData.start === null ||
        personData.end === null
      );
    },
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
      const personData = this.personData;
      const safeName = personData.name.replace(',', ' ');
      const start = personData.start / 1000;
      const end = personData.end / 1000;
      const dataStr = `${safeName},${start},${end}`;
      this.wallet.contract.buyAndCrave(
        dataStr,
        {
          value: this.wallet.toWei(this.price),
          gas: 220000,
          gasPrice: 1000000000 * 20,
        },
        (error, result) => {
          if (!error) {
            this.$message({
              type: 'info',
              message: `已请求 ${result}`,
            });
            this.stepIdx = 2;
            this.txId = result;
          } else {
            this.$message({
              type: 'error',
              message: error,
            });
          }
        },
      );
    },
  },
  mounted() {
    this.getPrice();
    this.getTotalSupply();
  },
};
</script>

<style lang="stylus" scoped>
#auction {
  text-align: center;
  padding: 20px;
  max-width: 75%;
  margin: 0 auto;
}

.post {
  width: 80%;
}

.cash {
  width: 50%;
  padding: 20px;
}
</style>
