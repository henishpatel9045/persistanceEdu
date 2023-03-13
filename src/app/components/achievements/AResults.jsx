import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useMedia } from 'use-media'
import { AchievementsContext } from '../../context/SiteContext'
import SectionHeading from '../SectionHeading'
import AResultCard from './AResultCard'

import NOIMG from "../../assets/res-no-img.png"

function AResults() {
    const { rJEEData: jeeData, rNEETData: neetData } = useContext(AchievementsContext);
    const isSM = useMedia({ maxWidth: "768px" })
    const isBG = useMedia({ minWidth: "1920px" })

    return (
        <Row className='d-flex align-items-center justify-content-center' style={{
            paddingBottom: isSM ? "6rem" : "2rem",
            
        }}>
            {jeeData?.length && <>
                <Col xs={12}>
                    <SectionHeading title="JEE" />
                </Col>
                <Col xs={12} >
                    <Row>
                        <Col xs={12}>
                            {
                                jeeData?.map((item, index) => {
                                    return <Row key={index} className="d-flex align-items-center justify-content-center p-md-5">
                                        <Col xs={12} md={10} className="a-result-header pb-1">
                                            <h3>{item?.title}</h3>
                                            <h4>{item?.subtitle}</h4>
                                        </Col>
                                        <Row style={{
                                            rowGap: "1rem"
                                        }}>
                                            {item.data?.map((it, ind) => {
                                                return <Col key={ind} xs={4} xxl={2} lg={3}>
                                                    <AResultCard image={it?.image ? it.image : NOIMG}
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
            </>}
            {neetData?.length && <>
                <Col xs={12}>
                    <SectionHeading title="NEET" />
                </Col>
                <Col xs={12}>
                    <Row>
                        <Col xs={12}>
                            {
                                neetData?.map((item, index) => {
                                    return <Row key={index} className="d-flex align-items-center justify-content-center p-md-5">
                                        <Col xs={12} md={10} className="a-result-header pb-4">
                                            <h3>{item?.title}</h3>
                                            <h4>{item?.subtitle}</h4>
                                        </Col>
                                        <Row style={{
                                            rowGap: "1rem"
                                        }}>
                                            {item.data?.map((it, ind) => {
                                                return <Col key={ind} xs={12} xxl={2} md={6} lg={3}>
                                                    <AResultCard image={it?.image ? it.image : NOIMG}
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
            </>}
        </Row>
    )
}

export default AResults