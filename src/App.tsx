import "./App.css";
import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Toggle from "./components/Toggle";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

function App() {
  const [isDark, setDark] = useState(true);
  const [list, setList] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  // maybe add task description later

  const deleteList = () => {
    setList([]);
  };

  const handleAddTask = () => {
    let newTaskItem: string = newTask;
    if (newTask != "") {
      let updatedList = [...list];
      updatedList.push(newTaskItem);
      setList(updatedList);
      setNewTask("");
    }
  };
  
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
          <div className="input-container">
            <TextInput
              id="input-task"
              value={newTask}
              handleChange={(e) => setNewTask(e.target.value)}
            ></TextInput>
            <Button label="Add" onClick={handleAddTask}></Button>
            <Button label="Delete" onClick={deleteList}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
