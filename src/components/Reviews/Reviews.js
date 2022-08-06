import React from 'react';
import LoadData from '../../hooks/customHook';
const Reviews = () => {
    const [reviews, setReviews] = LoadData();
    return (
        <div>
            <div className='review'>
                {reviews.map(review => (
                    <div className='each-review'>
                        <p>Name: {review.name}</p>
                        <p>Review: {review.review}</p>
                        <p>Ratings: {review.ratings}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;