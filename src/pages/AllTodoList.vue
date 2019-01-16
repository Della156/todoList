<template>
  <ul class="todoList">
    <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"/>
  </ul>
</template>
<script>
  import TodoItem from './TodoItem'
    export default {
      components: {
        TodoItem
      },
      computed: {
        todos () {
          return this.$store.getters.todos
        }
      },

    }
</script>

<style lang="less" rel="stylesheet/less" scoped>



</style>