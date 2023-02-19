import React from 'react'
import { Row, Col } from 'react-bootstrap'
import HeaderIMG from './HeaderIMG'
import TextOpacityBG from './TextOpacityBG'
import "./components.scss"
import SUB from "../assets/header-sub.png";
import ButtonBase from './ButtonBase'
import ROTATE from "../assets/heading-vec.svg"
import BGCompo from './BGCompo'
import { SocialLinks } from '../data/data'

const Header = () => {
  return (
    <div className='header-text-container' style={{

    }}>
      <div className='header-main'>
        <h1 style={{ fontWeight: 600, lineHeight: "3.5rem", }}>
          Getting <TextOpacityBG left={true}>Quality</TextOpacityBG> <br />
          <TextOpacityBG>Education</TextOpacityBG> is now <br />
          more easy with us. <br />
          <img src={ROTATE} className="heading-pic" />
        </h1>
        <div>
          <img src={SUB} alt="" />
        </div>
      </div>
      <ButtonBase title={"Join With Us"} href={`tel:${SocialLinks.tel}`} />
    </div>
  )
}

function HomeHead() {
  return (
    <Row className='main-bg' style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "1",
      paddingTop: "8rem"
    }}>
    {/* <img src={MAINBG} className="main-bg-img" /> */}
    <BGCompo />
      <Col sm={{ span: 12, order: "last" }} md={5} >
        <HeaderIMG />
      </Col>
      <Col sm={{ span: 12, order: 'first' }} md={5}>
        <Header />
      </Col>
    </Row>
  )
}

export default HomeHead