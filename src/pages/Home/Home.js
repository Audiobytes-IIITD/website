import React from 'react';
import "./Home.css";
import video from '../../videos/vid.mp4';

const Home = () => {
  return (
    <div className="bg-EFEAE3 flex justify-center items-center content-container pt-16">
      <div className="flex flex-col gap-10">
        <div className="">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
            <h1 className="text-2xl md:text-5xl font-bold mb-4" style={{ color: 'white', fontSize: '4.5rem' }}>Welcome to AudioBytes</h1>
            <h2 className="text-sm md:text-xl" style={{ color: 'white', fontSize: '2rem', marginTop: '20px' }}>MUSIC CLUB OF IIITD</h2>
          </div>
        </div>

        <video autoPlay loop muted src={video} ></video>

        <div className="flex justify-center gap-4 flex-wrap">
          <img src="images/eventImage1.png" alt="Image 1" className="w-64 h-32 rounded-lg" style={{ width: '300px', height: '200px' }} />
          <img src="images/eventImage2.png" alt="Image 2" className="w-64 h-32 rounded-lg" style={{ width: '300px', height: '200px' }} />
          <img src="images/eventImage3.png" alt="Image 3" className="w-64 h-32 rounded-lg" style={{ width: '300px', height: '200px' }} />
        </div>
      </div>

      


    </div>
  );
};

export default Home;
