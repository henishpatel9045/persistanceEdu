import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import MainNavbar from './app/components/navbar/MainNavbar'
import Footer from './app/components/Footer'
import Home from './app/pages/Home'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid style={{
          padding: "0",
        }}>
          <MainNavbar />
          <Switch>
            <Route path="/" >
              <Home />
            </Route>
            {/* <Route path="/persistanceEdu/" exact>
              <Home />
            </Route>
            <Route path="/persistanceEdu/about">
              <AboutUS />
            </Route> */}
          </Switch>
          <Footer />
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
