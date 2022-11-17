import { Box } from "@chakra-ui/react"
import { IteratorButton } from "./IteratorButton"
import { ShowIterator } from "./ShowIterator"

export const AtomExampleApp = () => {
    return (
    <Box m={16}>
        <ShowIterator />
        <IteratorButton />
    </Box>

    )
}