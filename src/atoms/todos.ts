import { atom } from "recoil";
import { Todo } from "../types/todo.type";

export const todosState = atom<Todo[]>({
  key: "todos",
  default: []
});
