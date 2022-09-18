import { Todo } from '../types/todo.type'
import { getItem, setItem } from './local-storage.service'

const MOCK_FAILURE_CHANCE = 0.05
const LOCAL_STORAGE_KEY = 'todo-list'

export const updateTodoItem = (item: Todo): Promise<void> => {
  return new Promise((resolve, reject) => {
    const fail = Math.random() > MOCK_FAILURE_CHANCE
    setTimeout(() => {
      if (fail) {
        reject('Bad luck')
      } else {
        const todoList = (getItem(LOCAL_STORAGE_KEY) || {}) as {
          [id: string]: Todo
        }
        todoList[item.id] = item
        setItem(LOCAL_STORAGE_KEY, todoList)
        resolve()
      }
    }, 500)
  })
}

export const addTodoItem = (item: Todo): Promise<void> => {
  return updateTodoItem(item)
}

export const removeTodoItem = (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const fail = Math.random() > MOCK_FAILURE_CHANCE
    setTimeout(() => {
      if (fail) {
        reject('Bad luck')
      } else {
        const todoList = (getItem(LOCAL_STORAGE_KEY) || {}) as {
          [id: string]: Todo
        }
        delete todoList[id]
        setItem(LOCAL_STORAGE_KEY, todoList)
        resolve()
      }
    }, 500)
  })
}
