import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


const Navigation = () => {

    return (
        <NavigationContainer>
            <Navbar bg="dark" expand="lg" className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <Navbar.Brand href="#home">puddinq &copy;</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/map">Map</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/over">Over</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavigationContainer>
    );
}

export default Navigation;

const NavigationContainer = styled.div`



`;