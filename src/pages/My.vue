<template lang="pug">
#my
  .tip
    p|刚刚买了坟墓，还没显示？
    |别着急，发起区块链交易后需要一定的时间确认交易的有效性
    |通常一分钟后刷新就会出现你的交易。
    p|如果还没有出现，请到
      a(:href='getAccountEtherscanURL()')| EtherScan 查看交易情况
  el-table(:data="mine")
    el-table-column(prop="identity", label="发行编号")
    el-table-column(label="操作")
      template(slot-scope="scope")
        el-button(size="mini", @click="transfer(scope.row.raw)")
          | 转移
        el-button(size="mini", type="danger", @click="burn(scope.row.raw)")
          | 雕刻
</template>

<script>
import Wallet from '@/utils/wallet';

export default {
  name: 'My',
  data() {
    return {
      wallet: new Wallet(this),
      mine: [],
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
        }
      });
    },
    getAccountEtherscanURL() {
      return `https://ropsten.etherscan.io/address/${this.wallet.account}`;
    },
    transfer(id) {
      this.$prompt('请输入转移对象地址', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.wallet.contract.transfer(value, id, (error, result) => {
          if (error) {
            this.$message({
              type: 'error',
              message: error,
            });
          } else {
            this.$message({
              type: 'info',
              message: `已请求 ${result}`,
            });
          }
        });
      }).catch(() => {
      });
    },
    burn(id) {
      this.$prompt('请输入要烧的对象', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.wallet.contract.burn(id, value, (error, result) => {
          if (error) {
            this.$message({
              type: 'error',
              message: error,
            });
          } else {
            this.$message({
              type: 'info',
              message: `已请求 ${result}`,
            });
          }
        });
      }).catch(() => {
      });
    },
  },
  mounted() {
    this.getTombs();
  },
};
</script>

<style lang="stylus" scoped>
.tip {
    padding 8px 16px
    background-color #ecf8ff
    border-radius 4px
    border-left 5px solid #50bfff
    margin 20px 0
    font-size 14px
    color #5e6d82
    line-height 1.5em
}
</style>
