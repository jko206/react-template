import { RecoilRoot } from 'recoil'
import TodoList from './components/todo/TodoList'
import Controls from './components/todo/Controls'
import TodoInput from './components/todo/TodoInput'
import './styles.css'

export default function App() {
  return (
    <RecoilRoot>
      <Controls />
      <TodoList />
      <TodoInput />
    </RecoilRoot>
  )
}
