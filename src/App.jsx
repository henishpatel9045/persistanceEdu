import { Container, NavItem, Row } from 'react-bootstrap'
import HomeHead from './app/components/HomeHead'
import MainNavbar from './app/components/navbar/MainNavbar'

function App() {
  return (
    <div className="App">
        <Container fluid={true}>
          {/* <MainNavbar/> */}
          <HomeHead/>
        </Container>
    </div>
  )
}

export default App
