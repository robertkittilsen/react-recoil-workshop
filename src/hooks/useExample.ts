import { useRecoilState } from "recoil";
import { exampleAtom } from "../recoil/atoms/exampleAtom";

// Create a hook that can be used to get the example state
// and set the example state
export const useExample = () => {
  return useRecoilState(exampleAtom);
};
