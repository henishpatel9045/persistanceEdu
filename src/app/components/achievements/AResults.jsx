import React, { useState, useEffect, useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useMedia } from 'use-media'
import { AchievementsContext } from '../../context/SiteContext'
import { AResultsData } from '../../data/data'
import SectionHeading from '../SectionHeading'
import AResultCard from './AResultCard'

function AResults() {
    const { rData: data } = useContext(AchievementsContext);
    const isSM = useMedia({maxWidth: "768px"})

    return (
        <Row className='d-flex align-items-center justify-content-center' style={{
            paddingBottom: isSM ? "6rem" : "2rem",
        }}>
            <Col xs={12}>
                <SectionHeading title="Results" />
            </Col>
            <Col xs={12}>
                <Row>
                    <Col xs={12}>
                        {
                            data?.map((item, index) => {
                                return <Row key={index} className="d-flex align-items-center justify-content-center p-md-5">
                                    <Col xs={12} md={10} className="a-result-header pb-4">
                                        <h3>{item?.title}</h3>
                                        <h4>{item?.subtitle}</h4>
                                    </Col>
                                    <Row style={{
                                        rowGap: "1rem"
                                    }}>
                                        {item.data?.map((it, ind) => {
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
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AResults