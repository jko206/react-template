import { Todo } from '../../types/todo.type'
import { useTodoList } from '../../hooks/useTodoList'
import './TodoItem.scss'
import TodoStatus from './TodoStatus'
import { useState } from 'react'
import Input from '../common/Input'

type Props = {
  item: Todo
}

export default ({ item }: Props) => {
  const { toggleStatus, updateContent, removeItem } = useTodoList()
  const [editMode, setEditMode] = useState(false)

  return (
    <div
      className="todo-item"
      onClick={(e) => {
        if (editMode) {
          return
        }
        toggleStatus(item.id)
      }}
    >
      <TodoStatus status={item.status} />
      {editMode ? (
        <Input
          initialValue={item.content}
          onEnter={(val) => {
            updateContent(item.id, val)
            setEditMode(false)
          }}
          onBlur={(value) => {
            setEditMode(false)
            updateContent(item.id, value)
          }}
          onEscape={() => setEditMode(false)}
        />
      ) : (
        <>
          {item.content}
          <button
            className="edit-button"
            onClick={(e) => {
              e.stopPropagation()
              setEditMode(true)
            }}
          >
            edit
          </button>
          <button
            className="delete-button"
            onClick={(e) => {
              e.stopPropagation()
              removeItem(item.id)
            }}
          >
            del
          </button>
        </>
      )}
    </div>
  )
}
