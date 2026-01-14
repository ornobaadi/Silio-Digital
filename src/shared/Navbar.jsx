import React, { useState, useEffect } from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    // Framer Motion variants
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
    };

    const linkVariants = {
        hover: { scale: 1.05, color: '#10B981' },
        tap: { scale: 0.95 },
    };

    const buttonVariants = {
        hover: { scale: 1.05 },
        tap: { scale: 0.95 },
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                when: "beforeChildren"
            }
        },
        exit: { opacity: 0, y: -20 }
    };

    const mobileLinkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const scrollToSection = (id) => {
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(id);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex justify-center p-5 fixed w-full z-50"
        >
            {/* Floating Navbar Container */}
            <div className={`w-full max-w-6xl inline-flex justify-between items-center p-6 py-4 rounded-2xl shadow-md backdrop-blur-md border border-white/10 transition-all duration-300 ${scrolled ? 'bg-black/80' : 'bg-black/70'
                }`}>
                {/* Logo */}
                <motion.a
                    href="#home"
                    onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <BsFillTriangleFill className="text-emerald-500 text-xl sm:text-2xl" />
                    <span className="text-white font-bold text-lg sm:text-xl">Silio Digital</span>
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center justify-center flex-grow">
                    <ul className="flex gap-6">
                        {navLinks.map((link) => (
                            <motion.li
                                key={link.id}
                                variants={linkVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <a
                                    href={`#${link.id}`}
                                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                                    className="text-gray-300 hover:text-green-500 transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {link.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Get Started Button */}
                <div className="hidden lg:block">
                    <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                            className="px-4 py-2 sm:px-6 sm:py-2.5 bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:bg-emerald-600 flex items-center gap-2 text-sm sm:text-base border border-white/10"
                        >
                            <span>Get Started</span>
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 sm:h-5 sm:w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                initial={{ x: 0 }}
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </motion.svg>
                        </a>
                    </motion.div>
                </div>

                {/* Mobile Navigation Container */}
                <div className="lg:hidden flex items-center gap-4">
                    {/* Mobile Get Started Button */}
                    <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="hidden sm:block"
                    >
                        <a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                            className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:bg-emerald-600 flex items-center gap-2 text-sm border border-white/10"
                        >
                            <span>Get Started</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        className="p-2 text-white focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Floating Glass Panel */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                        className="lg:hidden absolute top-24 left-1/2 transform -translate-x-1/2 w-[calc(100%-2.5rem)] max-w-md bg-black/70 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 px-6 py-4"
                    >
                        <motion.ul className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.id}
                                    variants={mobileLinkVariants}
                                    className="border-b border-white/10 last:border-0 pb-3 last:pb-0"
                                >
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.id);
                                        }}
                                        className="text-white text-lg font-medium hover:text-green-500 transition-colors duration-200 block py-2"
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Get Started Button - Mobile Dropdown */}
                        <motion.div
                            variants={mobileLinkVariants}
                            className="mt-4 sm:hidden"
                        >
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                                className="w-full px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 border border-white/10"
                            >
                                <span>Get Started</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Navbar;