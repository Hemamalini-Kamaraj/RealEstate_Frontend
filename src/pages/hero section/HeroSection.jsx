import React from 'react'
import './HeroSection.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
        const navigate = useNavigate();
    
  return (
    <div className='hero-section'>
        <div>
            <h1 className="hero-title letter-animation">
                Where Quality Homes and Exceptional Service Create Your Perfect Real
                Estate Experience
            </h1>
        </div>
        <div className='nav-list'>
            <div className='nav-link' onClick={() => navigate("/featured")}>
                Featured &nbsp;
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div className='nav-link' onClick={() => navigate("/properties")}>
                Properties &nbsp;
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection