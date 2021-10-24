import React from 'react'
import {Link} from 'react-router-dom';
import './register.css'

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" placeholder="Enter Yourname..." className="registerInput" /> 
                <label>Email</label>
                <input type="text" placeholder="Enter your Email..." className="registerInput" /> 
                <label>Password</label>
                <input type="password" placeholder="Enter your Password..." className="registerInput"/> 
                <button className="registerButton">Register</button>
               
            </form>
            <button className="registerLoginButton">
            <Link to="/login">Login</Link>
            </button>
        </div>
    )
}
