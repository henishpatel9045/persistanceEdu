import React, { useEffect } from 'react'
import { Col, Container, Navbar, Nav, Row } from 'react-bootstrap'
import "./navbar.scss";
import LOGO from "../../assets/Logo.svg";
import { useMedia } from 'use-media';
import { Link, useLocation } from 'react-router-dom';
import { SitePages } from "../../data/data"

function MainNavbar() {
  const items = SitePages;
  let currPath = useLocation().pathname?.replace("/", "");
  if (currPath == "") {
    currPath = "home"
  }
  currPath = currPath.replace("/", "");

  // useEffect(() => {
  //   document.title = `PersistanceEdu - ${currPath}`
  // }, [currPath])

  const bgTransparent = currPath?.includes("home") ?
    true : false;

  const isSM = useMedia({ maxWidth: "768px" })
  const isLG = useMedia({ maxWidth: "1400px" })

  return (
    <Row className='d-flex align-items-center justify-content-center' style={{
      zIndex: 15,
      position: "absolute",
      top: 0,
      left: 0,
      margin: 0,
      width: "100vw",
      padding: 0
    }}>
      <Col xs={12} style={{
        padding: 0,
        position: "relative",
        // paddingLeft: isSM ? 0 : "4rem",
        // paddingRight: isSM ? 0 : "6rem",
      }}>
        <Navbar collapseOnSelect expand="lg" className={bgTransparent
          ? 'navbar-main'
          : 'navbar-main-color'} style={{

          }} >
          <Container fluid style={{
            paddingLeft: isSM ? "1rem" : "3.5rem"
          }}>
            <Link to="home"><img src={LOGO} alt="Logo" className='main-logo' /></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" id='nav-toggle-btn' />
            <Navbar.Collapse id="responsive-navbar-nav" className='nav-container'>
              {/* <Nav className="me-auto">
              </Nav> */}
              <Nav 
              style={{
                minWidth: "100%", 
                paddingLeft: isLG ? "5%" : "20%",
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
              }}>
                {
                  items?.map((item, index) => (
                    <Link key={index} to={item.href}
                      className={currPath == item.href
                        ? 'nav-btn link-selected'
                        : 'nav-btn'} style={{
                          height: "100%"
                        }}>{item.title}</Link>
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