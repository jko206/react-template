import { useState } from 'react'

type Props = {
  onEnter: (value: string, clearInput: () => void) => void
  initialValue?: string
  onEscape?: () => void
  onBlur?: (value: string) => void
}

export default function (props: Props) {
  const [value, setValue] = useState(props.initialValue ?? '')
  const clearInput = () => setValue('')

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      onBlur={() => props.onBlur?.(value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          props.onEnter(value, clearInput)
        } else if (e.key === 'Escape') {
          props.onEscape?.()
        }
      }}
    />
  )
}
