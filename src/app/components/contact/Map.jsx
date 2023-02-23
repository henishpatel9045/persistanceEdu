import React from 'react'
import { Row, Col } from 'react-bootstrap'
import "../components.scss"
import MAP from "../../assets/map.svg"


function Map() {
  return (
    <Row className='d-flex align-items-center justify-content-center p-md-5'>
      <Col xs={12} md={10} className="pt-5">
        <div className='g-map'>
          <img src={MAP} alt="Map location" />
        </div>
      </Col>
    </Row>
  )
}

export default Map
