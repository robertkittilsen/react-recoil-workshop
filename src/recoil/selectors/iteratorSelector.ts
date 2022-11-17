import { selector } from "recoil";
import { iteratorAtom } from "../atoms/iteratorAtom";

export const iteratorDoubledSelector = selector({
  key: "iteratorDoubledSelector",
  get: ({get}) => {
    const currentIteratorValue = get(iteratorAtom);

    return currentIteratorValue * 2;
  }
});
