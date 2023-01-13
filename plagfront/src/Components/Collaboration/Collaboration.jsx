import React from 'react'
import './Collaboration.css'
import collaborationImage from '../../Assets/collaborationImage.webp'
import { Link } from 'react-router-dom'


export default  function Collaboration() {
  return (
    <div className='collaboration-page'>
        <div className="collaboration-title">
            <span>COLLABORATION</span>
            <p>Synapsing with our colleagues advances knowledge 
                and enhances the impact of our scientific contributions
            </p>
        </div>
        <div className="collaboration-bottom">
            <div className="collaboration-collaborators">
                <p>Collaborators:</p>
                <ul id='collaborator-names'>
                    <li><a href="https://neuroscience.gsu.edu/profile/daniel-cox/" target='_blank'>Dan Cox</a></li>
                    <li><a href="https://psychology.uiowa.edu/lalumiere-lab" target='_blank'>Ryan Lalumiere</a></li>
                    <li><a href="https://roseberrylab.gsucreate.org/" target='_blank'>Aaron Roseberry</a></li>
                    <li><a href="https://neuroinflammation.gsu.edu/director/" target='_blank'>Javier Stern</a></li>
                    <li><a href="https://med.emory.edu/departments/human-genetics/research/weinshenker/index.html" target='_blank'>David Weinshenker</a></li>
                </ul>
            </div>
            <div className="collaboration-image">
                <img src={collaborationImage} alt="neuron image" />
            </div>
        </div>
    </div>
  )
}