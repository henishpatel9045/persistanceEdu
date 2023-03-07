import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SectionHeading from '../SectionHeading'
import TCard from "./TCard"
import "../components.scss"

function TSection({ data }) {
    return (
        <Row className='d-flex align-items-center justify-content-center p-5'>
            <Col xs={12} className="pt-5">
                <SectionHeading title="What Our Students Say About Us" />
            </Col>
            <Col xs={12} md={10} className='d-flex align-items-center justify-content-center pt-4 pb-xxl-3'>
                <Row style={{
                    rowGap: "3rem",
                }}>
                    {data?.map((item, index) => {
                        return (
                            <Col xs={12} md={4} key={index}>
                                <TCard image={item.image}
                                    content={item.content}
                                    name={item.name}
                                    subtitle={item.subtitle}
                                />
                            </Col>
                        )
                    })
                    }
                </Row>
            </Col>

        </Row>
    )
}

export default TSection