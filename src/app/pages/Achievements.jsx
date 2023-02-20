import React from 'react'
import { Container} from 'react-bootstrap'
import AchieveHeader from '../components/achievements/AchieveHeader'

function Achievements() {

  return (
    <>
      <Container fluid style={{
        padding: "0",
        margin: "0",
      }}>
        <AchieveHeader />
      </Container>
    </>
  )
}

export default Achievements