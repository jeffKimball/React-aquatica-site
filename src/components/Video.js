import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css' 

import scubaVideo from '../assets/scuba-vid.mp4'


const Video = () => {
    return (
        <div className="hero">
           <video autoPlay loop muted id="video">
                <source src={scubaVideo} type='video/mp4' />
           </video>
            <div className="content">
                <h1>Into the Blue</h1>
                <p>Adventure Seekers Welcome</p>            
                <div>
                    <Link to='/training' className="btn">Training</Link>
                    <Link to='/contact' className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Video