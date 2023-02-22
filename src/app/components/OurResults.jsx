import React, { useState, useEffect, useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import SectionHeading from './SectionHeading'
import { OurResultsData } from '../data/data'
import ResultsCard from './ResultsCard';
import { HomeContext } from '../context/SiteContext';

function OurResults() {
    const { resultsData } = useContext(HomeContext)

    return (
        <Row className='our-results-main p-0 pt-5'>
            <Col xs={12}>
                <SectionHeading title={"Our Results"} />
            </Col>
            <Col xs={12} style={{
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div className='results-content-container'>
                    <div className='our-results-content-container'>
                        {resultsData?.slice(0, Math.ceil(resultsData?.length / 2))?.map((item, index) => {
                            return (
                                <ResultsCard key={index} title={item.title} />
                            )
                        })}
                    </div>
                    <br />
                    <div className='our-results-content-container'>
                        {resultsData?.slice(Math.ceil(resultsData?.length / 2), resultsData?.length)?.map((item, index) => {
                            return (
                                <ResultsCard key={index} title={item.title} />
                            )
                        })}
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default OurResults