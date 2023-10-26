import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand className="text-white">Pagination Example</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;