import React from 'react'
import { Route } from 'react-router'
import Login from './components/Login'
import './custom.css'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
    </div>
  )
}

export default App