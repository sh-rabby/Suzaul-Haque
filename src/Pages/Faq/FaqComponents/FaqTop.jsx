import React from 'react';

const FaqTop = () => {
    return (
        <div>
            <div className='shadow-xl'>
                <div className="collapse collapse-arrow bg-gradient-to-r from-[#e3e9ed] via-[#fcfcfd] to-[#e3e9ed] border-b border-gray-300">
                    <input type="radio" name="my-accordion-2" defaultChecked className="peer" />
                    <div className="collapse-title font-semibold peer-checked:text-[#fc2164]">
                        What services do you offer as a web developer?
                    </div>
                    <div className="collapse-content text-sm font-poppins text-[#707376]">
                        I specialize in web design, front-end development, React.js development, and WordPress customization. My goal is to create websites that are visually appealing, highly functional, and user-friendly.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-gradient-to-r from-[#e3e9ed] via-[#fcfcfd] to-[#e3e9ed]  border-b border-gray-300">
                    <input type="radio" name="my-accordion-2" className="peer" />
                    <div className="collapse-title font-semibold peer-checked:text-[#fc2164]">
                        How long does it take to complete a web project?
                    </div>
                    <div className="collapse-content text-sm font-poppins text-[#707376]">
                        The timeline for a web project varies depending on its complexity. For smaller websites, it may take a few weeks, while larger projects, such as custom web applications, may take a few months. I ensure to communicate the timeline clearly from the start.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-r from-[#e3e9ed] via-[#fcfcfd] to-[#e3e9ed] border-b border-gray-300">
                    <input type="radio" name="my-accordion-2" className="peer" />
                    <div className="collapse-title font-semibold peer-checked:text-[#fc2164]">
                        Do you offer ongoing website maintenance?
                    </div>
                    <div className="collapse-content text-sm font-poppins text-[#707376]">
                        Yes, I offer website maintenance services to keep your site up-to-date, secure, and running smoothly. I can assist with updates, bug fixes, and improvements even after your website is live. How long does it take to complete a web project?
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-r from-[#e3e9ed] via-[#fcfcfd] to-[#e3e9ed]  border-b border-gray-300">
                    <input type="radio" name="my-accordion-2" className="peer" />
                    <div className="collapse-title font-semibold peer-checked:text-[#fc2164]">
                        Can you redesign my existing website?
                    </div>
                    <div className="collapse-content text-sm font-poppins text-[#707376]">
                        Absolutely! I can revamp your existing website to improve its design, functionality, and performance. Whether it's a complete overhaul or just a refresh, I work closely with you to make sure your vision is brought to life.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-r from-[#e3e9ed] via-[#fcfcfd] to-[#e3e9ed]  border-b border-gray-300">
                    <input type="radio" name="my-accordion-2" className="peer" />
                    <div className="collapse-title font-semibold peer-checked:text-[#fc2164]">
                        What technologies do you use for web development?
                    </div>
                    <div className="collapse-content text-sm font-poppins text-[#707376]">
                        I use modern technologies such as HTML5, CSS3, JavaScript, React.js, and WordPress, among others. I also prioritize responsive design, ensuring your website works perfectly on all devices.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-r from-[#e3e9ed] via-[#fcfcfd] to-[#e3e9ed]  border-b border-gray-300">
                    <input type="radio" name="my-accordion-2" className="peer" />
                    <div className="collapse-title font-semibold peer-checked:text-[#fc2164]">
                        How much does a website cost?
                    </div>
                    <div className="collapse-content text-sm font-poppins text-[#707376]">
                        The cost of a website depends on the project’s scope and complexity. I provide customized quotes based on your requirements. Feel free to reach out, and we can discuss your project to determine an accurate cost.
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FaqTop;