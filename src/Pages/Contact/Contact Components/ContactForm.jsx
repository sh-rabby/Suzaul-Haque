import React from 'react';

const ContactForm = () => {
    return (
        <div className='bg-gray-100 rounded-xl shadow-xl py-12 px-8'>
            <div>
                <h1 className='font-poppins text-[#707376] text-md'>If you have any porject or need help. <span className='text-[#fc2164]'>Just Say Hello!</span> </h1>
            </div>
            <div>
                <form className="py-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="input w-full"
                            name="name"
                            required
                            pattern="[A-Za-z\s]+"
                            title="Please enter letters only"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="input w-full"
                            name="email"
                            required
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="input w-full"
                            name="phone"
                            required
                            pattern="[0-9]{7,15}"
                            title="Please enter a valid phone number (digits only, 7-15 digits)"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="input w-full"
                            name="subject"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            className="textarea w-full"
                            rows="5"
                            placeholder="Message"
                            name="message"
                            required
                        ></textarea>
                    </div>
                    <div className="w-full">
                        <button
                            type="submit"
                            className="w-full text-[#fc2164] bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] py-3 rounded-lg shadow-md font-poppins font-semibold hover:transition hover:scale-105">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;