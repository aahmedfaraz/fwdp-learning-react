import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>React Routing</h1>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/products'}>Products</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
