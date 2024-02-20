// Hero.js

import React from 'react';
import './Hero.css';
import handIcon from '../Assets/hand_icon.png';
import arrowIcon from '../Assets/arrow.png';
import heroImg from '../Assets/hero_image.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-content">
                <h2>New Arrivals Only</h2>
                <div className='hero-icon-text'>
                    <div className='hero-icon'>
                        <p>new</p>
                        <img src={handIcon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collections</div>
                    <img src={arrowIcon} alt="" />
                </div>
            </div>
            <div className="hero-image">
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
}

export default Hero;
