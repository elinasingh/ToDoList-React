import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputValue , setInputValue] = useState("");
  const [items, setItems] = useState([]);

  function handleInputChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  function addItem() {
    setItems( (prevItems) => {
      return [...prevItems, inputValue];
    });
    setInputValue("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" 
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((toDoItem) => (
          <ToDoItem text={toDoItem} />
        ) )}
        </ul>
      </div>
    </div>
  );
}

export default App;
