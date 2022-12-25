import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-contents">
            <div className="footer-text">
                <div className="footer-location">
                    <p>Neuroscience Institute</p>
                    <p>850 Petit Science Center</p>
                    <p>100 Piedmont Ave. SE</p>
                    <p>Atlanta, GA 30303</p>
                </div>
                <div className="footer-number">
                    <p>Phone: 404-413-6345</p>
                </div>
            </div>

            <div className="footer-form">
                <p className="footer-form-header">
                    Subscribe Form
                </p>
                <div className="footer-form-field">
                    <input type="email" placeholder="Email Address"/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )

}