import React from 'react'
import "../components/components.scss"
import { Container } from 'react-bootstrap'
import HomeHead from '../components/HomeHead'

function AboutUS() {
    return (
        <>
            <Container fluid className='main-bg' style={{
                padding: "0",
                margin: "0",
            }}>
                <HomeHead />
            </Container>
        </>
    )
}

export default AboutUS