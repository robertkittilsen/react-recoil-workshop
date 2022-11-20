# React recoil workshop
Dette er en workshop som viser grunnleggende bruk av recoil js gjennom å lage en enkel todo app.

## Kom i gang

Det finnes en tilhørende [presentasjon](https://docs.google.com/presentation/d/1RvUAMql55qF0Jv1tGqVDp7Xux4RWijm7g17WQRjqYyY/edit#slide=id.g1972c7b7ffd_0_135) som det kan være greit å se gjennom for å komme i gang med denne workshopen. Ellers er det bare å følge trinnene nedenfor for å komme i gang!

### Dette må du ha før du starter

For å komme i gang med workshopen må du ha `node` og `npm` installert. Her en noen guides som viser deg hvordan du installerer dette, om du ikke har gjort det alt:

- [Installer node og npm på mac](https://treehouse.github.io/installation-guides/mac/node-mac.html)
- [Installer node og npm på windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
- [Installer node og npm på linux (ubuntu)](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04)

### Starte applikasjonen

1. Last ned repoet ved å kjøre kommandoen `git clone https://github.com/robertkittilsen/react-recoil-workshop` i terminalen.
2. Naviger til root-folderen ved å kjøre `cd react-recoil-workshop`
3. Start appen ved å kjøre `npm install` og deretter `npm start`.
4. Åpne koden i din favoritteditor, naviger til `src/App` og følg instruksjonene derifra!

## Nyttige lenker

- [Recoil dokumentasjon](https://recoiljs.org/docs/introduction/getting-started) - offisielle nettsiden til Recoil js.

## Frontend

Applikasjonen er skrevet i React og TypeScript med UI komponenter fra Chakra. Åpne `App.tsx` for å se på applikasjonen.

## Scripts

Her beskriver vi noen scripts som man kan kjøre i terminalen når man er i rotmappen (der man finner ´package.json´ ).

### `npm install`

Installerer alle avhengigheter som trengs for å kjøre applikasjonen lokalt.

### `npm start`

Starter applikasjonen på adressen [http://localhost:3000](http://localhost:3000). Siden vil automatisk bli oppdatert når man gjør en endring i koden.

# Oppgaver

I denne workshopen skal vi bygge en enkel todo liste app. Appen vil kunne gjøre følgende:
* Legge til en todo
* Fjerne en todo
* Markere en todo som ferdig
* Markere en todo som ikke ferdig
* Se en oversikt over alle todos
* Vise nyttige stats om todos

Gjennom å gjøre dette vil vi lære oss om atomer, selektorer, atom familier og hooks fra Recoil APIet.

## Oppgave 1: Oppstart av Todo app

💡 TodoApp-komponenten som brukes i oppgavene finner du i mappen `src/TodoListApp.tsx`. 

Kommenter inn denne i `App.tsx` og kjør `npm start` for å se at appen kjører.
Du vil nå se et grunnleggende eksempel på bruk av Recoil. Se gjennom koden for `UseRecoilStateExample`, `Atom Example` og `Selector Example` for å se hvordan disse fungerer.

### Oppgave 2a)

🏆 For at recoil skal fungere må vi legge til `RecoilRoot` rundt hele appen. Dette gjør vi ved å importere `RecoilRoot` fra `recoil` og legge den rundt `TodoListApp` i `App.tsx`.

<details>
 <summary>🚨 Løsning</summary>

```js
import { RecoilRoot } from "recoil";

<RecoilRoot>
  <TodoListApp />
</RecoilRoot>
```

</details>

### Oppgave 2b)

🏆 La oss lage et atom kalt todoListState som vil holde todo-listen vår:

Gå til `src/recoil/atoms/todoListAtom.ts` og legg til et atom kalt `todoListState` som har en tom liste som default verdi og "TodoList" som nøkkel.

<details>
 <summary>🚨 Løsning</summary>

```js
export const todoListState = atom<TodoItem[]>({
  key: 'TodoList',
  default: [],
});
```

</details>

### Oppgave 3a)

Flott du har laget ditt første atom!

🏆 Vi gir atomet en unik nøkkel og setter default verdien til et tomt array. For å lese innholdet til dette atomet kan vi bruke `useRecoilValue` hooken. Ta i bruk denne hooken i `TodoList.tsx`.

<details>
 <summary>🚨 Løsning</summary>

  ```js
  import { useRecoilValue } from "recoil";
  import { todoListState } from "../recoil/atoms/todoListAtom";
  import TodoItemCreator from "./TodoItemCreator";
  import TodoItemView from "./TodoItem";

  const TodoList = () => {
    // Her leser vi innholdet til todoListState
    const todoList = useRecoilValue(todoListState);
    return (
      <>
        <TodoItemCreator />
        {todoList.map((todoItem) => (
          <TodoItemView item={todoItem} key={todoItem.id} />
        ))}
      </>
    );
  };
  ```

</details>


💡 For å lage nye todo items trenger vi en setter funksjon som skal oppdatere innholdet i `todoListState`. Vi kan bruke `useSetRecoilState` for å få tak i denne funksjonen.
Lag en `setTodoList` funksjon ved bruk av denne hooken i `TodoItemCreator.tsx` og kommenter inn `addItem()` funksjonen og kommenter inn knappen som tar i bruk `addItem()` i `TodoItemCreator.tsx`.

<details>
 <summary>🚨 Løsning</summary>

```js
const setTodoList = useSetRecoilState(todoListState);

const addItem = () => {
  setTodoList((oldTodoList) => [
    ...oldTodoList,
    {
      id: getId(),
      text: inputValue,
      isComplete: false
    }
  ]);
  setInputValue("");
};

return (
  <Box my={4}>
    <InputGroup>
      <Input type="text" value={inputValue} onChange={onChange} />
      <Button onClick={addItem} ml={8}>Legg til</Button>
    </InputGroup>
  </Box>
);
```

</details>

Vi bruker `useSetRecoilState` for å få tak i en setter funksjon som vi kan bruke for å oppdatere `todoListState`. Vi bruker denne setter funksjonen for å oppdatere `todoListState` med en ny todo item.

### Oppgave 3b)

🏆 Ta i bruk `useRecoilState` i stedet for `useState` i `TodoItemView.tsx` 

<details>
 <summary>🚨 Løsning</summary>

```js
const [todoList, setTodoList] = useRecoilState<TodoItem[]>(todoListState);
```

</details>

## Avslutning

`TodoItemView` komponenten viser verdien av todo itemet og den tillater deg å bytte tekst og slette itemet.

Vi bruker `useRecoilState` til å lese `todoListState` og til å få en setter-funksjon som vi bruker til å oppdatere todo teksten, markere den som ferdig eller slette den.

```js
const [todoList, setTodoList] = useRecoilState<TodoItem[]>(todoListState);
```

Og med det så har vi en fullverdig todo app! 🎉

🏆🏆🏆

Som du ser brukes `useRecoilState` på samme måte som `useState`. Det er bare at `useRecoilState` tar inn et atom som argument, og kan brukes av flere komponenter.