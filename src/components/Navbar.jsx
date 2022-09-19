// importar componentes de react-bootstrap a utilizar
import { Container, Nav, Navbar, Button } from "react-bootstrap";
// importar componente Link para manejar redireccion a rutas deseada
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <Navbar bg="secondary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="text-decoration-none text-white me-5">
              <Button variant="light"> Home </Button>
            </Link>
            <Link to="/admin" className="text-decoration-none text-white">
              <Button variant="dark"> Admin </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
