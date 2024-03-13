import React from 'react';
import "./Home.css";
import video from '../../videos/vid.mp4';

const Home = () => {
  return (
    <div>
      <div className="bg-EFEAE3 flex justify-center items-center content-container pt-16" style={{ height: '100vh' }}>
        <div className="flex flex-col gap-10">
          <div className="">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
              <h1 className="text-2xl md:text-5xl font-bold mb-4" style={{ color: 'white', fontSize: '4.5rem' }}>Welcome to AudioBytes</h1>
              <h2 className="text-sm md:text-xl" style={{ color: 'white', fontSize: '2rem', marginTop: '20px' }}>MUSIC CLUB OF IIITD</h2>
            </div>
          </div>
        </div>
          <video autoPlay loop muted src={video} style={{ height: '100%', width: '100%', objectFit: 'cover' }}></video> 
          
      </div>
    </div>
  );
};

export default Home;
