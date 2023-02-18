import React from 'react'
import { Col, Container, Navbar, Nav, NavDropdown, Row } from 'react-bootstrap'
import "./navbar.scss";
import LOGO from "../../assets/Logo.svg";
import { useMedia } from 'use-media';

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
  const isSM = useMedia({maxWidth: "768px"})

  return (
    <Row >
      <Col xs={12} style={{
        padding: 0,
        position: "relative"
      }}>
        <Navbar collapseOnSelect expand="lg" className='navbar-main' style={{
          backgroundColor: "rgba(255,255,255,0.0)",
          zIndex: 15,
          position: "absolute",
          top: 0,
          left: 0
        }} >
          <Container fluid style={{
            paddingLeft: "2.5rem"
          }}>
            <Navbar.Brand href="#home"><img src={LOGO} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" id='nav-toggle-btn' />
            <Navbar.Collapse id="responsive-navbar-nav" className='nav-container'>
              <Nav className="me-auto">
              </Nav>
              <Nav>
                {
                  items.map((item, index) => (
                    <Nav.Link bsPrefix={index != 0 ? 'nav-btn' : 'nav-btn link-selected'} key={index} href={item.href}>{item.title}</Nav.Link>
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