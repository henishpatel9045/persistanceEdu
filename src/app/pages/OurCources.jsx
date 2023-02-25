import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { api } from '../api/call'

import CourceHead from '../components/cources/CourceHead'
import CourceSection from '../components/cources/CourceSection'
import { CourceData } from '../data/data'

function OurCources() {
  const [courceData, setCourceData] = useState([])

  useEffect(() => {
    api.get("cource").then(res => {
      if (res.ok) {
        setCourceData(res.data.cource)
      } else {
        setCourceData(CourceData);
      }
    }).catch(err => {
      setCourceData(CourceData);
    })
  }, [])

  return (
    <Row className='pb-3'>
      <Col xs={12}>
        <Container fluid className='main-bg-trans' style={{
          padding: "0",
          margin: "0",
        }}>
          <CourceHead />
        </Container>
        {courceData?.map((item, index) => {
          return <CourceSection
            key={index}
            title={item.title}
            image={item.image}
            desc={item.content}
            left={index % 2 == 0}
          />
        })}
      </Col>
    </Row>
  )
}

export default OurCources