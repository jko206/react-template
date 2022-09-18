export type Todo = {
  id: string
  content: string
  status: TodoStatus
}

export type TodoStatus = 'complete' | 'in-progress' | 'not-started'