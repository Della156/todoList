<template>
    <div id="footer" v-show="totalSize">
      <span> {{unfinishSize}} 项未完成</span>
      <el-button type="info" plain @click="goTo('/all')">全部</el-button>
      <el-button type="success" plain @click="goTo('/actived')">已完成</el-button>
      <el-button type="warning" plain @click="goTo('/unfinish')">未完成</el-button>
      <el-button type="danger" plain @click="deleteDone" icon="el-icon-delete" circle></el-button>
    </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
    export default {
      computed: {
        ...mapGetters(['totalSize','unfinishSize']),

      },
      methods: {
        ...mapActions(['deleteDone']),
        goTo(path) {
          this.$router.replace(path)
        }
      }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #footer {
    height: 40px;
    line-height: 40px;
    padding: 10px 17px 10px 20px;
    background: #88615b82;
    span {
      font-size: 13px;
      color: #483232;
      margin-right: 80px;
    }
    .el-button:nth-last-child {
      height: 40px;
    }
    .el-button:last-of-type {
      margin-left: 180px;
    }
  }
</style>
