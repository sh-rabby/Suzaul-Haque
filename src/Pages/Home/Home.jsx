import React from 'react';
import Hero from './Home Componemts/Hero';
import Fearures from './Home Componemts/Fearures';
import MyPortfolio from './Home Componemts/MyPortfolio';
import MySkills from './Home Componemts/MySkills';
import TestimonialSlider from './Home Componemts/TestimonialSlider';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Fearures></Fearures>
            <MyPortfolio></MyPortfolio>
            <MySkills></MySkills>
            <TestimonialSlider></TestimonialSlider>
            
        </div>
    );
};

export default Home;