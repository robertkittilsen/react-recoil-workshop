import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil"
import { iteratorAtom } from "../../recoil/atoms/iteratorAtom"

export const IteratorButton = () => {

    const setRecoilIteratorState = useSetRecoilState(iteratorAtom);

    const onClick = () => {
        setRecoilIteratorState((currentValue) => currentValue + 1);
    }

    return(
        <Button colorScheme='teal' size='sm' onClick={onClick}>
            Iterate
        </Button>
    )
}