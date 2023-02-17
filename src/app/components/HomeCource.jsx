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
        <Row style={{
            marginTop: "2rem"
        }}>
            <Col xs={12}>
                <SectionHeading title={"Program IIT-JEE + NEET"} />
            </Col>
            <Col xs={12} >
                <Row>
                    <Col xs={12}>
                        <CallBtnHome tel={SocialLinks.tel}/>
                    </Col>
                </Row>
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