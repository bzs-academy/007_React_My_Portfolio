import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'



function Header() {


    return (
        <div className="bg-dark" style= {NavbarStyle}>
            <Navbar bg="dark" expand="lg" variant="dark" className="container">
                <Navbar.Brand href="/">MY_PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/" className="link" >HOME</Nav.Link>
                            <Nav.Link href="/portfolio" className="link">PORTFOLIO</Nav.Link>
                            <Nav.Link href="/services" className="link">SERVICES</Nav.Link>
                            <Nav.Link href="/testimonial" className="link">TESTIMONIAL</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const NavbarStyle = {
    position: 'sticky',
    top: '0',
    zIndex: '1000'
}
export default Header;
