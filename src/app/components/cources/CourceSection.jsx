import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SectionHeading from '../SectionHeading'

import "../components.scss";

function CourceSection({ title, image, desc, left = false }) {
    return (
        <Row className='pt-5'>
            <Col xs={12}>
                <SectionHeading title={title} />
            </Col>
            <Col xs={12}>
                <Row className='pt-2 align-items-start justify-content-center'>
                    <Col xs={{ span: 10, order: "first" }} md={{ span: 3, order: left ? "first" : "last" }} className=''>
                        <img style={{
                            width: "100%",
                            height: "auto",
                        }} src={image} alt={title} />
                    </Col>
                    <Col xs={{ span: 10, order: "first" }} md={{ span: 6, order: left ? "last" : "first" }} className='d-flex flex-column align-items-center cource-content'>
                        {desc.map((item, ind) => <p style={{
                            color: "#3D3D3D",
                            fontWeight: 400,
                        }} key={ind}>{item}</p>)}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default CourceSection