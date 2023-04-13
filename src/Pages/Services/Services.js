import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='grid grid-cols-3 gap-5 my-10'>
            {
                services.map((service) =>
                    <ServiceCard
                        key={service._id}
                        service={service}>
                    </ServiceCard>
                )
            }
        </div>
    );
};

export default Services;