import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const dataArray = data.results;
  if (dataArray !== undefined) {
    console.log(dataArray[1]);
  }

  useEffect(() => {
    fetch(`http://localhost:5000/data/${input}/3`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [input]);

  return (
    <div className="App">
      <div style={{ backgroundColor: "#ECDEEA" }}>
        <h1
          style={{ marginLeft: "600px", marginTop: "20px", fontSize: "50px" }}
        >
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
        </div>
      </div>
      
      <Row>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
