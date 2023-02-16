import React from 'react'
import { Col, Container, Navbar, Nav, NavDropdown, Row } from 'react-bootstrap'
import "./navbar.scss";
import LOGO from "../../assets/Logo.png";

function MainNavbar() {
  const items = [
    {
        title: 'Home',
        href: "home"
    },
    {
        title: 'About Us',
        href: "about"
    },
    {
        title: 'Our Cources',
        href: "cources"
    },
    {
        title: 'Achievements & Results',
        href: "achievements"
    },
    {
        title: 'Students Testimonials',
        href: "testimonials"
    },
  ]

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={LOGO} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className='nav-container'>
            {
                items.map((item, index) => ( 
                    <Nav.Link bsPrefix='nav-btn' key={index} disabled={true} href={item.href}>{item.title}</Nav.Link>
                ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar