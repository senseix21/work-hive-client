import React from 'react';
import heroImg from '../../../Assets/26432755_freelance_set_4-removebg-preview (1).png'


const HeroBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={heroImg} className="rounded-lg" alt='' />
                    <div className='text-left'>
                        <h1 className="text-6xl font-bold">Work smarter, not harder: <span className='text-primary'>Join WorkHive today</span></h1>

                        <p className="py-6">Tired of sweating bullets while your lazy colleagues get away with doing the bare minimum? Join WorkHive and start working smarter, not harder. Your sanity (and maybe even your boss) will thank you.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;