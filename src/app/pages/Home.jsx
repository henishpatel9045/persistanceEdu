import React from 'react'
import HomeHead from '../components/HomeHead'
import { Container } from 'react-bootstrap'
import "../components/components.scss"
import HCardsCompo from '../components/HCardsCompo'

function Home() {
    return (
        <>
            <Container fluid className='main-bg' style={{
                padding: "0",
                margin: "0",
            }}>
                <HomeHead />
            </Container>
            <HCardsCompo/>
        </>
    )
}

export default Home