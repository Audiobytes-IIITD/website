import React from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-slate-900 flex justify-center items-center content-container pt-16">
      <div className="flex flex-col gap-10">
        <div className="">
          <img src="images/HomeImage.jpg" alt="Band" className="w-full object-cover" style={{ width: '1200px', height: '500px' }} />
          <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-3xl font-bold">
            <TypeAnimation sequence={['Welcome to AudioBytes', 2000," ",10]}
                speed={50}
                repeat={Infinity}
                className='text-accent'
                wrapper='span'></TypeAnimation>
            </h1>
            
            <p className="text-sm">MUSIC CLUB OF IIITD</p>
          </motion.div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="aboutUs" activeClass='active' style={{cursor:'pointer'}} spy={true} smooth={true}>
          <div className="w-64 h-32 bg-gray-800 rounded-lg hover:bg-gray-700 flex flex-col justify-center items-center text-white font-bold">
            About Us
            <p className="text-xs">Learn about AudioBytes</p>
          </div></Link>
        
          <div className="w-64 h-32 bg-gray-800 rounded-lg hover:bg-gray-700 flex flex-col justify-center items-center text-white font-bold">
            Upcoming Events
            <p className="text-xs">View all moshing events</p>
          </div>
          <Link to="members" activeClass='active' style={{cursor:'pointer'}} spy={true} smooth={true}>
          <div className="w-64 h-32 bg-gray-800 rounded-lg hover:bg-gray-700 flex flex-col justify-center items-center text-white font-bold">
            Our Members
            <p className="text-xs">Meet Our Coordinators </p>
          </div>
          </Link>
          
          <Link to ="joinus" activeClass='active' spy={true} smooth={true} style={{cursor:'pointer'}}>
          <div className="w-64 h-32 bg-gray-800 rounded-lg hover:bg-gray-700 flex flex-col justify-center items-center text-white font-bold">
            Join US
            <p className="text-xs">Join our Club</p>
          </div>
          </Link>
          
        </div>
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
