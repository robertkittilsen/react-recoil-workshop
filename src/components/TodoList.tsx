import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/atoms/todoListAtom";
import TodoItemCreator from "./TodoItemCreator";
import TodoItemView, { TodoItem } from "./TodoItemView";


function TodoList() {
  const todoList = [] as TodoItem[];
  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItemView key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
