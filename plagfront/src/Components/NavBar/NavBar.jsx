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
          <Link to='/'><img src={logo} alt="Website logo" /></Link>
        </div>

        <div className="nav-items">
            <ul className="nav-links">

              <Link to='/'><li>Home</li></Link>
              <Link to='/mission'><li>Mission</li></Link>
              <div className="nav-research">
                <div className="nav-top">
                  <ul>
                    <Link><li onMouseEnter={() => handleDisplayOnHover("nav-hover")} onMouseLeave = { () => handleDisplayOffHover("nav-hover")} >Research</li></Link>
                  </ul>
                </div>
                { 
                researchDisplay 
                ? 
                  <div className="nav-hover">
                    <ul>
                      <Link><li>Current Projects</li></Link>
                      <Link><li>Collaboration</li></Link>
                      <Link><li>Publications</li></Link>
                      <Link><li>Funding and Acknowledgments</li></Link>
                    </ul>
                  </div> 
                :
                  <></>
                  }
                
              </div>
              <Link><li>Blog</li></Link>
              <div className="nav-research">
                <div className="nav-top">
                  <ul>
                    <Link><li onMouseEnter={() => handleDisplayOnHover("nav-about")} onMouseLeave = {() => handleDisplayOffHover("nav-about")}>About</li></Link>
                  </ul>
                </div>
                {
                aboutDisplay
                ?
                <div className="nav-about">
                  <ul>
                    <Link><li>Dr. Parent</li></Link>
                    <Link><li>Personnel: Current</li></Link>
                    <Link><li>Personnel: Former</li></Link>
                  </ul>
                </div>
                :
                <></>
              }
              </div>
              <Link><li>Photo Gallery</li></Link>
              <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default NavBar