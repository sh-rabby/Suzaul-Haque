import React from 'react';
import Hero from './Home Componemts/Hero';
import MyPortfolio from './Home Componemts/MyPortfolio';
import MySkills from './Home Componemts/MySkills';
import TestimonialSlider from './Home Componemts/TestimonialSlider';
import Features from './Home Componemts/Features';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Features></Features>
            <MyPortfolio></MyPortfolio>
            <MySkills></MySkills>
            <TestimonialSlider></TestimonialSlider>
            
        </div>
    );
};

export default Home;