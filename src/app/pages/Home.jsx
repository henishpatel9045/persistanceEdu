import React, { useEffect, useState } from 'react'
import HomeHead from '../components/HomeHead'
import { Container } from 'react-bootstrap'
import "../components/components.scss"
import HCardsCompo from '../components/HCardsCompo'
import OurResults from '../components/OurResults'
import OurSystem from '../components/OurSystem'
import HomeCource from '../components/HomeCource'
import { HomeContext } from '../context/SiteContext'
import { OurResultsData, ProgramData, HomeCards, HomeCarouselImage } from '../data/data'
import { api } from '../api/call'

function Home() {
    const [cardsData, setCardsData] = useState([])
    const [carouImageData, setCarouImageData] = useState([])
    const [resultsData, setResultsData] = useState([])
    const [courceData, setCourceData] = useState([])

    useEffect(() => {
        api.get("home").then(res => {
            if (res.ok) {
                setCardsData(res.data.cards)
                setCarouImageData(res.data.carouselImage)
                setCourceData(res.data.programs)
                setResultsData(res.data.results)
            } else {
                setCardsData(HomeCards);
                setCarouImageData(HomeCarouselImage);
                setCourceData(ProgramData);
                setResultsData(OurResultsData);
            }
        }).catch(err => {
            setCardsData(HomeCards);
            setCarouImageData(HomeCarouselImage);
            setCourceData(ProgramData);
            setResultsData(OurResultsData);
        })
    }, [])

    return (
        <HomeContext.Provider value={{
            cardsData,
            carouImageData, setCarouImageData,
            resultsData,
            courceData
        }}>
            <Container fluid className='main-bg-trans' style={{
                padding: "0",
                margin: "0",
            }}>
                <HomeHead />
            </Container>
            <HCardsCompo />
            <OurResults />
            <OurSystem />
            <HomeCource />
        </HomeContext.Provider>
    )
}

export default Home
