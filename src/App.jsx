import { Container, NavItem, Row } from 'react-bootstrap'
import HomeHead from './app/components/HomeHead'
import MainNavbar from './app/components/navbar/MainNavbar'
import MAINBG from "./app/assets/main-bg.png"
import Footer from './app/components/Footer'
import Home from './app/pages/Home'

function App() {
  return (
    <div className="App">
      <Container fluid style={{
        padding: "0",
      }}>
        <MainNavbar />
        <Home/>
        <Footer />
      </Container>
    </div>
  )
}

export default App
