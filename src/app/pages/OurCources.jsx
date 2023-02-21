import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

import CourceHead from '../components/cources/CourceHead'
import CourceSection from '../components/cources/CourceSection'
import { CourceData } from '../data/data'

function OurCources() {
  const [courceData, setCourceData] = useState([])

  useEffect(() => {
    setCourceData(CourceData);
  }, [])

  return (
    <>
      <Container fluid className='main-bg-trans' style={{
        padding: "0",
        margin: "0",
      }}>
        <CourceHead />
      </Container>
      {courceData.map((item, index) => {
        return <CourceSection
          key={index}
          title={item.title}
          image={item.image}
          desc={item.content}
          left={index % 2 == 0}
        />
      })}
    </>
  )
}

export default OurCources