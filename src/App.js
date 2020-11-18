import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Podcast from './components/Podcast';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Podcast/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
