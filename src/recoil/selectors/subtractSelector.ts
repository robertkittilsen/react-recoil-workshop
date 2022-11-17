import { DefaultValue, selector } from "recoil";
import { iteratorAtom } from "../atoms/iteratorAtom";

export const subtractSelector = selector({
  key: "subtractSelector",
  get: ({get}) => {
    const currentIteratorValue = get(iteratorAtom);
    return currentIteratorValue;
  },
  set: ({get, set}, valueToSubtract) => {
    const currentIteratorValue = get(iteratorAtom);
    set(iteratorAtom, valueToSubtract instanceof DefaultValue || valueToSubtract === 0 ? 0 : currentIteratorValue - valueToSubtract)
  }
});
