import { useState, useEffect, useRef } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (input) => {
    useEffect(() => {
    fetch(`/data/${input}` , {
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }, [])
  }
  

  return (
    <div className="App" style={{ backgroundColor: "grey" }}>
      <h1 style={{ marginLeft: "600px", marginTop: "100px", fontSize: "50px" }}>
        <span style={{ color: "green" }}>S</span>
        <span style={{ color: "red" }}>P</span>
        <span style={{ color: "yellow" }}>O</span>
        <span style={{ color: "blue" }}>O</span>
        <span style={{ color: "orange" }}>F</span>
        <span style={{ color: "purple" }}>L</span>
        <span style={{ color: "yellow" }}>E</span>
      </h1>

      <div style={{ marginLeft: "600px" }}>
        <input
          type="text"
          id="user-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div>Youre input is {input}</div>
        <button onClick={handleClick(input)}>Find info!</button>
      </div>
    </div>
  );
}

export default App;