export default {
  // 所有的事件todos
  todos (state) {
    return state.todos
  },

  // 所有事件的数量
  totalSize (state) {
    return state.todos.length
  },

  // 未完成的
  unfinish (state) {
    return state.todos.filter(todo => !todo.complete)
  },

  // 未完成的数量
  unfinishSize (state, getters) {
    return getters.unfinish.length
  },

  // 所有已经完成的
  completeTodo (state) {
    return state.todos.filter(todo => todo.complete)
  },

  // 已经完成的
  completeSize (state, getters) {
    return getters.completeTodo.length
  },

  // 是否全选
  isAllPick (state, getters) {
    return getters.completeSize === getters.totalSize
  }

}