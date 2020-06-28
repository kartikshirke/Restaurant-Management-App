import React from 'react';
import {
    Link
} from "react-router-dom";
const Nav = () => (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <p className="navbar-brand">Bob's Restaurant App</p>
        <ul className="navbar-nav">
            <li className="nav-item active">
                <span className="nav-link">
                    <Link to="/">Home</Link>
                </span>

            </li>
            <li className="nav-item">
                <span className="nav-link">
                    <Link to="/burgers">Burgers</Link>
                </span>
            </li>
            <li className="nav-item">
                <span className="nav-link">
                    <Link to="/employees">Employees Schedule </Link>
                </span>
            </li>
            <li className="nav-item">
                <span className="nav-link">
                    <Link to="/users">Users</Link>
                </span>
            </li>
            
        </ul>
    </nav>

)
export default Nav;

