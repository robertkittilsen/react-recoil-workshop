import { selector } from "recoil";
import { thermostatCelciusAtom } from "../atoms/thermostatCelciusAtom";

export const thermostatFahrenheitAtom = selector({
  key: "thermostatFahrenheitAtom",
  get: ({get}) => {
    const degreesCelcius = get(thermostatCelciusAtom);
    return (degreesCelcius * 9 / 5) + 32;
  },
  set: ({set}, degreesFahrenheit) => {
    //@ts-ignore
    set(thermostatCelciusAtom, (degreesFahrenheit - 32) * 5 / 9)
  }
});
