<template>
  <ul class="todoList">
    <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"/>
  </ul>
</template>
<script>
  import storageUtils from '../utils/storageUtils'
  import TodoItem from '../components/TodoItem'
    export default {
      components: {
        TodoItem
      },
      computed: {
        todos () {
          return this.$store.getters.todos
        }
      },
      watch: {
        todos: { // 深度监视。一有变化，立即更新
          handler: storageUtils.saveTodos,
          deep: true
        }
      }

    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .todoList {
    max-height: 400px;
    overflow: auto;
  }


</style>