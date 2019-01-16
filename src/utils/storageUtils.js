/*
向local中存储数据的工具模块
 */
const STORAGE_KEY = 'todos'
export default {
  readTodos () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  saveTodos (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

