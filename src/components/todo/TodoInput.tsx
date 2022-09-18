import { useTodoList } from '../../hooks/useTodoList'
import Input from '../common/Input'

export default function () {
  const { addItem } = useTodoList()

  return (
    <Input
      onEnter={(val, clearInput) => {
        if (!val) {
          return
        }
        addItem(val)
        clearInput()
      }}
    />
  )
}
