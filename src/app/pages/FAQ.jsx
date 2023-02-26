import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FAQSection from '../components/faq/FAQSection'

function FAQ() {
  return (
    <Row className='pt-5 pb-5'>
      <Col xs={12}>
        <FAQSection />
      </Col>
    </Row>
  )
}

export default FAQ