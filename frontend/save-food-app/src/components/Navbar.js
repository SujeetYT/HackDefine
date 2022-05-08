import React from "react"
import logo from "../images/logo.png"
import {Link} from "react-router-dom"
export default function Navbar(){
    return(
        <nav className="navbar">
            <img className="logo" src={logo} alt="logo"/>
            <ul className="nav-list">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/about">About</Link></li>
                <li><Link className="nav-link" to="/volunteer">Volunteer</Link></li>
            </ul>      
        </nav>
    )
}