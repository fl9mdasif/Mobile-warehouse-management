import React from 'react';
import './Review.css'
const Review = ({ review }) => {
    return (
        <div className="border mx-1 row mb-3">
            <h5 className="name text-xl text-bold text-3xl py-2" > {review.name}</h5>
            <p><small>{review.reviewContent}</small></p>
        </div>
    );
};

export default Review;