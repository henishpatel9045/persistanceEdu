import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import MainNavbar from './app/components/navbar/MainNavbar'
import Footer from './app/components/Footer'
import Home from './app/pages/Home'
import AboutUS from './app/pages/AboutUS'
import OurCources from './app/pages/OurCources'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid style={{
          padding: "0",
        }}>
          <MainNavbar />
          <Switch>
            <Route path={["/", "/home"]} exact>
              <Home />
            </Route>
            <Route path={["/about"]} exact>
              <AboutUS />
            </Route>
            <Route path={["/cources"]} exact>
              <OurCources />
            </Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
