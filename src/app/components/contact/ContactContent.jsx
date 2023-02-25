import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

function ContactContent() {
    return (
        <Row className='d-flex align-items-center justify-content-center pb-3'>
            <Col xs={11} md={4} className="pb-3">
                <ContactInfo />
            </Col>
            <Col xs={11} md={6}>
                <ContactForm />
            </Col>
        </Row>
    )
}

export default ContactContent