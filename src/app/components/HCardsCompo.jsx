import React, { useContext } from 'react'
import HCard from './HCard'
import { Row, Col } from 'react-bootstrap'
import { HomeContext } from '../context/SiteContext'

function HCardsCompo() {
    const {cardsData:data} = useContext(HomeContext)

    return (
        <Row className='h-card-main m-0 pt-5' style={{ padding: "4rem 1rem", rowGap: "1rem" }}>
            {data?.map((item, index) => {
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