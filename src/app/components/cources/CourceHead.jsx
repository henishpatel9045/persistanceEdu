import React from 'react'
import { Row, Col } from 'react-bootstrap'

import COMA from "../../assets/coma.svg"
import TextOpacityBG from '../TextOpacityBG'
import "../components.scss"

function CourceHead() {
    return (
        <Row className='pt-5' >
            <Col xs={12} className="pt-5">
                <Row className='cources-head pt-5' style={{
                    position: "relative",
                }}>
                    <div>
                        <img src={COMA} alt="coma svg" className='coma' />
                        <h1>
                            <TextOpacityBG left={true} className="pt-2 pb-2 ps-2" style={{ paddingLeft: "2rem" }}>
                                Your Success, <wbr></wbr>Our Passion!!
                            </TextOpacityBG>
                        </h1>
                    </div>
                    <p>
                        When a Sports person creates a new record, the person is cherished & congratulated. Behind the person stands an excellent trainer, a coach, who taught and perfected the person at every step on the journey of success, because “Every war is won in its preparation.”
                    </p>
                </Row>
            </Col>
        </Row>
    )
}

export default CourceHead