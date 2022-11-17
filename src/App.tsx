import { RecoilRoot } from "recoil";
import { AtomExampleApp } from "./components/AtomExamples/AtomExampleApp";
import { SelectorExampleApp } from "./components/SelectorExamples/SelectorExampleApp";
import { View } from "./components/View";

function App() {
  return (
    <RecoilRoot>
      {/* <View /> */}
      {/* Atom example */}
      {/* <AtomExampleApp /> */}
      {/* Selector example */}
      <SelectorExampleApp />
    </RecoilRoot>
  );
}

export default App;
