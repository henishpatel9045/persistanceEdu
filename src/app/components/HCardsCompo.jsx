import React, { useState } from 'react'
import HCard from './HCard'
import { Row, Col } from 'react-bootstrap'

function HCardsCompo() {
    const [data, setData] = useState([
        {
            title: "HCard 1",
        },
        {
            title: "HCard 2",
        },
        {
            title: "HCard 3",
        },
    ])
    return (
        <Row className='h-card-main m-0' style={{ padding: "4rem 1rem", rowGap: "1rem" }}>
            {data.map((item, index) => {
                return (
                    <Col className='' xs={12} sm={12} md={4}>
                        <HCard key={index} title={item.title} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default HCardsCompo