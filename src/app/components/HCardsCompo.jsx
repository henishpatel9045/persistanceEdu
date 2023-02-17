import React, { useEffect, useState } from 'react'
import HCard from './HCard'
import { Row, Col } from 'react-bootstrap'
import { HomeCards } from '../data/data'

function HCardsCompo() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(HomeCards)
    }, [])


    return (
        <Row className='h-card-main m-0' style={{ padding: "4rem 1rem", rowGap: "1rem" }}>
            {data.map((item, index) => {
                return (
                    <Col key={index} className='' xs={12} sm={12} md={4}>
                        <HCard title={item.txt} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default HCardsCompo