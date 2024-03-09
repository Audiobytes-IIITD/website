import React from 'react';
import bandImage from '../assets/HomeImage.jpg';
import eventImage1 from '../assets/eventImage1.png';
import eventImage2 from '../assets/eventImage2.png';
import eventImage3 from '../assets/eventImage3.png';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className="bg-slate-900 pt-8 flex justify-center items-center content-container pt-16">
      <div className="flex flex-col gap-10">
        <div className="">
          <img src={bandImage} alt="Band" className="w-full" style={{ width: '1200px', height: '500px' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-3xl font-bold">Welcome to AudioBytes</h1>
            <p className="text-sm">MUSIC CLUB OF IIITD</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-64 h-32 bg-gray-800 rounded-lg hover:bg-gray-700 flex flex-col justify-center items-center text-white font-bold">
            Upcoming Events
            <p className="text-xs">View all moshing events</p>
          </div>
          <div className="w-64 h-32 bg-gray-800 rounded-lg hover:bg-gray-700 flex flex-col justify-center items-center text-white font-bold">
            Our Music
            <p className="text-xs">Listen to our music </p>
          </div>
          <div className="w-64 h-32 bg-gray-800 rounded-lg hover:bg-gray-700 flex flex-col justify-center items-center text-white font-bold">
            About Us
            <p className="text-xs">Learn about AudioBytes</p>
          </div>
          <div className="w-64 h-32 bg-gray-800 rounded-lg hover:bg-gray-700 flex flex-col justify-center items-center text-white font-bold">
            Join US
            <p className="text-xs">Join our Club</p>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <img src={eventImage1} alt="Image 1" className="w-64 h-32 rounded-lg" style={{ width: '300px', height: '200px' }} />
          <img src={eventImage2} alt="Image 2" className="w-64 h-32 rounded-lg" style={{ width: '300px', height: '200px' }} />
          <img src={eventImage3} alt="Image 3" className="w-64 h-32 rounded-lg" style={{ width: '300px', height: '200px' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
