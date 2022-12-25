import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from "../../Assets/logo.jpg";

function NavBar() {
  return (
    <div className='navbar'>
        <div className="website-logo">
          <img src={logo} alt="Website logo" />
        </div>

        <div className="nav-items">
            <ul className="nav-links">
              <li>Home</li>
              <li>Mission</li>
              <li>Research</li>
              <li>Blog</li>
              <li>About</li>
              <li>Photo Gallery</li>
              <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar