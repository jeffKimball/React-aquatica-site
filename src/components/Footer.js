import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{color: "#fff", marginRight:"2rem"}} />
                    
                        <div>
                            <p>1111 Avenue</p>
                            <p>Watertown, USA</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}} />1-555-444-3454</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}} />aquatica@scuba.com</h4>
                    </div>
                </div>
            <div className="right">
                <h4>Our Mission</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Footer