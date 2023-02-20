import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { AResultsData } from '../../data/data'
import SectionHeading from '../SectionHeading'
import AResultCard from './AResultCard'

function AResults() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(AResultsData)
    }, [])

    return (
        <Row className='d-flex align-items-center justify-content-center'>
            <Col xs={12}>
                <SectionHeading title="Results" />
            </Col>
            <Col xs={12}>
                <Row>
                    {
                        data.map((item, index) => {
                            return <Row key={index} className="d-flex align-items-center justify-content-center p-5">
                                <Col xs={12} md={10} className="a-result-header pb-4">
                                    <h3>{item?.title}</h3>
                                    <h4>{item?.subtitle}</h4>
                                </Col>
                                <Row style={{
                                    rowGap: "1rem"
                                }}>
                                        {item.data.map((it, ind) => {
                                            return <Col key={ind} xs={12} md={6} lg={3}>
                                                <AResultCard image={it?.image}
                                                    name={it?.name}
                                                    title={it?.title}
                                                    subtitle={it?.subtitle} />
                                            </Col>
                                        }
                                        )}
                                </Row>
                            </Row>
                        })
                    }
                </Row>
            </Col>
        </Row>
    )
}

export default AResults