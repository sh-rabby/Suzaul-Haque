import React from 'react';
import ContactAddress from './Contact Components/ContactAddress';
import ContactForm from './Contact Components/ContactForm';

const Contact = () => {
    return (
        <div className="w-11/12 py-16 mx-auto md:w-10/12 lg:w-8/12">
            <div className="text-center">
                <h3 className="font-bold text-blue-600">CONTACT ME</h3>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#3C3E41] py-6">Get In Touch</h1>
            </div>
            <div className='flex flex-col items-center justify-between gap-6 py-6 lg:flex-row'>
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