import React from "react";

function NavBar() {
    return (
        <nav className="flex items-center justify-between bg-slate-800 p-4">
            <div className="flex items-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <h1 className="ml-4 text-white font-bold text-base">AudioBytes</h1>
            </div>
            <div className="flex items-center">
                <a href="/" className="text-white mr-8 text-sm  font-bold">About Us</a>
                <a href="/" className="text-white mr-8 text-sm font-bold">Upcoming Events</a>
                <a href="/" className="text-white mr-8 text-sm font-bold">Our Music</a>
                <a href="/" className="text-white mr-8 text-sm font-bold">Contact</a>
                <a href="/" className="text-white mr-4 text-sm rounded-full bg-cyan-600 p-3 font-bold">Join the Club!</a>
            </div>
        </nav>
    );
}

export default NavBar;