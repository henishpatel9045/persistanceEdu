import React from 'react'
import { Row, Col } from 'react-bootstrap'

import BGCompo from './BGCompo'
import HeaderIMG from './HeaderIMG'
import "./components.scss";

import { HomeCarouselImage } from '../data/data'
import AboutCarousel from './about/AboutCarousel';
import { useMedia } from 'use-media';

function HeaderBase({Header, stars=true, about=false, bg=false, style={}}) {

  const isSM = useMedia({ maxWidth: '768px' })
  
  return (
    <Row className={bg ? "main-bg" : "main-bg-trans"} style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: "1",
        paddingTop: "8rem",
        paddingLeft: isSM ? 0 : "4rem",
        paddingRight: isSM ? 0 : "4rem",
        paddingBottom: "2rem",
        ...style
      }}>
        <BGCompo stars={stars} show={bg} />
        <Col sm={{ span: 12, order: "last" }} md={6} >
          {about ? <AboutCarousel data={HomeCarouselImage} /> : <HeaderIMG data={HomeCarouselImage} />}
        </Col>
        <Col sm={{ span: 12, order: 'first' }} md={about ? 5 : 6}>
          <Header />
        </Col>
      </Row>
  )
}

export default HeaderBase