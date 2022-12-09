import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { navItems } from './NavItem';
import Button from './Button';
import Dropdown from './DropdownNav';

function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <nav className='navbar'>
                <Link to="/" className='navbar-logo'>
                    SMA'BISA
                </Link>
                <ul className='nav-items'>
                    {navItems.map((item) => {
                        if (item.title === "Jelajah") {
                            return(
                                <li
                                key={item.id}
                                className={item.cName}
                                onMouseEnter={() => setDropdown(true)}
                                onMouseLeave={() => setDropdown(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {dropdown && <Dropdown />}
                                </li>
                            );
                        }
                        return (
                            <li key={item.id} className={item.cName}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;