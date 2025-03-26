import React, { useState } from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Framer Motion variants for animations
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
    };

    const linkVariants = {
        hover: { scale: 1.05, color: '#10B981' }, // Green-500 for hover
        tap: { scale: 0.95 },
    };

    const buttonVariants = {
        hover: { scale: 1.05, backgroundColor: '#7C3AED' }, // Purple-600 for hover
        tap: { scale: 0.95 },
    };

    const scrollToSection = (id) => {
        if (id === 'home') {
            // Special handling for home section
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            const element = document.getElementById(id);
            if (element) {
                const offset = 80; // Adjust this value based on your navbar height
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

    const links = (
        <>
            <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                <a 
                    href="#home" 
                    onClick={(e) => { e.preventDefault(); scrollToSection("home"); }} 
                    className="text-gray-300 hover:text-green-500 transition-all duration-200"
                >
                    Home
                </a>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                <a 
                    href="#about" 
                    onClick={(e) => { e.preventDefault(); scrollToSection("about"); }} 
                    className="text-gray-300 hover:text-green-500 transition-all duration-200"
                >
                    About
                </a>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                <a 
                    href="#services" 
                    onClick={(e) => { e.preventDefault(); scrollToSection("services"); }} 
                    className="text-gray-300 hover:text-green-500 transition-all duration-200"
                >
                    Services
                </a>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                <a 
                    href="#contact" 
                    onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} 
                    className="text-gray-300 hover:text-green-500 transition-all duration-200"
                >
                    Contact
                </a>
            </motion.div>
        </>
    );

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex justify-center p-5 py-6 fixed w-full z-50"
        >
            <div className="w-full max-w-6xl inline-flex justify-between items-center bg-black/70 p-6 py-4 rounded-2xl shadow-md backdrop-blur-md border border-white/10">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div 
                            tabIndex={0} 
                            role="button" 
                            className="btn btn-ghost"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {isMobileMenuOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-black/70 rounded-box z-10 mt-3 w-52 p-2 shadow border border-white/10"
                            >
                                {links}
                            </ul>
                        )}
                    </div>
                    <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }} className="text-xl font-bold flex items-center gap-3 text-white">
                        <BsFillTriangleFill className="text-emerald-600 text-2xl" />
                        Silio Digital
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8 text-md font-medium">{links}</ul>
                </div>

                <div className="navbar-end">
                    <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <a 
                            href="#contact" 
                            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                            className="px-6 py-2 bg-purple-500 text-white font-medium rounded-lg transition-all duration-200 hover:bg-purple-600 flex items-center gap-2"
                        >
                            <span>Get Started</span>
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
            </div>
        </motion.div>
    );
};

export default Navbar;