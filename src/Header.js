import React from 'react'
import './Header.css'
import {
    Link
  } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <ul>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"alt=""/>

            <li><Link to="/Home"> Home </Link></li>
           <li> <Link to="/about">About</Link></li>
           <li> <Link to="/Contact">Contact</Link></li>

            </ul>
        </div>
    )
}

export default Header
