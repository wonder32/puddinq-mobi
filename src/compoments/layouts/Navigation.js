import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


const Navigation = () => {

    return (
        <NavigationContainer>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mr-auto head-menu">
                <Navbar.Brand href="#home">Puddinq &copy;</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" exact to="/" as={NavLink}>Home</Nav.Link>
                        <Nav.Link href="/map/" exact to="/map/" as={NavLink}>Map</Nav.Link>
                        <Nav.Link href="/over/" exact to="/over/" as={NavLink}>Over</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavigationContainer>
    );
}

export default Navigation;

const NavigationContainer = styled.div`

.head-menu {
    z-index: 5;
}

`;