import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SectionHeading from '../SectionHeading'

function Journey() {
  return (
    <Row className='d-flex align-items-center justify-content-center p-3'>
        <Col xs={12}>
            <SectionHeading title={"Journey of Persistence"} />
        </Col>
        <Col xs={11}>
            <p></p>
        </Col>
    </Row>
  )
}

export default Journey