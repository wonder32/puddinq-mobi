import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


const Navigation = () => {

    const [expanded, setExpanded] = useState(false);

    return (
        <NavigationContainer>
            <Navbar  expanded={expanded} expand="lg" bg="dark" variant="dark" className="mr-auto head-menu">
                <Navbar.Brand href="#home">Puddinq &copy;</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link to={'/'} as={NavLink} onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link to={'/map/'} as={NavLink} onClick={() => setExpanded(false)}>Map</Nav.Link>
                        <Nav.Link to={'/handleiding/'} as={NavLink} onClick={() => setExpanded(false)}>Handleiding</Nav.Link>
                        <Nav.Link to={'/over/'} as={NavLink} onClick={() => setExpanded(false)}>Over</Nav.Link>
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