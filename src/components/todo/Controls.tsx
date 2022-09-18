import { useTodoList } from '../../hooks/useTodoList'

export default () => {
  const { clearCompleted } = useTodoList()

  return <button onClick={clearCompleted}>Clear</button>
}
