import { Box, Button, Input, InputGroup } from '@chakra-ui/react';
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms/todoListAtom"

let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState<string>("");

  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  /* const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  }; */

  return (
    <Box my={4}>
      <InputGroup>
        <Input type="text" value={inputValue} onChange={onChange} />
        {/* <Button onClick={addItem} ml={8}>Legg til</Button> */}
      </InputGroup>
    </Box>
  );
}

export default TodoItemCreator;
