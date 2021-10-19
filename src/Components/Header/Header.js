import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo.png'
import useAuth from '../hooks/useAuth';

import './Header.css';


const Header = () => {

    const { user, logOut } = useAuth();
    return (
        
                <>
                    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">
                                <img
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Brand href="/home">HIW</Navbar.Brand>
                                <Nav className="me-auto">
                                <Nav.Link as= {HashLink} to = "/home#home">Home</Nav.Link>
                            <Nav.Link as= {HashLink} to = "/home#departments">Departments</Nav.Link>
                                <Nav.Link as={HashLink} to ="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to ="/signUp">SignUp</Nav.Link>
                            
                            {
                                user.email?
                                <button onClick={logOut} type="">Sign Out</button>
                                :
                                <Nav.Link as={HashLink} to ="/signIn">SignIn</Nav.Link>
                            }
                            <Nav.Link as={HashLink} to="/contactUs">Contact Us</Nav.Link>

                            { user.email &&
                                <span style={{color: 'white'}}>Hello: {user.displayName}</span>
                            }
                            
                            </Nav>
                        </Container>
                    </Navbar>

                    
                </>
        
    );
};

export default Header;