import { useRecoilState } from 'recoil'
import { todosState } from '../../atoms/todos'
import { Todo } from '../../types/todo.type'
import TodoItem from './TodoItem'

export default function () {
  const [todos] = useRecoilState<Todo[]>(todosState)

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  )
}
