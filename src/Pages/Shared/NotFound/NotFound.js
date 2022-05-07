import React from 'react';
import img from '../../../images/404 error.jpg'
const notFound = () => {
    return (
        <div className="container">
            <div className='w-100 mx-auto'> <img className="w-100" src={img} alt="" /></div>
        </div>
    );
};

export default notFound;