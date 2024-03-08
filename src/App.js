import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './components/about';
import Home from './components/home';
import Join from './components/join';
import Members from './components/members';
import NavBar from './components/navbar'


function App() {
  return (
    <div className="App">
      <Home />
      <NavBar/>
      <About/>
      <Members/>
      <Join/>
    </div>
  );
}

export default App;
