import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviewData.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (

        <div className="container border my-5">
            <h2 id="reviewH2" className="py-2 border  text-center my-4">Customer Reviews</h2>
            <div className="reviews-container">
                {
                    reviews.slice(3).map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>

        </div >
    );
};

export default Reviews;