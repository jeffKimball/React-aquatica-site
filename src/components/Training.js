import React from 'react';
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import Diver from '../assets/diver.jpg'
import Coral from '../assets/coral.jpg'

const Training = () => {
    return (
        <div className="training">
            <div className="left">
                <h1>Lessons</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <Link to='/contact'><button className="btn">Contact</button></Link>
            </div>
            <div className="right">
                <div className="img-container">
                    {/* <div classname="img-stack top">
                        <img src={Diver} className="img" />
                    </div> */}
                    <div classname="img-stack bottom">
                        <img src={Coral} className="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training
