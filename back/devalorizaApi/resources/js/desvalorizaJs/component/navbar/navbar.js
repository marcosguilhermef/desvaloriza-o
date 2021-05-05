import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default class NavbarHome extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">Desvalorização</Navbar.Brand>
                    <Nav className="justify-content-center">
                        <Nav.Link href="/">Calcular inflação</Nav.Link>
                        {/* <Nav.Link href="#link">Artigos</Nav.Link>
                        <Nav.Link href="#sobre">Sobre</Nav.Link> */}
                    </Nav>
                </Navbar>
            </>
        )
    }
}