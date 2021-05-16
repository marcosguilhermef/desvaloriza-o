import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { InertiaLink } from '@inertiajs/inertia-react'

export default class NavbarHome extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">Desvalorização</Navbar.Brand>
                    <Nav className="justify-content-center">
                        <InertiaLink href="/" className="nav-item nav-link">Calcular inflação</InertiaLink>
                        <InertiaLink href="/sobre" className="nav-item nav-link">Sobre</InertiaLink>
                    </Nav>
                </Navbar>
            </>
        )
    }
}