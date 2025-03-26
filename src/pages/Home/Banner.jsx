import React from 'react';
import agency from "/public/agency.json";
import Lottie from 'lottie-react';

const Banner = () => {
    return (
        <section id='home' className='h-screen w-full'>
            <div className="hero py-40">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold">Empowering Your <br /> Digital Presence</h1>
                        <p className="py-6">
                        We help businesses thrive with stunning designs, strategic marketing, and seamless development. From logo creation to full-scale web solutions, we bring your vision to life.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                        <Lottie animationData={agency} loop={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;