import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from './CardWidget';

const NavBar = () => {

return(
<div className="divNav">

<Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Disqueria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Catalogo</Nav.Link>
            <Nav.Link href="#features">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <CardWidget/>
        </Container>
      </Navbar>
      
</div> 
)
}


export default NavBar

