import { Box } from "@chakra-ui/react"
import { IteratorButton } from "./IteratorButton"
import { ShowIterator } from "./ShowIterator"
import { Thermostat } from "./Thermostat"

export const SelectorExampleApp = () => {
    return (
        <Box m={16}>
            <ShowIterator />
            <IteratorButton />
            {/* Comment in for Writeable Selector example */}
            {/* <Thermostat /> */}
        </Box>
    )
}