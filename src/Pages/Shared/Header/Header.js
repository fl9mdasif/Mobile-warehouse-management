
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/xiaomi-logo.png';
import { signOut } from 'firebase/auth';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (

        <>
            <Navbar id="navContainer" sticky="top" collapseOnSelect expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand as={Link} to="home"> <img className="navIcon" style={{}} alt="" src={logo} /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mx-4 text-">
                            <Nav.Link as={Link} to="product">Products</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>

                        </Nav>

                        <Nav>
                            {

                                user && <>
                                    <Nav.Link as={Link} to="addproduct">Add</Nav.Link>
                                    <Nav.Link as={Link} to="manageproduct">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="myproducts">MyProducts</Nav.Link>
                                </>

                            }
                            {
                                user ? <button onClick={handleSignOut} className="btn btn-link text-white text-decoration-none"> Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;