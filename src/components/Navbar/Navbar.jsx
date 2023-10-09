import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';

import './barraNav.css'


const NavBar = () => {
    return ( 
        <Navbar expand="lg" className="bg-dark navBar">
            <Container>
                <Link to='/' className='white-color'>Tu Compu Ideal</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto w-100 justify-content-end">
                    <NavLink className={({isActive}) => isActive ? 'btn btn-outline-light' : 'btn btn-secondary'} to='/'>Inicio</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'btn btn-outline-light' : 'btn btn-secondary'} to="/category/laptop">Laptop</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'btn btn-outline-light' : 'btn btn-secondary'} to="/category/mouse">Mouse</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'btn btn-outline-light' : 'btn btn-secondary'} to="/category/keyboard">Keyboard</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'btn btn-outline-light' : 'btn btn-secondary'} to='cart'>Cart</NavLink>
                    <Link to='cart'>
                        <CartWidget />
                    </Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar