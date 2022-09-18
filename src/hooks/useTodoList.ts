import { useRecoilState } from 'recoil'
import { todosState } from '../atoms/todos'
import { TodoStatus } from '../types/todo.type'

const getNextStatus = (status: TodoStatus): TodoStatus => {
  switch (status) {
    case 'not-started':
      return 'in-progress'
    case 'in-progress':
      return 'complete'
    case 'complete':
      return 'not-started'
  }
}

const getId = () => Math.floor(Math.random() * 2000000) + ''

export const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todosState)

  const updateContent = (id: string, value: string) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, content: value } : item
      )
    )
  }

  const toggleStatus = (id: string) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, status: getNextStatus(item.status) } : item
      )
    )
  }

  const addItem = (content: string) => {
    setTodoList([
      ...todoList,
      {
        id: getId(),
        content,
        status: 'not-started'
      }
    ])
  }

  const removeItem = (id: string) => {
    setTodoList(todoList.filter((item) => item.id !== id))
  }

  const clearCompleted = () => {
    setTodoList(todoList.filter((item) => item.status !== 'complete'))
  }

  return {
    todoList,
    addItem,
    clearCompleted,
    removeItem,
    updateContent,
    toggleStatus
  }
}
