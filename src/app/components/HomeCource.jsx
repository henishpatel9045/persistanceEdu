import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import HomeCourceCard from './HomeCourceCard'
import SectionHeading from './SectionHeading'
import { ProgramData, SocialLinks } from '../data/data'
import CallBtnHome from './CallBtnHome'
import { HomeContext } from '../context/SiteContext'
import LinkModel from './LinkModel'
import { useMedia } from 'use-media'

function HomeCource() {
    const { courceData: progData } = useContext(HomeContext)
    const [show, setShow] = useState(false);
    const isSM = useMedia({ maxWidth: "768px" })
    const isGAPSupported = CSS.supports("gap: 1rem");

    return (
        <Row className='pt-5 pb-3'>
            <Row style={{
                alignItems: "center",
                marginBottom: "1rem",
                width: "100%",
                position: "relative",
            }} >
                <Col md={12} xs={12}>
                    <SectionHeading title={"Program IIT-JEE + NEET"} />
                </Col>
                <Col md={2} xs={12}>
                    <CallBtnHome onClick={() => setShow(!show)} />
                    <LinkModel show={show} setShow={setShow} phone={SocialLinks.tel} />
                </Col>
                {isSM && <br />}
            </Row>
            <Col xs={12} className="pb-5">
                <Row className='p-3' style={{
                    rowGap: "1rem",
                }}>
                    {progData?.map((item, index) => (
                        <Col key={index} md={4} style={{
                            minHeight: "20rem",
                            marginRight: isGAPSupported ? "0rem" : "1rem",
                            marginBottom: isGAPSupported ? "0rem" : "1rem",
                        }}>
                            <HomeCourceCard title={item.title} content={item.desc} href="http://www.google.com" />
                        </Col>))}
                </Row>
            </Col>
        </Row>
    )
}

export default HomeCource