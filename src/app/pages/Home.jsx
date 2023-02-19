import React from 'react'
import HomeHead from '../components/HomeHead'
import { Container } from 'react-bootstrap'
import "../components/components.scss"
import HCardsCompo from '../components/HCardsCompo'
import OurResults from '../components/OurResults'
import OurSystem from '../components/OurSystem'
import HomeCource from '../components/HomeCource'
import AboutHeader from '../components/about/AboutHeader'

function Home() {
    return (
        <>
            <Container fluid className='main-bg' style={{
                padding: "0",
                margin: "0",
            }}>
                {/* <HomeHead /> */}
                <AboutHeader/>
            </Container>
            <HCardsCompo/>
            <OurResults/>
            <OurSystem/>
            <HomeCource/>
        </>
    )
}

export default Home
