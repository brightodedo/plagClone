import React from 'react'
import './Collaboration.css'
import collaborationImage from '../../Assets/collaborationImage.webp'
import { Link } from 'react-router-dom'


export default  function Collaboration() {
  return (
    <div className='collaboration-page'>
        <div className="collaboration-title">
            <span>COLLABORAION</span>
            <p>Synapsing with our colleagues advances knowledge 
                and enhances the impact of our scientific contributions
            </p>
        </div>
        <div className="collaboration-botom">
            <div className="collaboration-collaborators">
                <p>Collaborators</p>
                <ul>
                    <li><Link>Dan Cox</Link></li>
                    <li><Link>Ryan Lalumiere</Link></li>
                    <li><Link>Aaron Roseberry</Link></li>
                    <li><Link>Javier Stern</Link></li>
                    <li><Link>David Weinshenker</Link></li>
                </ul>
            </div>
            <div className="collaboration-image">
                <img src={collaborationImage} alt="neuron image" />
            </div>
        </div>
    </div>
  )
}