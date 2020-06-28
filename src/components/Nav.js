import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
const Nav = () => (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand">Restaurant Management App</a>
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

