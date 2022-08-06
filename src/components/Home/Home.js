import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import LoadData from '../../hooks/customHook';
const Home = () => {
    const [reviews, setReviews] = LoadData();
    return (
        <div>
            <div className='display-site'>
                <div>
                    <h2>Yamaha MT-15 V.2</h2>
                    <h4>Dark side of Japan, your next power house. Master of Torque</h4>
                    <p>Features:</p>
                    <p>Displacement:155 cc, Engine Type:Liquid cooled, 4-stroke, SOHC, 4-valve, No. of Cylinders:1, Max Power:18.4 PS @ 10000 rpm, Max Torque:14.1 Nm @ 7500 rpm,
                        Front Brake:Disc, with single channel ABS,
                        Rear Brake:Disc,Fuel Capacity:10 L</p>
                </div>
                <img src="https://24newsdaily.com/wp-content/uploads/2022/04/Yamaha-MT-15-V2.jpg" alt="" />
            </div>
            <h3>Customer Reviews: {reviews.length}</h3>
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
            <Link to='/review'>
                <button>See All Reviews</button></Link>
        </div>
    );
};

export default Home;