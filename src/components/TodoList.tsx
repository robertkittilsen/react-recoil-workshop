import { Divider } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/atoms/todoListAtom";
import TodoItemCreator from "./TodoItemCreator";
import TodoItemView, { TodoItem } from "./TodoItemView";
import { TodoListFilters } from './TodoListFilters';


function TodoList() {
  const todoList = [] as TodoItem[];
  return (
    <>
      <TodoItemCreator />
      <Divider my={4}/>
      {/* <TodoListFilters /> */}
      {todoList.map((todoItem) => (
        <TodoItemView key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
