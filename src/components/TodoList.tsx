import { Divider, Spacer } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/atoms/todoListAtom";
import TodoItemCreator from "./TodoItemCreator";
import TodoItemView, { TodoItem } from "./TodoItemView";
import { TodoListFilters } from './TodoListFilters';
import { TodoListStatsView } from "./TodoListStatsView";


function TodoList() {
  const todoList = [] as TodoItem[];
  return (
    <>
      <TodoItemCreator />
      {/* <Spacer /> */}
      {/* <TodoListFilters /> */}
      <Divider my={4} />
      {todoList.map((todoItem) => (
        <TodoItemView key={todoItem.id} item={todoItem} />
      ))}
      <Spacer my={4} />
      {/* <TodoListStatsView /> */}
    </>
  );
}

export default TodoList;
