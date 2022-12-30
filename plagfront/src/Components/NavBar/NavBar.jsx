import * as React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from "../../Assets/logo.jpg";

function NavBar() {
  const [researchDisplay, setResearchDisplay] = React.useState(false)
  const [aboutDisplay, setAboutDisplay] = React.useState(false)
  const handleDisplayOnHover = (className) => {
    if(className == "nav-hover") setResearchDisplay(true)
    if(className == "nav-about")setAboutDisplay(true)
  }
  const handleDisplayOffHover = (className) => {
    if(className == "nav-hover") setResearchDisplay(false)
    if(className == "nav-about")setAboutDisplay(false)
  }

  return (
    <div className='navbar'>
        <div className="website-logo">
          <img src={logo} alt="Website logo" />
        </div>

        <div className="nav-items">
            <ul className="nav-links">
              <li>Home</li>
              <li>Mission</li>
              <div className="nav-research">
                <div className="nav-top">
                  <ul>
                    <li onMouseEnter={() => handleDisplayOnHover("nav-hover")} onMouseLeave = { () => handleDisplayOffHover("nav-hover")} >Research</li>
                  </ul>
                </div>
                { 
                researchDisplay 
                ? 
                  <div className="nav-hover">
                    <ul>
                      <li>Current Projects</li>
                      <li>Collaboration</li>
                      <li>Publications</li>
                      <li>Funding and Acknowledgments</li>
                    </ul>
                  </div> 
                :
                  <></>
                  }
                
              </div>
              <li>Blog</li>
              <div className="nav-research">
                <div className="nav-top">
                  <ul>
                    <li onMouseEnter={() => handleDisplayOnHover("nav-about")} onMouseLeave = {() => handleDisplayOffHover("nav-about")}>About</li>
                  </ul>
                </div>
                {
                aboutDisplay
                ?
                <div className="nav-about">
                  <ul>
                    <li>Dr. Parent</li>
                    <li>Personnel: Current</li>
                    <li>Personnel: Former</li>
                  </ul>
                </div>
                :
                <></>
              }
              </div>
              <li>Photo Gallery</li>
              <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar