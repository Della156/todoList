
import { ADD_TODO,
        DELETE_DONE,
        IS_ALL_DONE,
        RECIVE_TODOS
} from './mutation-types'

export default {
  [RECIVE_TODOS] (state, {todos}) {
    state.todos = todos
  },

  // 添加todo到todos
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },

  [DELETE_DONE] (state) {
   state.todos = state.todos.filter( todo => !todo.complete)
  },

  [IS_ALL_DONE] (state, {checked}) {
    state.todos.forEach(todo => todo.complete = checked)
  },


}