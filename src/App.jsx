import { Container, NavItem, Row } from 'react-bootstrap'
import HomeHead from './app/components/HomeHead'
import MainNavbar from './app/components/navbar/MainNavbar'
import MAINBG from "./app/assets/main-bg.png"
import Footer from './app/components/Footer'

function App() {
  return (
    <div className="App">
        <Container fluid style={{
          padding: "0",
        }}>
          <Container fluid className='main-bg' style={{
            padding: "0",
            margin: "0",
          }}>
            <MainNavbar/>
            <HomeHead/>
            <img src={MAINBG} className="main-bg-img" />
          </Container>
          <Footer/>
        </Container>
    </div>
  )
}

export default App
