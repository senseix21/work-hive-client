import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const ServicesSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `https://work-hive-server.vercel.app/services`
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                setServices(data.splice(0, 3));
            });
    }, [])


    return (
        <div className='my-10'>
            <h3 className='text-3xl text-gray-700 font-bold p-5'>We Are Dedicated To <span className='text-primary'>Serve You All Time.</span>
            </h3>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    services.map((service) =>
                        <ServicesCard
                            key={service._id}
                            service={service}
                        >
                        </ServicesCard>
                    )
                }
            </div>
            <Link to={'/services'}><button className='btn btn-outline btn-primary mt-5'>See More Services</button></Link>
        </div>
    );
};

export default ServicesSection;