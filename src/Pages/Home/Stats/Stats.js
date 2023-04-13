import React from 'react';

const Stats = () => {
    return (
        <div>
            <div className="stats stats-vertical lg:stats-horizontal bg-gray-400 shadow lg:p-10 my-10">

                <div className=" mx-10 p-5">
                    <div className="stat-title text-white">Certified Specialists</div>
                    <div className="stat-value text-7xl text-primary">31K</div>
                    <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
                </div>

                <div className=" mx-10 p-5">
                    <div className="stat-title text-white">New Customers</div>
                    <div className="stat-value text-7xl text-primary">4,200</div>
                    <div className="stat-desc text-white">↗︎ 400 (22%)</div>
                </div>

                <div className=" mx-10 p-5">
                    <div className="stat-title text-white">Revenue Generated</div>
                    <div className="stat-value text-7xl text-primary">1.2 M+</div>
                    <div className="stat-desc text-white">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Stats;