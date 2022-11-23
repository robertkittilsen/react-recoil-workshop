import { Box, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { thermostatCelciusAtom } from "../../recoil/atoms/thermostatCelciusAtom";
import { thermostatFahrenheitAtom } from "../../recoil/selectors/thermostatFahrenheitSelector";

export const Thermostat = () => {
    const celciusTemp = useRecoilValue(thermostatCelciusAtom);
    const [fahrenheit, setFahrenheit] = useRecoilState(thermostatFahrenheitAtom);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setFahrenheit(parseInt(newValue));
    }
    return(
        <>
        <Heading marginBottom={8}>Writeable Selector (en bilingual termostat)</Heading>
            <Box p={4} marginBottom={16} border={"1px solid indigo"}>
                <h1>Termostatens mål 🏁</h1>
                <h2>{Math.round(celciusTemp)} Celcius</h2>
            </Box>
            <Box p={4} marginBottom={4} border={"1px solid indigo"}>
            <Box marginBottom={4}>
                <h2>Yankee Doodle Interface™️</h2>
                <h2>Currently aiming for {fahrenheit} Fahrenheit</h2>
            </Box>
            <Box marginBottom={4}>
                <p>Adjust the damn heat! 👇</p>
                <Input type="number" value={fahrenheit} onChange={onChange}/>
            </Box>
            </Box>
        </>
    )
}