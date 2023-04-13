import React from 'react';
import img1 from '../../../Assets/26433015_training_set_4-removebg-preview.png';
import { IoMdCall } from 'react-icons/io'
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} alt='' />
                    <div>
                        <h3 className='text-xl font-bold text-primary text-left'>About Our Company</h3>
                        <h1 className="text-4xl font-bold text-left">Top-notch on demand services provided by certified specialists.</h1>

                        <p className="py-6 text-left">From plumbing to personal training, our certified specialists deliver top-notch on-demand services. Say goodbye to DIY disasters and hello to hassle-free expertise, just a few clicks away.</p>
                        <div className='flex'>
                            <button className="btn btn-primary ">Get Started</button>
                            <div className='flex items-center mx-5 px-2 shadow-xl rounded-md'>
                                <IoMdCall className='text-4xl mx-2'></IoMdCall>
                                <Link>
                                    <p className='font-bold'>Call for help</p>
                                    <p className='font-bold'>+095-738-428</p>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;