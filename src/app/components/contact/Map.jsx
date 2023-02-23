import React from 'react'
import { Row, Col } from 'react-bootstrap'
import "../components.scss"
import MAP from "../../assets/map-loc.png"
import { SocialLinks } from '../../data/data'


function Map() {
  return (
    <Row className='d-flex align-items-center justify-content-center p-md-5'>
      <Col xs={12} md={10} className="d-flex align-items-center justify-content-center">
        <div className='g-map d-flex align-items-center justify-content-center'>
          <img src={MAP} alt="Map location" />
          <a href={SocialLinks.map} target="_blank" className='pointer'>{" "}</a>
        </div>
      </Col>
    </Row>
  )
}

export default Map
