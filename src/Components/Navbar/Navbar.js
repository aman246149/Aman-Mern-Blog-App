
import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useContext } from "react"
import storeCtx from "../../store/BlogData"

function Navbar() {
    const storeContext = useContext(storeCtx);
    const[ishamburge,sethamburger]=useState(false)

    function showNavbar(){
            sethamburger(value=>!value)
    }

    

    return (
        <nav className={ishamburge!==false?"navactive":null}>
            <div className="logo"> <Link to="/" className="link">Aman's Blog</Link></div>
            <ul className={ishamburge!==false?"ulactive":null}>
                <li onClick={showNavbar}><Link to="/web" className="link">Web</Link></li>
                <li onClick={showNavbar}><Link to="/tech" className="link">Tech</Link></li>
                <li onClick={showNavbar}><Link to="/dsa" className="link">DSA</Link></li>
                <li onClick={showNavbar}><Link to="/tricks" className="link">CHEAT SHEET</Link></li>
                <li onClick={showNavbar}><Link to="/about" className="link">About</Link></li>
                {storeContext.userEmailData==="amanthapliyal14@gmail.com"?<li><Link to="/formeditor" className="link">AddBLOG</Link></li>:null}
            </ul>
            <button><Link to="/signup" className="link">{storeContext.userEmailData===""?"SIGNUP":"SIGNOUT"}</Link></button>
            <img onClick={showNavbar} className="humburger" src="https://image.flaticon.com/icons/png/128/1828/1828859.png" width="30px" alt="hamburger" />
        </nav>
    )
}

export default Navbar
