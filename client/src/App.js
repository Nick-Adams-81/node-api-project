import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCard from "./components/MyCard";
import MyInput from "./components/MyInput";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const dataArray = data.results;

  useEffect(() => {
    fetch(`http://localhost:5000/data/${input}/5`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [input]);

  if (dataArray === undefined) {
    return (
      <div className="App">
        <MyInput input={input} setInput={setInput} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <MyInput input={input} setInput={setInput} />
        <Row>
          <Col xs={12} sm={12} md={6} lg={4}>
            {dataArray.map(({ id, title, url, author }) => {
              return MyCard(id, title, url, author);
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
