import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { api } from '../api/call'
import AchieveHeader from '../components/achievements/AchieveHeader'
import AResults from '../components/achievements/AResults'
import { AchievementsContext } from '../context/SiteContext'
import { AchievementsData, AResultsData } from '../data/data'

function Achievements() {
  const [rJEEData, setRJEEData] = useState([])
  const [rNEETData, setRNEETData] = useState([])
  const [aData, setAData] = useState([])

  useEffect(() => {
    api.get("results").then(res => {
      if (res.ok) {
        setRJEEData(res.data.jee_results)
        setRNEETData(res.data.neet_results)
        setAData(res.data.aCards)
      } else {
        setRJEEData([]);
        setRNEETData([]);
        setAData(AchievementsData)
      }
    }).catch(err => {
      setRJEEData([]);
      setRNEETData([]);
      setAData(AchievementsData)
    })
  }, [])


  return (
    <AchievementsContext.Provider value={{ rJEEData, rNEETData, aData }}>
      <Container className='pt-5' fluid style={{
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