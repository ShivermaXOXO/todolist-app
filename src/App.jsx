import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [item,setItem]=useState([]);

  function handleChange( event) {
    const newValue = event.target.value;

    setInput(newValue);
  }
  function addItem(){
    setItem( (prevItem) => {
      return [...prevItem,input];
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={input} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div> 
      <div>
        <ul>
          {item.map((todoItem) => {
            return <li style={{textDecoration:"line-through"}}>{todoItem}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;