import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Join from "../src/pages/Join/join";
import Members from "../src/pages/Members/Members";
import About from "../src/pages/About/About";
import Home from "../src/pages/Home/Home";
import Preloader from "./pages/PreLoader/Preloader";
import Room from "./pages/Music Room/room";
import { BrowserRouter , Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div  className="App">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <NavBar />
          <div className="main-content">
            <Home />
            <About />
            <Members />
            
            <Join />
          </div>
        </div>
      )}
    </div>}/>
      <Route path="/Room" element={<Room/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
