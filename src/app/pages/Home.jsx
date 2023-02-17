import React from 'react'
import HomeHead from '../components/HomeHead'
import { Container } from 'react-bootstrap'
import "../components/components.scss"
import HCardsCompo from '../components/HCardsCompo'
import OurResults from '../components/OurResults'

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
            <OurResults/>
        </>
    )
}

export default Home