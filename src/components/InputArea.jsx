import React, { useState } from "react";

function InputArea(props) {
  const [inputValue , setInputValue] = useState("");

  function handleInputChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

    return (
        <div className="form">
        <input 
          type="text" 
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={() => {
          props.onAdd(inputValue);
          setInputValue("");
        }}>
          <span>Add</span>
        </button>
      </div>
    );
}

export default InputArea;