import logo from './logo.svg';
import './App.css';
import React from 'react';
import about from './components/about';
import home from './components/home';
import join from './components/join';
import members from './components/members';


function App() {
  return (
    <div className="App">
      <home/>
      <about/>
      <members/>
      <join/>
    </div>
  );
}

export default App;
