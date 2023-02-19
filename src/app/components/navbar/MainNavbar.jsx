import React from 'react'
import { Col, Container, Navbar, Nav, NavDropdown, Row } from 'react-bootstrap'
import "./navbar.scss";
import LOGO from "../../assets/Logo.svg";
import { useMedia } from 'use-media';
import { Link, useLocation } from 'react-router-dom';

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
  let currPath = useLocation().pathname?.replace("/persistanceEdu/", "");
  currPath = currPath.replace("/", "")
  if (currPath == ""){
    currPath = "home"
  }

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
          left: 0,
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
                    <Link to={item.href} style={{
                      marginTop: "1rem"
                    }}><Nav.Link bsPrefix={currPath == item.href
                    ? 'nav-btn link-selected' 
                    : 'nav-btn'} key={index} href={item.href}>{item.title}</Nav.Link></Link>
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