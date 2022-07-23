import { React } from 'react';
import { Navbar as NavBar, Container, Nav, Button } from 'react-bootstrap';
import { MdShoppingCart } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { FcBusinessman } from 'react-icons/fc';

const iconCursor = {
 cursor: 'pointer',
 color: 'skyblue',
 margin: '4px',
 fontSize: '30px',
};

function Navbar({ isLogedIn }) {
 const navigate = useNavigate();
 return (
  <NavBar bg="dark" variant="dark">
   <Container>
    <NavBar.Brand href="/">Pelatihan</NavBar.Brand>
    {isLogedIn ? (
     <>
      <Nav className="me-auto">
       <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      <MdShoppingCart style={iconCursor} onClick={() => navigate('/carts')} />
      <FcBusinessman style={iconCursor} onClick={() => navigate('/profile')} />
     </>
    ) : (
     <>
      <Nav className="me-auto">
       <Nav.Link href="/">Home</Nav.Link>
       <Nav.Link href="/auth/login">Profile</Nav.Link>
       <Nav.Link href="/auth/login">Carts</Nav.Link>
      </Nav>
      <Button onClick={() => navigate('/auth/login')} className="me-2" variant="outline-primary">
       Login
      </Button>
      <Button onClick={() => navigate('/auth/register')} variant="outline-primary">
       Register
      </Button>
     </>
    )}
   </Container>
  </NavBar>
 );
}
export default Navbar;
