import React from 'react';
import ContactAddress from './Contact Components/ContactAddress';
import ContactForm from './Contact Components/ContactForm';

const Contact = () => {
    return (
        <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-16">
            <div className="text-center">
                <h3 className="text-[#fc2164] font-medium">CONTACT ME</h3>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#3C3E41] py-6">Get In Touch</h1>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-6 py-6'>
                <div className='w-full lg:w-1/2'>
                    <ContactAddress />
                </div>
                <div className='w-full lg:w-1/2'>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;