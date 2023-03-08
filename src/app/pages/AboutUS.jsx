import React, { useEffect, useState } from 'react'
import "../components/components.scss"
import { Container } from 'react-bootstrap'
import AboutHeader from '../components/about/AboutHeader'
import AboutUsSection from '../components/about/AboutUsSection'
import VideoSection from '../components/about/VideoSection'
import Criteria from '../components/about/Criteria'
import { api } from '../api/call'
import { HomeCarouselImage } from '../data/data'
import { AboutContext } from '../context/SiteContext'
import Journey from '../components/about/Journey'

function AboutUS() {
    const [carouImageData, setCarouImageData] = useState([])

    useEffect(() => {
        api.get("about").then(res => {
            if (res.ok) {
                setCarouImageData(res.data?.carouselImage)
            } else {
                setCarouImageData(HomeCarouselImage);
            }
        }).catch(err => {
            setCarouImageData(HomeCarouselImage);
        })
    }, [])

    return (
        <AboutContext.Provider value={{ carouImageData }}>
            {/* <Container fluid className='main-bg-trans' style={{
                padding: "0",
                margin: "0",
            }}>
                <AboutHeader />
            </Container> */}
            <AboutUsSection />
            <Journey />
            <VideoSection />
            <Criteria />
        </AboutContext.Provider>
    )
}

export default AboutUS