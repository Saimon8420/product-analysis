import React from 'react';
import LoadData from '../../hooks/customHook';
import './Reviews.css';
const Reviews = () => {
    const [reviews, setReviews] = LoadData();
    return (
        <div>
            <div className='review-cart'>
                {reviews.map(review => (
                    <div className='each-cart-review'>
                        <h4>Name: {review.name}</h4>
                        <p>Review: {review.review}</p>
                        <p> <small>
                            Ratings: {review.ratings}</small>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;