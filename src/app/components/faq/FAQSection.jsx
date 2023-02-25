import React, { useState, useEffect } from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FAQData } from '../../data/data'
import SectionHeading from '../SectionHeading'
import "../components.scss"

function FAQSection() {
    const [data, setData] = useState([])
    const [open, setOpen] = useState(null)

    useEffect(() => {
        setData(FAQData)
    }, [])

    return (
        <Row className='d-flex align-items-center justify-content-center pt-5 pb-3'>
            <Col className='pt-5' xs={12}>
                <SectionHeading title="Frequently asked question" />
            </Col>
            <Col xs={11} md={10} className="pt-5">
                <Accordion>
                    {data?.map((item, index) => {
                        return <Accordion.Item key={index} eventKey={index} onClick={() => setOpen(open == index ? null : index)}>
                            <Accordion.Header style={{
                                backgroundColor: open == index ? "#1681AB !important" : "red",
                            }} >{index + 1}. {item.question}</Accordion.Header>
                            <Accordion.Body>
                                {item.ans}
                            </Accordion.Body>
                        </Accordion.Item>
                    })}
                </Accordion>
            </Col>
            <Col xs={12} className='d-flex align-items-center justify-content-center'>
                <span className='faq-contact-link'>
                    Still have a question? <Link to={"contact"}>Ask your question here</Link>
                </span>
            </Col>
        </Row>
    )
}

export default FAQSection