import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import HomeCourceCard from './HomeCourceCard'
import SectionHeading from './SectionHeading'
import { ProgramData, SocialLinks } from '../data/data'
import CallBtnHome from './CallBtnHome'

function HomeCource() {
    const [progData, setProgData] = useState([]);

    useEffect(() => {
        setProgData(ProgramData);
    }, [])

    return (
        <Row className='pt-5'>
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
                    <CallBtnHome tel={SocialLinks.tel} />
                </Col>
            </Row>
            <Col xs={12} >
                <Row className='p-5' style={{
                    rowGap: "1rem"
                }}>
                    {progData.map((item, index) => (
                        <Col key={index} md={4} style={{
                            minHeight: "20rem",
                        }}>
                            <HomeCourceCard title={item.title} content={item.content} href="http://www.google.com" />
                        </Col>))}
                </Row>
            </Col>
        </Row>
    )
}

export default HomeCource