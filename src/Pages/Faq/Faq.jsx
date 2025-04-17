import React from 'react';
import FaqTop from './FaqComponents/FaqTop';

const Faq = () => {
    return (
        <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-16">
            <div className="text-center">
                <h3 className="text-blue-600 font-bold">FAQ</h3>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#3C3E41] py-6">Frequently Asked Questions</h1>
            </div>
            <div className='py-6'>
                <FaqTop></FaqTop>
            </div>

        </div>
    );
};

export default Faq;