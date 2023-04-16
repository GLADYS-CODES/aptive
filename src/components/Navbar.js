


import { Link } from "react-router-dom";
import logo from '../asset/logo.png';
import  './NavbarStyle.css';
import {FaBars, FaTimes} from "react-icons/fa";

import React, { useState } from 'react';


const Navbar = () => {


 const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);




    return ( 
        <header>
            <nav className="navbar">
                <div className='logo'>
                   <Link to='/'><img src={logo} alt=' '/></Link>
                    </div>
            <ul className={click ? "nav-menu active" : 'nav-menu'}>
            <li className="nav-item">
                <Link to='/' className="nav-links">Home</Link>
            </li>

            <li className="nav-item">
                <Link to='/' className="nav-links">Pricing</Link>

            </li>
                <li className="nav-item">
                <Link to='/' className="nav-links">FAQ</Link>
                </li>
            <li className="nav-item">
                <Link to='/' className="nav-links">Contact</Link>
            </li>
       </ul>

            <div className="ham-burger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars size={20} style={{ color: '#ffffff' }} />)}
            </div>
            </nav>
        </header>
     );
}
 
export default Navbar;