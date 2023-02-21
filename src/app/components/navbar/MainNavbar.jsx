import React from 'react'
import { Col, Container, Navbar, Nav, NavDropdown, Row } from 'react-bootstrap'
import "./navbar.scss";
import LOGO from "../../assets/Logo.svg";
import { useMedia } from 'use-media';
import { Link, useLocation } from 'react-router-dom';
import {SitePages} from "../../data/data"

function MainNavbar() {
  const items = SitePages;
  let currPath = useLocation().pathname?.replace("/", "");
  if (currPath == "") {
    currPath = "home"
  }

  const bgTransparent = currPath?.includes("home") ?
    true : false;

  const isSM = useMedia({maxWidth: "768px"})

  return (
    <Row className='d-flex align-items-center justify-content-center'>
      <Col xs={12} style={{
        padding: 0,
        position: "relative",
        backgroundColor: "red",
        paddingLeft: isSM ? 0 : "4rem",
        paddingRight: isSM ? 0 : "4rem",
      }}>
        <Navbar collapseOnSelect expand="lg" className={bgTransparent
          ? 'navbar-main'
          : 'navbar-main-color'} style={{
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
                    <Link key={index} to={item.href} style={{
                      marginTop: "1rem"
                    }}><Nav.Link bsPrefix={currPath == item.href
                      ? 'nav-btn link-selected'
                      : 'nav-btn'} href={item.href}>{item.title}</Nav.Link></Link>
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