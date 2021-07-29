
import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className="logo"> <Link to="/" className="link">Aman's Blog</Link></div>
            <ul>
                <li><Link to="/web" className="link">Web</Link></li>
                <li><Link to="/tech" className="link">Tech</Link></li>
                <li><Link to="/motivation" className="link">Motivation</Link></li>
                <li><Link to="/tricks" className="link">Tricks</Link></li>
                <li><Link to="/jobs" className="link">Jobs</Link></li>
                <li><Link to="/about" className="link">About</Link></li>
            </ul>
            <button><Link to="/contactus" className="link">CONTACT US</Link></button>
        </nav>
    )
}

export default Navbar
