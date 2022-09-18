import { TodoStatus } from './types/todo.type'
import './TodoStatus.scss'
import classNames from 'classnames'

type Props = {
  status: TodoStatus
}

export default ({ status }: Props) => {
  return <div className={classNames('todo-status', status)} />
}
