import React, { useState } from "react";

function App() {
  const [inputValue , setInputValue] = useState("");

  function handleInputChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
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
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
