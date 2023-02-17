import React from 'react'
import { Col, Container, Navbar, Nav, NavDropdown, Row } from 'react-bootstrap'
import "./navbar.scss";
import LOGO from "../../assets/Logo.svg";

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
    <Row  >
      <Col xs={12} style={{
        padding: 0
      }}>
        <Navbar sticky='top' collapseOnSelect expand="lg" className='navbar-main' style={{
      zIndex: "1"
    }}>
          <Container fluid style={{
            paddingLeft: "2.5rem"
          }}>
            <Navbar.Brand href="#home"><img src={LOGO} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav-toggle-btn' />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav className='nav-container'>
                {
                  items.map((item, index) => (
                    <Nav.Link bsPrefix='nav-btn' key={index} href={item.href}>{item.title}</Nav.Link>
                  ))
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  )
}

export default MainNavbar