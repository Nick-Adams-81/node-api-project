import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const MyCard = (id, title, url, author) => {
  if (author === null) {
    author = "unknown";
  }

  // TODO: figure out why im getting an error <DOCTYPE html> is not valid json when calling this method
  const getDataById = (id) => {
    fetch(`/data/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
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
          {/* // TODO : create button that gets data based on id */}
          <Button variant="primary" onClick={() => console.log(id)}>
            Get Info
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;
