import React from 'react';
import './BanarSection.css';
import banarImg from '../../../images/banar-img.png'

const Banar = () => {
    return (
        <div className='container hero-container'>
            <div className='text-container'>
                <h2>Premium in Quality</h2>
                <p>At TOFFPARK, you will get imported shoes. We always sell Genuine Leather Footwears </p>
                <button className='button'>Buy Now</button>

            </div>
            <div className='image-container'>
                <img src={banarImg} alt="Hero Section Banner" />
            </div>
        </div>
    );
};

export default Banar;