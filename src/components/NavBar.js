import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/abWhite300.png";
import hamburger from "../images/menu-4-64.png";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        setClosing(!menuOpen);
        if (!menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            setTimeout(() => {
                setClosing(false);
                document.body.style.overflow = '';
            }, 5000); 
        }
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
        setClosing(true);
        document.body.style.overflow = '';
        setTimeout(() => {
            setClosing(false);
        }, 50000); 
    };

    return (
        <div id="nav-container" style={{ position: 'relative', zIndex: '10'}} >
            <div id="image-logo">
                <img src={logo} />
            </div>
            <nav>
                <input type="checkbox" id="check" checked={menuOpen} onChange={handleMenuToggle} />
                <label htmlFor="check" className="checkbtn">
                    <img src={hamburger} alt="Menu" className="menu-icon" />
                </label>
                
                <label className="logo">AudioBytes</label>
                <ul className={menuOpen ? 'show' : ''}>
                    <li><ScrollLink to="home" smooth={true} duration={2000} onClick={handleCloseMenu}>Home</ScrollLink></li>
                    <li><ScrollLink to="aboutUs" smooth={true} duration={2000} onClick={handleCloseMenu}>About Us</ScrollLink></li>
                    <li><ScrollLink to="members" smooth={true} duration={2000} onClick={handleCloseMenu}>Members</ScrollLink></li>
                    <li><ScrollLink to="joinus" smooth={true} duration={2000} onClick={handleCloseMenu}>Join Us</ScrollLink></li>
                    <li><Link to="/room" onClick={handleCloseMenu}>Access Music Room</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
