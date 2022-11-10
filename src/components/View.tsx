import { useExample } from "../hooks/useExample";
import {
  Button,
  Text,
  Input,
  InputGroup,
  Code,
  Box,
  Container,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

export function View() {
  const [example, setExample] = useExample();
  const [input, setInput] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setExample(input);
  }

  return (
    <Container maxW="md">
      <Box p={5} shadow="md" borderWidth="1px" mt={8}>
        <Flex gap={8} direction="column">
          <Code>Example key: {example}</Code>
          <form onSubmit={onSubmit}>
            <InputGroup>
              <Input type="text" value={input} onChange={handleOnChange} />
              <Button
                variant="outline"
                type="submit"
                ml={2}
              >
                <Text>Submit</Text>
              </Button>
            </InputGroup>
          </form>
        </Flex>
      </Box>
    </Container>
  );
}
