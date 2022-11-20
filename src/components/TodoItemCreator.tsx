import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms/todoListAtom"

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState<string>("");

  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <Box>
      <Input type="text" value={inputValue} onChange={onChange} />
       {/* <Button onClick={addItem}>Add</Button> */}
    </Box>
  );
}

export default TodoItemCreator;
