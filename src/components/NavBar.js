import React from "react";

function NavBar() {
    const [showMenu, setShowMenu] = React.useState(false);
    return (
        <nav className="flex items-center justify-between bg-slate-800 p-4">
            <div className="flex items-center">
                <img src="images/icon.svg" alt="icon" className="w-6 h-6" />
                <h1 className="ml-4 text-white font-bold text-base">AudioBytes</h1>
            </div>
            <div className="xs:hidden sm:hidden md:flex lg:flex items-center">
                {/* Content for large screens */}
                <a href="/" className="text-white mr-8 text-sm font-bold">About Us</a>
                <a href="/" className="text-white mr-8 text-sm font-bold">Upcoming Events</a>
                <a href="/" className="text-white mr-8 text-sm font-bold">Our Music</a>
                <a href="/" className="text-white mr-8 text-sm font-bold">Contact</a>
                <a href="/" className="text-white mr-4 text-sm rounded-full bg-cyan-600 p-3 font-bold">Join the Club!</a>
            </div>
            <div className="lg:hidden md:hidden">
                {/* Content for small screens */}
                <button className="text-white text-sm font-bold bg-cyan-600 rounded-full p-3" onClick={() => {setShowMenu(!showMenu); console.log("Hello")}}>Menu</button>
                <div className={` flex flex-col fixed top-0 left-0 w-full h-full items-center justify-center bg-slate-800 z-50 ${showMenu ? "block" : "hidden"}`}>
                    <img src="images/close.png" alt="close_menu" className="mt-2 hover:cursor-pointer w-6 h-6 content-between" onClick={() => setShowMenu(false)}/>
                    <div className="flex flex-col items-center justify-center h-full gap-2 p-2">
                        <a href="/" className="text-white text-sm font-bold">About Us</a>
                        <a href="/" className="text-white text-sm font-bold">Upcoming Events</a>
                        <a href="/" className="text-white text-sm font-bold">Our Music</a>
                        <a href="/" className="text-white text-sm font-bold">Contact</a>
                        <a href="/" className="text-white text-sm font-bold">Join the Club!</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
