import React from 'react';

const ContactForm = () => {
    return (
        <div className='px-8 py-12 bg-gradient-to-r from-[#e3e9ed] via-[#fcfcfd] to-[#e3e9ed]  shadow-xl rounded-xl'>
            <div>
                <h1 className='font-poppins text-[#707376] text-md'>If you have any porject or need help. <span className='font-semibold text-blue-600'>Just Say Hello!</span> </h1>
            </div>
            <div>
                <form className="py-6 space-y-4 " onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-4 md:flex-row ">
                        <input
                            type="text"
                            placeholder="Name"
                            className="input w-full bg-white text-[#3C3E41]"
                            name="name"
                            required
                            pattern="[A-Za-z\s]+"
                            title="Please enter letters only"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="input w-full bg-white text-[#3C3E41]"
                            name="email"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="input w-full bg-white text-[#3C3E41]"
                            name="phone"
                            required
                            pattern="[0-9]{7,15}"
                            title="Please enter a valid phone number (digits only, 7-15 digits)"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="input w-full bg-white text-[#3C3E41]"
                            name="subject"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            className="textarea w-full bg-white text-[#3C3E41]"
                            rows="5"
                            placeholder="Message"
                            name="message"
                            required
                        ></textarea>
                    </div>
                    <div className="w-full ">
                        <button
                            type="submit"
                            className="w-full py-3 font-semibold text-white bg-blue-600 border-none rounded-lg shadow-md t font-poppins hover:transition hover:scale-105">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;