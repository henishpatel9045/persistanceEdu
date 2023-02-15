import { Container, Row } from 'react-bootstrap'
import AnimatedBG from './app/components/AnimatedBG'
import ButtonBase from './app/components/ButtonBase'
import TextOpacityBG from './app/components/TextOpacityBG'
import Pagination from './app/components/Pagination'
import HeaderIMG from './app/components/HeaderIMG'
import HomeHead from './app/components/HomeHead'

function App() {
  return (
    <div className="App">
      <AnimatedBG>
        <Container>
          <Row>
            <HomeHead/>
          </Row>
        </Container>
      </AnimatedBG>
    </div>
  )
}

export default App
