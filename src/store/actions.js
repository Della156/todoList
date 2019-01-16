
import storageUtils from '../utils/storageUtils'
import { ADD_TODO,
      DELETE_DONE,
      IS_ALL_DONE,
      RECIVE_TODOS
    } from './mutation-types'

export default {
  // actions 里面是可以处理异步请求的
  readTodo ({commit}) {
    // 模拟异步数据，当然，正式项目不要用 【定时器】··
    setTimeout(() => {
      const todos = storageUtils.readTodos()
      commit(RECIVE_TODOS, {todos})
    }, 1000)
  },


  /*addTodo (context, todo) {
    context.commit('addTodo', {todo})
  }*/
  // 解构
  // 添加事件
  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo})
  },

  // 删除已做事件
  deleteDone ({commit}) {
    commit(DELETE_DONE)
  },

  // 全选/全不选
  isAllDone ({commit}, checked) {
    commit(IS_ALL_DONE, {checked})
  },

}