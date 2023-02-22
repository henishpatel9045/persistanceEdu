import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import AchieveHeader from '../components/achievements/AchieveHeader'
import AResults from '../components/achievements/AResults'
import { AchievementsContext } from '../context/SiteContext'
import { AchievementsData, AResultsData } from '../data/data'

function Achievements() {
  const [rData, setRData] = useState([])
  const [aData, setAData] = useState([])

  useEffect(() => {
    setRData(AResultsData)
    setAData(AchievementsData)
  }, [])

  return (
    <AchievementsContext.Provider value={{ rData, aData }}>
      <Container fluid style={{
        padding: "0",
        margin: "0",
      }}>
        <AchieveHeader />
      </Container>
      <AResults />
    </AchievementsContext.Provider>
  )
}

export default Achievements