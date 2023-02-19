import React from 'react'
import { Row, Col } from 'react-bootstrap'

import BGCompo from './BGCompo'
import HeaderIMG from './HeaderIMG'
import "./components.scss";

import { HomeCarouselImage } from '../data/data'
import AboutCarousel from './about/AboutCarousel';

function HeaderBase({Header, stars=true, about=false}) {
  return (
    <Row className='main-bg' style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1",
        paddingTop: "8rem"
      }}>
      {/* <img src={MAINBG} className="main-bg-img" /> */}
      <BGCompo stars={stars} />
        <Col sm={{ span: 12, order: "last" }} md={5} >
          {about ? <AboutCarousel data={HomeCarouselImage} /> : <HeaderIMG data={HomeCarouselImage} />}
        </Col>
        <Col sm={{ span: 12, order: 'first' }} md={5}>
          <Header />
        </Col>
      </Row>
  )
}

export default HeaderBase