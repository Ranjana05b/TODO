import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    props.onAdd(inputText);
    setInputText("");
}}
  return (
    <div className="form">
      <input onKeyUp={handleKeypress} onChange={handleChange} type="text" value={inputText} />
      <button
      
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
