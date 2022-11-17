import { useRecoilValue } from "recoil";
import { iteratorAtom } from "../../recoil/atoms/iteratorAtom";

export const ShowIterator = () => {
    const exampleAtomState = useRecoilValue(iteratorAtom);
  
    return <h1>Iterator: {exampleAtomState}</h1>
  }