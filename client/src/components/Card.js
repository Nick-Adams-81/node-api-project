const Card = (id, title, url, author) => {
  if (author === null) {
    author = "unknown";
  }
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
        {/* // TODO : create button that gets data based on id */}
        <Button variant="primary" onClick={() => getDataById(id)}>
          Get Info
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Card;
