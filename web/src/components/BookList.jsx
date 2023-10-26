import BookCard from "./BookCard";
import Container from "react-bootstrap/Container";

function BookList({ books }) {
  return (
    <Container className="py-4">
      <h1 className="text-center">Books</h1>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </Container>
  );
}

export default BookList;
