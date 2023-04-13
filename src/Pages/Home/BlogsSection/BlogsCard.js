import React from 'react';
import { FaPlus, FaUser } from 'react-icons/fa';
import img1 from '../../../Assets/4911014_2517908.jpg';

const BlogsCard = ({ blog }) => {
    const { title, author, date_published } = blog;
    const truncatedTitle = title.substring(0, 50) + '...';
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between font-semibold text-left'>
                        <p>{author}</p>
                        <p>Published: {date_published}</p>
                    </div>
                    <h2 className="card-title text-xl font-bold text-left">{truncatedTitle}</h2>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Read more <FaPlus className='mx-2' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsCard;