import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const dataArray = data.results;
  if (dataArray !== undefined) {
    console.log(dataArray);
  }

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
          <div style={{ marginLeft: "470px", marginBottom: "45px" }}>
            <input
              style={{ width: "50%", height: "35px" }}
              type="text"
              id="user-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  } else {
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
          <div style={{ marginLeft: "470px", marginBottom: "15px" }}>
            <input
              style={{ width: "50%", height: "35px" }}
              type="text"
              id="user-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>

        <Row>
          <Col xs={12} sm={12} md={6} lg={4}>
            {dataArray.map(({ id, title, url, author }) => {
              return (
                <Card
                  style={{
                    width: "24rem",
                    margin: "auto",
                    marginTop: "15px",
                    border: "1px solid black",
                    padding: "5px",
                  }}
                  key={id}
                >
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Nav.Item>
                      <Nav.Link href={url}>link to story</Nav.Link>
                    </Nav.Item>
                    <Card.Text>By: {author}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
