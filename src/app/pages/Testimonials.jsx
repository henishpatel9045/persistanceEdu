import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { api } from '../api/call'
import TSection from '../components/testimonials/TSection'
import { TestimonialData } from '../data/data'

function Testimonials() {
    const [tData, setTData] = useState([])
    useEffect(() => {
        api.get("testimonial").then(res => {
            if (res.ok) {
                setTData(res.data.testimonial)
            } else {
                setTData(TestimonialData);
            }
        }).catch(err => {
            setTData(TestimonialData);
        })
    }, [])

    return (
        <Row className=''>
            <Col xs={12}>
                <TSection data={tData} />
            </Col>
        </Row>
    )
}

export default Testimonials