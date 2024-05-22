import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-basic'>
        <Helmet>
            <title>কিছু একটা সমস্যা হয়েছে | পৃষ্ঠা খুজে পাওয়া যায় নি ।</title>
        </Helmet>
        <div className="wrapper backdrop-blur-lg p-24 rounded-lg">
            
            <img src="https://i.ibb.co/YdFnxW3/Colorful-Modern-Infinity-Technology-Free-Logo.png" alt="" className='w-44 mx-auto rounded shadow-xl'/>
            <h1 className="capitalize font-bold text-4xl text-white py-5">কিছু একটা সমস্যা হয়েছে,পৃষ্ঠা খুজে পাওয়া যায় নি ।</h1>
            <Link to={"/"} className="btn text-basic capitalize font-bold rounded-none w-full ">প্রথম পাতা</Link>
        </div>
    </div>
    );
};

export default Error;