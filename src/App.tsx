import { RecoilRoot } from "recoil";
import { UseRecoilStateExample } from "./components/UseRecoilStateExample";
import { AtomExampleApp } from "./components/AtomExamples/AtomExampleApp";
import { SelectorExampleApp } from "./components/SelectorExamples/SelectorExampleApp";
import TodoListApp from "./TodoListApp";

function App() {
  /*
  * I Examples() har du tilgang til 3 komponenter som viser ulike måter å bruke recoil på.
  * Ta gjerne en titt gjennom disse før du starter på oppgavene da de kan være nyttige.
  * Fjern <Examples /> når du er klar for oppgavene og fortsett fra README.md
  */
  function Examples() {
    return (
      <RecoilRoot>
        <UseRecoilStateExample />

        {/* Atom example */}
        {/* <AtomExampleApp /> */}

        {/* Selector example */}
        {/* <SelectorExampleApp /> */}
      </RecoilRoot>
    );
  }
  
  return (
    <>
      <Examples />
      {/* Todo list app */}
      {/* <TodoListApp /> */}
    </>
  );
}

export default App;
