import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import { Header } from '..'
import { About, Blog, Contact, Home } from '../../pages'


export const App = (props) => {
  return (
    <div className="App">
      <Header />
        <Route exact path={['/']} component={Home} />
        <Route path={['/about']} component={About} />
        <Route path={['/blog']} component={Blog} />
        <Route path={['/contact']} component={Contact} />
    </div>
  )
}

export default App
