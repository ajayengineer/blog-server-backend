import React, { } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

const TopBar = () => {
    const user = false;

    return (
        <div className="top">
            <div className="topLeft">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-pinterest-square"></i>
                <i className="fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write">Write</Link>
                    </li>
                    <li className="topListItem">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                        />
                    ) : (
                        <ul className="loginAndRegister">
                            <li><Link className="link" to="/login">Login</Link> </li> |
                            <li><Link className="link" to="/register">Register</Link></li>
                        </ul>
                    )
                }

                <i className="fas fa-search TopSearchIcon"></i>
            </div>
        </div>
    )
}

export default TopBar;