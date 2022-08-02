import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

return(
<div className="divNav">

<Navbar bg="light" variant="light">
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Disqueria</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
          <LinkContainer to="/categoria/rock">
           <Nav.Link>Rock</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/pop">

            <Nav.Link>Pop</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/rap">

            <Nav.Link >Rap</Nav.Link>
            </LinkContainer>

            

          </Nav>
          <Link to="/cart">

          <CardWidget/>
          </Link>

        </Container>
      </Navbar>
      
</div> 
)
}


export default NavBar

