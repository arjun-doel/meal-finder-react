import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './component/main/Home'
import Navigation from './component/main/Navigation'
import Favourites from './component/main/Favourites'

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Navigation />

        <Switch>

          <Route path="/favourites">
            <Favourites />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </BrowserRouter>
    </>
  )
}

export default App
