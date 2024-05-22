import React from 'react';
import { Helmet } from 'react-helmet-async';


const Contact = () => {
    return (
        <div className='pt-8 pb-2'>
            <Helmet>
                <title>Contact us.</title>
            </Helmet>
            <div className="flex flex-col-reverse lg:flex-row p-4 lg:p-0 lg:gap-0 gap-4">
                <section data-aos="fade-right" className="container mx-auto bg-basic p-12 basis-1/2 text-white">
                    <div className="max-w-lg mx-auto px-4">
                        <form className="space-y-4 text-left">
                            <div className="flex flex-col" data-aos="fade-right" data-aos-delay="150" >
                                <label htmlFor="name" className="text-lg font-medium">Name</label>
                                <input type="text" id="name" name="name" className="input input-bordered" placeholder="Your Name" required />
                            </div>
                            <div className="flex flex-col" data-aos="fade-right" data-aos-delay="200" >
                                <label htmlFor="email" className="text-lg font-medium">Email</label>
                                <input type="email" id="email" name="email" className="input input-bordered" placeholder="Your Email" required />
                            </div>
                            <div className="flex flex-col" data-aos="fade-right" data-aos-delay="250" >
                                <label htmlFor="message" className="text-lg font-medium">Message</label>
                                <textarea id="message" name="message" className="textarea textarea-bordered h-32" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full" data-aos="fade-right" data-aos-delay="300" >Submit</button>
                        </form>
                    </div>
                </section>

                <section className="bg-blue-950 text-white py-20 p-12 basis-1/2" data-aos="fade-left">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4" data-aos="fade-left" data-aos-delay="150" >Get in Touch</h2>
                        <p className="text-lg" data-aos="fade-lrft" data-aos-delay="200" >Whether you have a question about a property or need assistance, we're here to help. Reach out to us today!</p>
                        <img src="https://i.ibb.co/qCzbS3d/27997026-tour-set-13-removebg-preview.png" alt="" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;