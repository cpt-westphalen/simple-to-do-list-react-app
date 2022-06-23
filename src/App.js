import './App.css';
import { useState } from "react";
import TaskList from "./TaskList.js";
import UserInput from "./UserInput.js";

export default function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );

  const saveTasklistToLocalStorage = () => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  };

  const addTask = (newTask) => {
    setTasklist([
      ...tasklist,
      { id: Math.floor(Math.random() * 1e5), text: newTask, check: false }
    ]);
  };

  const handleClickClear = () => {
    setTasklist(tasklist.filter((task) => !task.check));
  };

  return (
    <div className="App">
      <h1>Simple To-do</h1>
      <p>Today I'm going to... </p>
      <UserInput className="inputs" addTask={addTask} />
      <TaskList
        className="tasklist"
        tasklist={tasklist}
        saveTasklistToLocalStorage={saveTasklistToLocalStorage}
      />
      { 
        (tasklist.length > 0) && (<button className="clear-done-btn" onClick={handleClickClear}>
          Clear Done
        </button>)
      }
      <Signature/>
    </div>
  );
}

const Signature = () => {
  const styling = {
    margin: "5rem auto 2rem auto",
    color: "#AAAAAA",
    fontSize: "small",
    fontFamily: "monospace"
  }

  return (
    <div style={styling}>
      Simple To-Do App @ by <a href='https://github.com/cpt-westphalen'>cpt-westphalen</a>
    </div>
  )
}