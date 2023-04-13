import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from '../../../Assets/827416_32497-NYMXLT.jpg'

const ServicesCard = ({ service }) => {
    const { _id, image, name, description, price, rating } = service;
    const truncatedDescription = description.substring(0, 100) + '...';


    return (
        <div >
            <div className="card card-compact w-80 bg-base-100 shadow-xl text-left mx-auto">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex items-center'>
                        {[...Array(5)].map((star, index) => {
                            const filled = index < rating;
                            return (
                                <FaStar key={index} style={{ color: filled ? 'red' : 'gray' }} />
                            );
                        })}
                        ({rating})
                    </div>
                    <p>{truncatedDescription}</p>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold'>{price}</p>
                        <Link to={`service/${_id}`} className="btn btn-primary">Buy Now</Link >

                    </div>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;