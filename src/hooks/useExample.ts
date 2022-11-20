import { useRecoilState } from "recoil";
import { exampleAtom } from "../recoil/atoms/exampleAtom";

// Custom hook som kan brukes til å hente og sette example state
export const useExample = () => {
  return useRecoilState(exampleAtom);
};
