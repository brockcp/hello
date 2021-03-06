import React from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Foot from './components/Foot';

function App(){
  return(
    <div>
      <Nav />
      <Intro />
      <About />
      <Skills />
      <Works />
      <Foot />
    </div>
  )
}
export default App;
