import React from 'react';
import './BanarSection.css';
import banarImg from '../../../images/banar-img.png'

const Banar = () => {
    return (
        <div className='mt-3 container hero-container'>
            <div className='text-container m-3 pb-3'>
                <h2>Top Selling products</h2>
                <p>At TOFFPARK, you will get imported shoes. We always sell Genuine Leather Footwears </p>
                <button className='button'>View more</button>

            </div>
            <div className='image-container'>
                <img src={banarImg} alt="Hero Section Banner" />
            </div>
        </div>
    );
};

export default Banar;