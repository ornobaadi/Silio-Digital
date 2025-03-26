import React from 'react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import CTA from './CTA';
import Contact from './Contact';
import Services from './Services';
import About from './About';
const Home = () => {
    return (
        <div>
            <HeroGeometric />
            <About />
            <Services />
            <Contact />
            <CTA />
        </div>
    );
};

export default Home;