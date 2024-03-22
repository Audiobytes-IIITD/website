import React from "react";
import logo from "../images/abWhite300.png";
import { Link } from "react-scroll";

function NavBar() {
    return (
        <nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} alt="icon" className="w-16 h-16 content-stretch" />
                    <h1 className="text-2xl font-semibold whitespace-nowrap dark:text-white" style={{ color: 'white' }}>AudioBytes</h1>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to='joinus' activeClass='active' spy={true} smooth={true} offset={-200} style={{cursor:"pointer"}}>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join Us</button>
                    </Link>
                    
                    
                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    
                        <Link to='home' activeClass='active' spy={true} smooth={true} offset={-200} style={{cursor:"pointer"}}>
                            <div className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page" style={{ color: 'white' }}>Home</div>
                        </Link>

                            
                        <Link to='aboutUs' activeClass='active' spy={true} smooth={true} offset={-200} style={{cursor:"pointer"}}>
                            <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" style={{ color: 'white' }}>About</div>
                        </Link>
                            
                        <Link to='members' activeClass='active' spy={true} smooth={true} offset={-200} style={{cursor:"pointer"}}>
                            <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" style={{ color: 'white' }}>Members</div>
                        </Link>
                        
                        <Link to='joinus' activeClass='active' spy={true} smooth={true} offset={-200} style={{cursor:"pointer"}}>
                            <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" style={{ color: 'white' }} >Contact</div>
                        </Link>

                        <Link to='room' activeClass='active' spy={true} smooth={true} offset={-200} style={{cursor:"pointer"}}>
                            <div className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page" style={{ color: 'white' }}>Access Music Room</div>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
