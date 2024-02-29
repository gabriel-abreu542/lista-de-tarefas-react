import "./App.css";
import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Toggle from "./components/Toggle";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

function App() {
  const [isDark, setDark] = useState(true);

  return (
    <>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <Toggle
          isChecked={isDark}
          handleChange={() => setDark(!isDark)}
        ></Toggle>

        <div className="list">
          <ListGroup items={[]} heading={"To Do List"} />
        </div>
        <div className="input">
          <TextInput id="input-task" value={""}></TextInput>
          <Button label="Add" onClick={() => console.log("Teste")}></Button>
        </div>
      </div>
    </>
  );
}

export default App;
