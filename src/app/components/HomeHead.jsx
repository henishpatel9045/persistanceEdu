import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HeaderIMG from './HeaderIMG'
import TextOpacityBG from './TextOpacityBG'
import "./components.scss"
import SUB from "../assets/header-sub.png";
import ButtonBase from './ButtonBase'
import MAINBG from "../assets/main-bg.png"

const Header = () => {
  return (
    <div className='header-text-container' style={{
    
    }}>
      <div className='header-main'>
        <h1 style={{ fontWeight: 600, lineHeight: "3.5rem", }}>
          Getting <TextOpacityBG left={true}>Quality</TextOpacityBG> <br />
          <TextOpacityBG>Education</TextOpacityBG> is now <br />
          more easy with us. <br />
        </h1>
          <div>
            <img src={SUB} alt="" />
          </div>
      </div>
      <ButtonBase title={"Join With Us"} />         
    </div>
  )
}


function HomeHead() {
  return (
    // <Container bsPrefix='home-header-container'>
      <Row className='main-bg' style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Col sm={{span: 12, order: "last"}} md={4}>
          <HeaderIMG />
        </Col>
        <Col sm={{span: 12, order: 'first'}} md={6}>
          <Header />
        </Col>
      </Row>
    // </Container>
  )
}

export default HomeHead