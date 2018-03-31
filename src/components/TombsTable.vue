<template lang="pug">
.tomb-table
  el-table(:data="tombsDetail")
    el-table-column(prop="identity", label="发行编号")
    el-table-column(prop="address", label="雕刻者")
    el-table-column(prop="data.name", label="死者")
    el-table-column(prop="data.start", label="出生")
    el-table-column(prop="data.end", label="死于")
    el-table-column(label="操作" v-if="isOwner")
      template(slot-scope="scope")
        el-button(size="mini", @click="transfer(scope.row.id)")
          | 转移
  el-pagination(
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage"
    :page-size="10"
    layout="total, prev, pager, next, jumper"
    :total="tombs.length")
</template>

<script>
import Wallet from '@/utils/wallet';

export default {
  props: {
    tombsDetail: {
      type: Array,
    },
    isOwner: {
      type: Boolean,
    },
  },
  data() {
    return {
      wallet: new Wallet(this),
      currentPage: 1,
      tombs: this.tombsDetail,
    };
  },
  methods: {
    handleCurrentChange() {
      this.tombs = [];
      this.getDetail((this.currentPage - 1) * 10);
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
  },
};
</script>
