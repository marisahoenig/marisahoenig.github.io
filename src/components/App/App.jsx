import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import { Header } from '..'
import { About, Contact } from '../../pages'


export const App = (props) => {
  return (
    <div className="App">
      <Header />
        <Route exact path={['/', '/about']} component={About} />
        <Route path={['/contact']} component={Contact} />
    </div>
  )
}

export default App
