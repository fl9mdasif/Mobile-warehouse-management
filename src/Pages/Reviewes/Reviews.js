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

        <div className="container border ">
            <h2 className=" border  text-center my-5">Customer Reviews</h2>
            <div className="reviews-container">
                {
                    reviews.slice(3).map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>

        </div >
    );
};

export default Reviews;