import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SectionHeading from './SectionHeading'
import S1 from "../assets/sys-1.svg"
import S2 from "../assets/sys-2.svg"
import S3 from "../assets/sys-3.svg"
import S4 from "../assets/sys-4.svg"
import S5 from "../assets/sys-5.svg"
import SALL from "../assets/sys-lg.svg"
import DIVIDER from "../assets/divider.svg"
import { useMedia } from 'use-media'


// const systemData = [
//     {
//         img: 
//     }
// ]

const CardDivider = () => {
    return <div className='card-divider'>
        <img src={DIVIDER} />
    </div>
}

function OurSystem() {
    const isLG = useMedia({ minWidth: "768px" })

    return (
        <Row style={{
            backgroundColor: "white",
        }} className="pt-5">
            <Col xs={12}>
                <SectionHeading title={"Our System"} />
            </Col>
            <Col xs={12}>
                <div className='system-content-container'>
                    {isLG
                        ? <img src={SALL} />
                        : <>
                            <img src={S1} alt="" />
                            <CardDivider />
                            <img src={S3} alt="" />
                            <CardDivider />
                            <img src={S2} alt="" />
                            <CardDivider />
                            <img src={S4} alt="" />
                            <CardDivider />
                            <img src={S5} alt="" />
                        </>}

                </div>
            </Col>
        </Row>
    )
}

export default OurSystem