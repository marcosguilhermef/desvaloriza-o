import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

import { NavLink } from "react-router-dom";

export default class NavbarHome extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">Desvalorização</Navbar.Brand>
                    <Nav className="justify-content-center">
                        <NavLink  to="/" className="nav-link" activeClassName="">Calcular inflação</NavLink>
                        <NavLink  to="/sobre" className="nav-link" activeClassName="nav-link active">Sobre</NavLink>
                    </Nav>
                </Navbar>
            </>
        )
    }
}