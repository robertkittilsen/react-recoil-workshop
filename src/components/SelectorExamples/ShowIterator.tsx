import { useRecoilValue } from "recoil";
import { iteratorAtom } from "../../recoil/atoms/iteratorAtom";
import { iteratorDoubledSelector } from "../../recoil/selectors/iteratorSelector";

export const ShowIterator = () => {
    const exampleAtomState = useRecoilValue(iteratorAtom);
    const exampleSelectorValue = useRecoilValue(iteratorDoubledSelector);
  
    return (
        <>
          <h1>Iterator: {exampleAtomState}</h1>
          <h1>Iterator doubled: {exampleSelectorValue}</h1>
        </>
      )
  }