import { Button, Checkbox, Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms/todoListAtom";

export interface TodoItem {
    id: number;
    text: string;
    isComplete: boolean;
}

const replaceItemAtIndex = (arr: TodoItem[], index: number, newValue: TodoItem) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: TodoItem[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

interface TodoItemViewProps {
  item: TodoItem;
  key: number;
}

const TodoItemView = ({item}: TodoItemViewProps) => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <InputGroup>
      <Input type="text" value={item.text} onChange={editItemText} />
      <Checkbox size="lg" mx={4} checked={item.isComplete} onChange={toggleItemCompletion} />
      <Button onClick={deleteItem}>Slett</Button>
    </InputGroup>
  );
};

export default TodoItemView;
