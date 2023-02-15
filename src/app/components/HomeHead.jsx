import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HeaderIMG from './HeaderIMG'

const Header = () => {
    
}

 
function HomeHead() {
  return (
    <Container>
        <Row>
            <Col sm={12} md={8}>
                <div className="home-header"></div>    
            </Col>
            <Col sm={12} md={4}>
                <HeaderIMG/>
            </Col>
        </Row>
    </Container>
  )
}

export default HomeHead