import React from 'react';
import Banner from './Banner';
import About from './Services';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import CTA from './CTA';
import Contact from './Contact';
const Home = () => {
    return (
        <div>
            <HeroGeometric />
            <About />
            <Contact />
            <CTA />
        </div>
    );
};

export default Home;