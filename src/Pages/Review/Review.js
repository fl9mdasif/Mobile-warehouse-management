import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="row">
            <p className="text-bold text-3xl" >Name: {review.name}</p>
            <p><small>{review.reviewContent}</small></p>
        </div>
    );
};

export default Review;