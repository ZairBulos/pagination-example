import Container from 'react-bootstrap/Container';
import Pagination from "react-bootstrap/Pagination";

function Paged({ active, totalPages, onChangePage }) {
  let items = [];

  for (let i = 0; i < totalPages; i++) {
    items.push(
      <Pagination.Item key={i} active={i === active} onClick={() => onChangePage(i)}>
        {i+1}
      </Pagination.Item>
    );
  }

  return (
    <Container className="d-flex justify-content-center">
      <Pagination>
        {items}
      </Pagination>
    </Container>
  );
}

export default Paged;
