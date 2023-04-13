import React from 'react';
import BlogsSection from './BlogsSection/BlogsSection';
import CTA from './CTA/CTA';
import HeroBanner from './HeroBanner/HeroBanner';
import ServicesSection from './ServicesSection/ServicesSection';
import Stats from './Stats/Stats';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <CTA></CTA>
            <Stats></Stats>
            <ServicesSection></ServicesSection>
            <BlogsSection></BlogsSection>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;