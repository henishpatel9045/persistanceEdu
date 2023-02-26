import React, { useEffect, useState } from 'react'
import { Row, Col, Accordion } from 'react-bootstrap'
import { CriteriaData } from '../../data/data'
import SectionHeading from '../SectionHeading'

function Criteria() {

    const [criteriaData, setCriteriaData] = useState([])

    useEffect(() => {
        setCriteriaData(CriteriaData);
    }, [])

    return (
        <Row className='d-flex flex-column align-items-center justify-content-center pt-5 p-3'>
            <Col xs={12}>
                <SectionHeading title="Criteria To Choose an institute" />
                <div
                    style={{
                        color: "#888888",
                        fontWeight: 400,
                        fontSize: "1rem",
                        textAlign: "center"
                    }}
                    className="pt-4"
                >Confused about many coaching institutes? Just check these points…</div>
            </Col>
            <Col xs={12} className="pt-1 pb-5">
                <Accordion>
                    {criteriaData?.map((item, index) => {
                        return (
                            <Accordion.Item eventKey={`${index}`} key={index}>
                                <Accordion.Header style={{color: "#3D3D3D", fontWeight: 400}} >{index+1}. {item.title}</Accordion.Header>
                                <Accordion.Body style={{
                                    color: "#888888"
                                }}>
                                    {item.desc}
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
            </Col>
        </Row>
    )
}

export default Criteria