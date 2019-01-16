<template>
  <div id="header">
      <el-input
        placeholder="小主，快来写下今天的日程吧～"
        v-model="title"
        @keyup.enter.native="addItem"
        clearable>
        <i slot="prefix" class="el-input__icon el-icon-arrow-down" @click="isAllDone"></i>
      </el-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
      }
    },
    methods: {
      // 添加事件
      addItem() {
        const title = this.title && this.title.trim()
        if (title){
          const todo = {
            title,
            complete: false
          }
          // 分发actions
          this.$store.dispatch('addTodo', todo)
          // 清空输入框
          this.title = ''
        }
      },

      // 全选/全不选
      isAllDone() {
        const number = this.$store.getters.totalSize
        if (number > 0){
          const checked = !this.$store.getters.isAllPick
          this.$store.dispatch('isAllDone', checked)
        } else {
          this.$message({
            message: '不如先记录下第一个 todo thing 吧～',
            type: 'warning',
            center: true
          })
        }

      }
    },

  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  #header {
    margin: 10px auto;
    .el-input {
      width: 80%;
      margin: 10px 55px 10px 50px;
    }
  }


</style>