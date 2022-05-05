import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="border mx-1 row">
            <h5 className="text-xl text-bold text-3xl" >Name: {review.name}</h5>
            <p><small>{review.reviewContent}</small></p>
        </div>
    );
};

export default Review;