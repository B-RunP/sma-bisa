import React, { useState } from 'react';
import { jelajahDropdown } from './NavItem';
import { Link } from 'react-router-dom';

function Dropdown() {
    const [dropdown, setDropdown] = useState(false);

    return(
        <>
            <ul
            className={dropdown ? "jelajahi-submenu clicked" : "jelajahi-submenu"}
            onClick={() => setDropdown(!dropdown)}
            >
                {jelajahDropdown.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link
                            to={item.path}
                            className={item.cName}
                            onClick={() => setDropdown(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>

        </>
    );
}

export default Dropdown;