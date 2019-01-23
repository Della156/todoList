<template>
  <ul class="todoList">
    <TodoItem v-for="(todo,index) in unfinish" :key="index" :todo="todo"/>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import TodoItem from '../components/TodoItem'
  export default {
    components: {
      TodoItem
    },
    computed: {
      ...mapGetters(['unfinish'])
    }
  }
</script>

<style scoped>
  .todoList {
    max-height: 400px;
  }
</style>
