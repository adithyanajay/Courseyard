import React from 'react';
import "./Navbar.css";
import Switcher from "./Switcher";
function Navbar() {
    return (
            <nav className="nav">
                <ul className='nav'>
                    <li className="nav-item slam-left">Courseyard</li>
                    <Switcher className ="nav-item"/>
                </ul>
            </nav>
    )

}

export default Navbar
