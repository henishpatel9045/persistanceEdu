import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

function ContactContent() {
    return (
        <Row className='d-flex align-items-center justify-content-center pb-5'>
            <Col xs={11} md={4} className="pb-3">
                <ContactInfo />
            </Col>
            <Col xs={11} md={6} className="pb-3">
                <ContactForm />
            </Col>
        </Row>
    )
}

export default ContactContent