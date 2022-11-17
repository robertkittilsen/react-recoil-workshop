import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil"
import { subtractSelector } from "../../recoil/selectors/subtractSelector";

export const SubtractNumber = () => {

    const setSubtract = useSetRecoilState(subtractSelector);
    const [valueToSubtract, setValueToSubtract] = useState(0);

    const onClick = () => {
        setSubtract(valueToSubtract);
    }

    const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setValueToSubtract(parseInt(newValue))
    }

    return (
        <>
            <div style={{marginTop: "4px"}}>
                <label>
                    <p>Type number to subtract</p>
                    <input type="number" style={{border: "1px solid blue"}}  value={valueToSubtract} onChange={onChangeInput}/>
                </label>
            </div>
            <Button marginTop={4} colorScheme='teal' size='sm' onClick={onClick}>
                Subtract
            </Button>
        </>
    )
}
