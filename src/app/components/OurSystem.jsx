import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SectionHeading from './SectionHeading'
import SALL from "../assets/sys-lg.svg"


// const systemData = [
//     {
//         img: 
//     }
// ]

function OurSystem() {

    return (
        <Row style={{
            backgroundColor: "white"
        }}>
            <Col xs={12}>
                <SectionHeading title={"Our System"} />
            </Col>
            <Col xs={12}>
                <div className='system-content-container'>
                    <img src={SALL} srcset="" />
                </div> 
            </Col>
        </Row>
    )
}

export default OurSystem