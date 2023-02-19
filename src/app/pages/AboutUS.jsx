import React from 'react'
import "../components/components.scss"
import { Container } from 'react-bootstrap'
import HomeHead from '../components/HomeHead'
import AboutHeader from '../components/about/AboutHeader'
import AboutUsSection from '../components/about/AboutUsSection'

function AboutUS() {
    return (
        <>
            <Container fluid className='main-bg' style={{
                padding: "0",
                margin: "0",
            }}>
                <AboutHeader />
            </Container>
            <AboutUsSection/>
        </>
    )
}

export default AboutUS