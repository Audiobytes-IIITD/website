import React from "react";

function NavBar() {
    const [showMenu, setShowMenu] = React.useState(false);
    return (
        <nav className="flex items-center justify-between bg-slate-800 p-4">
            <div className="flex items-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <h1 className="ml-4 text-white font-bold text-base">AudioBytes</h1>
            </div>
            <div className="md:hidden sm:hi lg:flex items-center">
                {/* Content for large screens */}
                <a href="/" className="text-white mr-8 text-sm font-bold">About Us</a>
                <a href="/" className="text-white mr-8 text-sm font-bold">Upcoming Events</a>
                <a href="/" className="text-white mr-8 text-sm font-bold">Our Music</a>
                <a href="/" className="text-white mr-8 text-sm font-bold">Contact</a>
                <a href="/" className="text-white mr-4 text-sm rounded-full bg-cyan-600 p-3 font-bold">Join the Club!</a>
            </div>
            <div className="lg:hidden">
                {/* Content for small screens */}
                <button className="text-white text-sm font-bold bg-cyan-600 rounded-full p-3" onClick={() => {setShowMenu(!showMenu); console.log("Hello")}}>Menu</button>
                <div className={`fixed top-0 left-0 w-full h-full bg-slate-800 z-50 ${showMenu ? "block" : "hidden"}`}>
                    <button className="text-white text-sm font-bold bg-cyan-600 rounded-full p-3" onClick={() => setShowMenu(false)}>Close</button>
                    <div className="flex flex-col items-center justify-center h-full">
                        <a href="/" className="text-white text-2xl font-bold">About Us</a>
                        <a href="/" className="text-white text-2xl font-bold">Upcoming Events</a>
                        <a href="/" className="text-white text-2xl font-bold">Our Music</a>
                        <a href="/" className="text-white text-2xl font-bold">Contact</a>
                        <a href="/" className="text-white text-2xl font-bold">Join the Club!</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
