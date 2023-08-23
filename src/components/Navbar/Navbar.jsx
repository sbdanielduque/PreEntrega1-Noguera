import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';

import './barraNav.css'


const NavBar = () => {
    return ( 
    <Navbar expand="lg" className="bg-dark navBar">
        <Container>
            <Navbar.Brand href="#home" className='white-color'>Tu Compu Ideal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 justify-content-end">
                <Nav.Link className='white-color' href="#inicio">Inicio</Nav.Link>
                <Nav.Link className='white-color' href="#productos">Productos</Nav.Link>
                <Nav.Link className='white-color' href="#carrito">Carrito</Nav.Link>
                <CartWidget />
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar