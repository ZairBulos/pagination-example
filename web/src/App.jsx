import { useBooks } from "./hooks/useBooks";
import Header from "./components/Header";
import Paged from "./components/Pagination";
import BookList from "./components/BookList";

function App() {
  const { books, pagination, onChangePage } = useBooks();

  return (
    <>
      <Header />
      <BookList books={books} />
      <Paged
        active={pagination.pageNumber}
        totalPages={pagination.totalPages}
        onChangePage={onChangePage}
      />
    </>
  );
}

export default App;
