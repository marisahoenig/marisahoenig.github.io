import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Header } from '..'
import { About } from '../../pages'


export const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path={['/', '/about']} component={About} />
      </Router>
    </div>
  )
}

export default App
