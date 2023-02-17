import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import SectionHeading from './SectionHeading'
import { OurResultsData } from '../data/data'
import ResultsCard from './ResultsCard';

function OurResults() {

    const [resultsData, setResultsData] = useState([]);

    useEffect(() => {
        setResultsData(OurResultsData)
    }, [])

    return (
        <Row className='our-results-main p-0'>
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
                        {resultsData.slice(0, Math.ceil(resultsData.length / 2)).map((item, index) => {
                            return (
                                <ResultsCard key={index} title={item.title} />
                            )
                        })}
                    </div>
                    <br />
                    <div className='our-results-content-container'>
                        {resultsData.slice(Math.ceil(resultsData.length / 2), resultsData.length).map((item, index) => {
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