import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './components/about';
import Home from './components/home';
import Join from './components/join';
import Members from './components/members';


function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Members/>
      <Join/>
    </div>
  );
}

export default App;
