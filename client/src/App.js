import { useState, useEffect, useRef } from "react";

function App() {
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/data/${input}/3`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, [input])

  return (
    <div className="App" style={{ backgroundColor: "#ECDEEA" }}>
      <h1 style={{ marginLeft: "600px", marginTop: "20px", fontSize: "50px" }}>
        <span style={{ color: "green" }}>S</span>
        <span style={{ color: "red" }}>P</span>
        <span style={{ color: "#C1CB4F" }}>O</span>
        <span style={{ color: "blue" }}>O</span>
        <span style={{ color: "orange" }}>F</span>
        <span style={{ color: "purple" }}>L</span>
        <span style={{ color: "#C1CB4F" }}>E</span>
      </h1>

      <div style={{ marginLeft: "600px" }}>
        <input
          type="text"
          id="user-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Find info!</button>
      </div>
    </div>
  );
}

export default App;
