import React from 'react';
import { FaDollarSign, FaLightbulb } from 'react-icons/fa';
import img1 from '../../../Assets/6193739_3125746-removebg-preview.png'

const WhyChooseUs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="">
                        <img src={img1} alt="" />
                    </div>
                    <div className="card bg-base-100">

                        <div className="card-body">
                            <h2 className='text-4xl font-bold text-left text-primary'>We Create Opportunity to Reach Potential
                            </h2>
                            <div className='w-4/5'>
                                <div className='flex text-left'>
                                    <FaLightbulb className='text-5xl text-yellow-400'></FaLightbulb>
                                    <p className='mx-2 font-medium'>We offers access to a vast network of skilled and experienced professinals from different parts of the world.</p>
                                </div>
                                <div className='flex text-left mt-2'>
                                    <FaDollarSign className='text-5xl text-yellow-400'></FaDollarSign>
                                    <p className='mx-2 font-medium'> Hiring a talent through a marketplace can often be more cost-effective than traditional agency.</p>
                                </div>
                            </div>
                            <h2 className='text-2xl font-bold text-left text-secondary'> Get in Touch</h2>

                            <div className=" flex">

                                <input type="email" placeholder="Your email" className="input input-bordered w-2/3" />
                                <button className="btn btn-primary mx-2">Subscribe</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;