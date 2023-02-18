import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'

import { Container, NavItem, Row } from 'react-bootstrap'
import HomeHead from './app/components/HomeHead'
import MainNavbar from './app/components/navbar/MainNavbar'
import MAINBG from "./app/assets/main-bg.png"
import Footer from './app/components/Footer'
import Home from './app/pages/Home'
import AboutUS from './app/pages/AboutUS'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid style={{
          padding: "0",
        }}>
          <MainNavbar />
          <Switch>
            <Route path="/persistanceEdu/home" exact>
              <Home />
            </Route>
            <Route path="/persistanceEdu/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <AboutUS />
            </Route>
          </Switch>
          <AboutUS />
          <Footer />
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
