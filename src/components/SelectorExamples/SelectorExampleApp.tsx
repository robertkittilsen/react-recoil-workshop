import { Box } from "@chakra-ui/react"
import { IteratorButton } from "./IteratorButton"
import { ShowIterator } from "./ShowIterator"
import { SubtractNumber } from "./SubtractNumber"

export const SelectorExampleApp = () => {
    return (
        <Box m={16}>
            <ShowIterator />
            <IteratorButton />
            {/* Comment in for Selector example 2 */}
            <SubtractNumber />
        </Box>
    )
}