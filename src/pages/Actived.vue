<template>
  <div>
    <ul class="todoList">
      <TodoItem v-for="(todo,index) in completeTodo" :key="index" :todo="todo"/>
    </ul>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex'
  import TodoItem from '../components/TodoItem'
  export default {
    components: {
      TodoItem
    },
    computed: {
      ...mapGetters(['completeTodo'])
    }
  }
</script>

<style scoped>
  .todoList {
    max-height: 400px;
  }
</style>
