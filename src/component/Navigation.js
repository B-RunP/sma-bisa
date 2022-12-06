import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/lesson">LESSON</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;