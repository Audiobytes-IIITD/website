import React, { useEffect } from 'react';
import "./Home.css";
import video from '../../videos/vid.mp4';
import Typed from 'typed.js';
import { gsap } from 'gsap/all'; 
import { ScrollTrigger } from 'gsap/all'; 
import SplitType from 'split-type';

const Home = () => {
  useEffect(() => {
    
    var typing = new Typed(".text", {
      strings: [" Vibe", " Perform.", " Muse."],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true
    });

    
    gsap.registerPlugin(ScrollTrigger);
    const introsplitTypes = document.querySelectorAll(".left-part h1");
    introsplitTypes.forEach((char, i) => {
      const i_text = new SplitType(char);
      gsap.to(i_text.chars, {
        y: 0,
        stagger: 3,
        duration: 1 
      });
    });
  }, []);

  return (
    <div id='home'>
      <div className="bg-EFEAE3 flex justify-center items-center content-container pt-16" style={{ height: '100vh' }}>
        <div className="flex flex-col gap-10">
          <div className="">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
              <h1 id='heading'>Welcome to AudioBytes</h1>
              <h2 id='sub-heading'>MUSIC CLUB OF IIITD</h2>
              <span className='text-sm md:text-xl'style={{ color: 'white', fontSize: '7rem', marginTop: '20px' }}>   </span>
              <span className="text" style={{ color: '#f1e728', fontSize: '7rem', marginTop: '20px' , fontWeight: 'bold'}}></span>
            </div>
          </div>
        </div>
        <video autoPlay loop muted src={video} style={{ height: '100%', width: '100%', objectFit: 'cover' }}></video> 
      </div>
    </div>
  );
};
export default Home;
