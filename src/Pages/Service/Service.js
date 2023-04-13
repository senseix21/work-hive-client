import React, { useState, useContext, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import img1 from '../../Assets/4029422_16299.jpg'
import { AuthContext } from '../../Context/UserContext';
import Comments from './Comments';

const Service = () => {
    const { name, price, rating, _id, description, comments } = useLoaderData();
    console.log(comments);
    const { user } = useContext(AuthContext);

    //Load reviews data from server
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://work-hive-server.vercel.app/reviews?id=${_id}`)
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, []);

    //Set up user rating 
    const [newRating, setRating] = useState(0);
    let maxRating = 5;
    const handleRatingClick = (index) => {
        setRating(index + 1);
    }
    console.log(`rating`, newRating);



    const handleReviewSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const review = event.target.review.value;
        console.log(`review`, review);

        const comment = {
            id: _id,
            name: user.displayName,
            img: user.photoURL,
            desc: review,
            rating: newRating,
            date: new Date().toISOString(),

        }
        console.log(`comment`, comment);

        fetch(`https://work-hive-server.vercel.app/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comment)
        })
            .then(result => result.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Review submitted successfully!')
                    form.reset();
                }
            })
            .catch(err => console.log(err));
    }



    return (
        <div className='grid lg:grid-cols-5 lg:mx-auto mb-10'>
            <div className="lg:col-span-3">
                <h1 className='text-4xl text-primary font-bold text-left'>{name}</h1>
                <p className='text-left mt-5 px-2'>{description}</p>
                <div className='flex items-center mt-5'>
                    <button className='btn btn-active'>Bestseller</button>
                    <div className='flex items-center mx-2'>
                        ({rating})
                        {[...Array(5)].map((star, index) => {
                            const filled = index < rating;
                            return (
                                <FaStar key={index} style={{ color: filled ? 'red' : 'gray' }} />
                            );
                        })}
                        <p>(17,984 ratings)</p>
                    </div>
                    <p>18,978 customers</p>
                </div>
                <p className='font-semibold text-left mt-5'>Provided by <span className='text-primary'>MH Zubair Ali</span></p>
                <div className='mt-10'>
                    <h3 className='text-3xl text-secondary font-bold text-left my-5'>Reviews:</h3>
                    <div className='grid lg:grid-cols-2 gap-5'>
                        {
                            reviews.map((review) =>
                                <Comments
                                    key={review.index}
                                    review={review}>
                                </Comments>)
                        }
                    </div>
                    <div>

                        <h3 className='text-2xl font-bold text-primary text-left mt-5'>Post your review:</h3>
                        <form onSubmit={handleReviewSubmit}>
                            <div className='flex font-bold'>
                                <p className='font-bold'>{user.displayName}</p>
                            </div>
                            <div className='p-5 flex items-center '>
                                {/* <p className='mx-2'>Rating:</p><Rating maxRating={5} /> */}
                                <div className='flex'>
                                    {[...Array(maxRating)].map((_, index) => (
                                        <FaStar
                                            key={index}
                                            style={{ color: index < newRating ? 'red' : '#e4e5e9' }}
                                            onClick={() => handleRatingClick(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <textarea name='review' placeholder="Write your Review..." className="textarea textarea-bordered textarea-lg w-full flex justify-start" ></textarea>

                            <button type='submit' className='btn btn-outline mt-5 flex justify-start'> Submit your review</button>

                        </form>
                    </div>
                </div>
            </div>

            {/* Right side  */}
            <div className="lg:col-span-2  mx-auto">
                <div className="card w-96 bg-base-100 shadow-xl sticky top-15 ">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-left">{price}</h2>
                        <div className="card-actions mt-2">
                            <button className="btn btn-outline w-full">Add to cart</button>
                            <button className="btn btn-primary w-full">Buy Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;