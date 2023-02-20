import React from 'react'
import { Container} from 'react-bootstrap'
import AchieveHeader from '../components/achievements/AchieveHeader'
import AResults from '../components/achievements/AResults'

function Achievements() {

  return (
    <>
      <Container fluid style={{
        padding: "0",
        margin: "0",
      }}>
        <AchieveHeader />
      </Container>
      <AResults/>
    </>
  )
}

export default Achievements