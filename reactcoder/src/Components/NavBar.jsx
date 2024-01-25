import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from './CartWidget/CarWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">zapatillas</Nav.Link>
            <Nav.Link href="#pricing">vestimenta</Nav.Link>
            <Nav.Link href="#pricing"><CarWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )}
  export default NavBar;