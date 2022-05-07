import React from 'react';
import './BanarSection.css';
import banarImg from '../../../images/banar-img.png'
import { useNavigate } from 'react-router-dom';

const Banar = () => {
    const navigate = useNavigate();

    const navigateProductPage = () => {
        navigate('/product')
    }
    return (
        <div className='mt-3 container hero-container'>
            <div className='text-container m-3 pb-3'>
                <h2>Mi note 11 pro 5G  </h2>
                <p>120HZ FHD+ AMOLED DotDisplay 67W turbo charging </p>
                <button onClick={navigateProductPage} className='button'>View details</button>

            </div>
            <div className='image-container'>
                <img src={banarImg} alt="Hero Section Banner" />
            </div>
        </div>
    );
};

export default Banar;