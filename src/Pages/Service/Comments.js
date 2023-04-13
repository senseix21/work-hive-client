import React from 'react';
import { FaStar, FaUserAlt } from 'react-icons/fa';

const Comments = ({ review }) => {
    const { name, rating, desc } = review;
    // console.log(comment);
    return (
        <div className='shadow-lg rounded-md p-2'>
            <div className='flex items-center '>
                <FaUserAlt className='text-4xl '></FaUserAlt>
                <div className='flx'>
                    <h3 className='font-semibold'>{name}</h3>
                    <div className='flex items-center mx-2'>
                        {[...Array(5)].map((star, index) => {
                            const filled = index < rating;
                            return (
                                <FaStar key={index} style={{ color: filled ? 'red' : 'gray' }} />
                            );
                        })}
                        ({rating})
                    </div>
                </div>
            </div>
            <p className='text-left'>{desc}</p>
        </div>
    );
};

export default Comments;