import React from "react";
import { Link } from "react-scroll";


function NavBar() {
    const [showMenu, setShowMenu] = React.useState(false);
    return (

        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between bg-slate-800 p-4 rounded-ee-xl rounded-es-xl z-10 shadow-sm min-w-80">
            <div className="flex items-center">
                <img src="images/abWhite300.png" alt="icon" className="w-16 h-16 content-stretch" />
                <h1 className="text-white font-bold text-base">AudioBytes</h1>
            </div>
            <div className="xs:hidden sm:hidden md:flex lg:flex items-center xxs:hidden">
                {/* Content for large screens */}

                <Link to='aboutUs' activeClass='active' style={{ cursor: 'pointer' }} spy={true} smooth={true}>
                    <div className="text-white text-sm font-bold mr-8" onClick={() => { setShowMenu(!showMenu) }}>About Us</div>
                </Link>
                <a href="/" className="text-white mr-8 text-sm font-bold">Upcoming Events</a>
                <Link to='members' activeClass='active' style={{ cursor: 'pointer' }} spy={true} smooth={true}>
                    <div className="text-white mr-8 text-sm font-bold">Our Members</div>
                </Link>

                <Link to='members' activeClass='active' style={{ cursor: 'pointer' }} spy={true} smooth={true}>
                    <div className="text-white mr-8 text-sm font-bold">Contact</div>
                </Link>

                <Link to='joinus' activeClass='active' style={{ cursor: 'pointer' }} spy={true} smooth={true}>
                    <div className="text-white mr-4 text-sm rounded-full bg-cyan-600 p-3 font-bold">Join the Club!</div>
                </Link>

            </div>
            <div className="lg:hidden md:hidden">
                {/* Content for small screens */}
                <button className="text-white text-sm font-bold bg-cyan-600 rounded-full p-3" onClick={() => { setShowMenu(!showMenu) }}>Menu</button>
                <div className={` opacity-95 flex flex-col fixed top-0 left-0 w-full h-full items-center justify-center bg-slate-800 z-50 ${showMenu ? "block" : "hidden"}`}>
                    <img src="images/close.png" alt="close_menu" className="mt-2 hover:cursor-pointer w-6 h-6 content-between" onClick={() => setShowMenu(false)} />
                    <div className="flex flex-col items-center justify-center h-full gap-5 p-2">
                        <Link to='aboutUs' activeClass='active' style={{ cursor: 'pointer' }} spy={true} smooth={true}>
                            <div className="text-white text-sm font-bold mr-8" onClick={() => { setShowMenu(!showMenu) }}>About Us</div>
                        </Link>
                        <a href="/" className="text-white text-sm font-bold" onClick={() => { setShowMenu(!showMenu) }}>Upcoming Events</a>
                        <Link to='members' activeClass='active' style={{ cursor: 'pointer' }} spy={true} smooth={true}>
                            <div className="text-white text-sm font-bold" onClick={() => { setShowMenu(!showMenu) }}>Our Members</div>
                        </Link>
                        <Link to='members' activeClass='active' style={{ cursor: 'pointer' }} spy={true} smooth={true}>
                            <div className="text-white text-sm font-bold" onClick={() => { setShowMenu(!showMenu) }}>Contact</div>
                        </Link>

                        <Link to='joinus' activeClass='active' style={{ cursor: 'pointer' }} spy={true} smooth={true}>
                            <div className="text-white text-sm font-bold" onClick={() => { setShowMenu(!showMenu) }}>Join the Club!</div>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
