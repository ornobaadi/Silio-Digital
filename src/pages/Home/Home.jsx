import React from 'react';
import Banner from './Banner';
import About from './About';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

const Home = () => {
    return (
        <div>
            <HeroGeometric />
            {/* <Banner></Banner> */}
            <About />
        </div>
    );
};

export default Home;