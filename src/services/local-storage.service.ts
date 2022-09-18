export const setItem = (key: string, item: any) => {
  const stringified = JSON.stringify(item)
  localStorage.setItem(key, stringified)
}

export const getItem = (key: string) => {
  const item = localStorage.getItem(key)

  return item && JSON.parse(item)
}
