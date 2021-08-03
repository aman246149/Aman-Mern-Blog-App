
import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useContext } from "react"
import storeCtx from "../../store/BlogData"

function Navbar() {
    const storeContext = useContext(storeCtx);
    return (
        <nav>
            <div className="logo"> <Link to="/" className="link">Aman's Blog</Link></div>
            <ul>
                <li><Link to="/web" className="link">Web</Link></li>
                <li><Link to="/tech" className="link">Tech</Link></li>
                <li><Link to="/dsa" className="link">DSA</Link></li>
                <li><Link to="/tricks" className="link">CHEAT SHEET</Link></li>
                <li><Link to="/about" className="link">About</Link></li>
                {storeContext.userEmailData==="amanthapliyal14@gmail.com"?<li><Link to="/formeditor" className="link">AddBLOG</Link></li>:null}
            </ul>
            <button><Link to="/signup" className="link">{storeContext.userEmailData===""?"SIGNUP":"SIGNOUT"}</Link></button>
        </nav>
    )
}

export default Navbar
