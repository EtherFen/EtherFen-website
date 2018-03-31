<template lang="pug">
#my
  .tip
    h2|刚刚买了坟墓，还没显示？
    p|别着急，发起区块链交易后需要一定的时间确认交易的有效性
    |通常一分钟后刷新就会出现你的交易。
    p|如果还没有出现，请到
      a(:href='getAccountEtherscanURL()')| EtherScan 查看当前账户的交易情况
  h2|我的坟墓
  tombs-table(:tombsDetail="mineDetail" :isOwner="true")

</template>

<script>
import Wallet from '@/utils/wallet';
import TombsTable from '../components/TombsTable';
import digestData from '../DataHandler';

export default {
  name: 'My',
  components: {
    TombsTable,
  },
  data() {
    return {
      wallet: new Wallet(this),
      mine: [],
      mineDetail: [],
    };
  },
  methods: {
    getTombs() {
      this.wallet.contract.getTombByOwner(this.wallet.account, (error, result) => {
        if (error) {
          this.$message({
            type: 'error',
            message: error,
          });
        } else {
          this.mine = []; // clear up
          result.forEach((val) => {
            this.mine.push({
              identity: `坟第 ${val.toString()} 号`,
              raw: val,
            });
          });
          result.map(idx => this.getTombByIdx(idx));
        }
      });
    },
    getTombByIdx(idx) {
      this.wallet.contract.getTombDetail(idx, (error, result) => {
        if (error) {
          this.$message({
            type: 'error',
            message: error,
          });
        } else {
          const obj = digestData(idx, result);
          this.mineDetail.push(obj);
        }
      });
    },
    getAccountEtherscanURL() {
      return `https://etherscan.io/address/${this.wallet.account}`;
    },
    // transfer(id) {
    //   this.$prompt('请输入转移对象地址', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //   }).then(({ value }) => {
    //     this.wallet.contract.transfer(value, id, (error, result) => {
    //       if (error) {
    //         this.$message({
    //           type: 'error',
    //           message: error,
    //         });
    //       } else {
    //         this.$message({
    //           type: 'info',
    //           message: `已请求 ${result}`,
    //         });
    //       }
    //     });
    //   }).catch(() => {
    //   });
    // },
  },
  mounted() {
    this.getTombs();
  },
};
</script>

<style lang="stylus" scoped>

</style>
