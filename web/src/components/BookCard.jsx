import Card from "react-bootstrap/Card";

function BookCard({ book }) {
  return (
    <Card>
      <Card.Body>
        <h5>{book.title}</h5>
        <h6>{book.author}</h6>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
