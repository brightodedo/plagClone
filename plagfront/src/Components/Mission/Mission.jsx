import React from 'react'
import './Mission.css'
import { Link } from 'react-router-dom'
import missionImage from '../../Assets/missionImage.webp'

export default function Mission() {
  return (
    <div className='mission-page'>
        <div className="mission-border">
            <div className="mission-header">
                <p>Mission</p>
            </div>    
            <div className="mission-body">
                <p>The mission of the Parent Lab is to conduct excellent science in a
                    welcoming environment that allows all members to flourish. Our lab 
                    follows the motto, ‘See one, do one, teach one, publish one!’, 
                    which reflects that strategy we use to learn and master techniques 
                    and our belief that all lab members (postdocs, techs, graduate and 
                    undergraduate students) have an equal opportunity to contribute to our science 
                    and serve as authors.
                </p>
                <br />
                <p>To become a Parent lab member, you need to have an enthusiastic interest in 
                    neuroscience, an eagerness to learn, and a strong work ethic. Previous 
                    knowledge of neuroscience and experience with our methods is not 
                    always necessary, but welcome. Visit our <Link to='/contact'>Contact</Link> page to 
                    reach out to Dr. Parent about joining the team.
                </p>
            </div>
            <div className="mission-image">
                <img src={missionImage} alt="missionImage" />
            </div>
        </div>
    </div>
  )
}
