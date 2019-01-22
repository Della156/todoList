<template>
  <div id="app">
    <h1 class="typing">走心的提醒事项，作者：菇凉大人</h1>
    <Todoheader />
    <router-view />
    <TodoFooter />
  </div>
</template>

<script>
import Todoheader from './components/TodoHeader'
import TodoFooter from './components/TodoFooter'
export default {
  components: {
    Todoheader,
    TodoFooter
  },
  created() {
    // 模拟异步读取数据
    this.$store.dispatch('readTodo')
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  @import "assets/reset.css";
  #app {
    height: 500px;
    width: 700px;
    margin: 100px auto;
    .typing {
      font-size: 40px;
      font-weight: lighter;
      color: pink;
      width: 15em;
      /* 保证一行显示 */
      white-space: nowrap;
      border-right: 2px solid transparent;
      animation: typing 3.5s steps(15, end), blink-caret .75s step-end infinite;
      overflow: hidden;
    }
    /* 打印效果 */
    @keyframes typing {
      from { width: 0; }
      to { width: 15em; }
    }
    /* 光标闪啊闪 */
    @keyframes blink-caret {
      from, to { box-shadow: 1px 0 0 0 transparent; }
      50% { box-shadow: 1px 0 0 0; }
    }
  }

</style>
