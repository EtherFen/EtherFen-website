<template lang="pug">
#memorial
  .tip
    h2|Disclaimer
    p|We are not responsible for user's input.
  tombs-table(:tombsDetail="tombs" :isOwner="false")
</template>

<script>
import Wallet from '@/utils/wallet';
import TombsTable from '../components/TombsTable';
import digestData from '../DataHandler';

export default {
  name: 'Memorial',
  components: {
    TombsTable,
  },
  data() {
    return {
      wallet: new Wallet(this),
      ids: [],
      tombs: [],
      currentPage: 1,
    };
  },
  methods: {
    getTombs() {
      this.wallet.contract.getAllTombs((error, result) => {
        if (error) {
          this.$message({
            type: 'error',
            message: error,
          });
        } else {
          this.ids = result;
          if (this.ids.length > 0) {
            this.getDetail(0);
          }
        }
      });
    },
    getDetail(index) {
      this.wallet.contract.getTombDetail(this.ids[index], (error, result) => {
        if (error) {
          this.$message({
            type: 'error',
            message: error,
          });
        } else {
          const obj = digestData(index, result);
          this.tombs.push(obj);
          if (index + 1 < 10 * this.currentPage && index + 1 < this.ids.length) {
            this.getDetail(index + 1);
          }
        }
      });
    },
    handleCurrentChange() {
      this.tombs = [];
      this.getDetail((this.currentPage - 1) * 10);
    },
  },
  mounted() {
    this.getTombs();
  },
};
</script>

<style lang="stylus" scoped>
</style>
