import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Login from './components/Login.js'
import Registration from './components/Registration'
import Travel from './components/Travel'
function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Showcase />
          <Destinations />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/registration'>
        <Registration />
        </Route>
        <Route path='/travel'>
        <Travel />
        </Route>
        
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
