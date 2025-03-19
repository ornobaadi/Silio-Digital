import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsFillTriangleFill } from 'react-icons/bs';

const Footer = () => {
    // Framer Motion variants
    const containerVariants = {
        hidden: { opacity: 50, y: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeInOut' },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
    };

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="bg-black/95 text-white py-12 backdrop-blur-md border-t border-white/10"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-start"
                    >
                        <Link to="/" className="flex items-center gap-2">
                            <BsFillTriangleFill className="text-emerald-600 text-2xl" />
                            <span className="text-xl font-bold text-white">
                                Silio Digital
                            </span>
                        </Link>
                        <p className="mt-4 text-white/70">
                            Empowering your digital presence
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-start"
                    >
                        <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
                        <div className='flex flex-col gap-3'>
                            <Link to="/" className="text-white/70 hover:text-green-500 transition-colors">
                                Home
                            </Link>
                            <Link to="/about" className="text-white/70 hover:text-green-500 transition-colors">
                                About
                            </Link>
                            <Link to="/services" className="text-white/70 hover:text-green-500 transition-colors">
                                Services
                            </Link>
                            <Link to="/contact" className="text-white/70 hover:text-green-500 transition-colors">
                                Contact
                            </Link>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-start"
                    >
                        <h6 className="text-lg font-semibold mb-4">Social</h6>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://wa.me/+8801646846514?text=Hello%20there!%20I%20would%20like%20to%20discuss%20about%20a%20Project."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white/70 hover:text-green-500 transition-colors"
                            >
                                <FaWhatsapp className="text-xl" />
                                <span>WhatsApp</span>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white/70 hover:text-indigo-400 transition-colors"
                            >
                                <FaLinkedin className="text-xl" />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white/70 hover:text-pink-500 transition-colors"
                            >
                                <FaInstagram className="text-xl" />
                                <span>Instagram</span>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white/70 hover:text-blue-400 transition-colors"
                            >
                                <FaTwitter className="text-xl" />
                                <span>Twitter</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-start"
                    >
                        <h6 className="text-lg font-semibold mb-4">Contact</h6>
                        <Link to="mailto:siliodigitalagency@gmail.com" className="text-white/70 hover:text-emerald-500 transition-colors">Email: siliodigitalagency@gmail.com</Link>
                        <Link to="tel:+8801646846514" className="text-white/70 hover:text-blue-400 transition-colors">Phone: +880 1646 846514</Link>
                        <p className="text-white/70">
                            Address: 123 Dhaka, Bangladesh
                        </p>
                    </motion.div>
                </div>

                {/* Copyright Section */}
                <motion.div
                    variants={itemVariants}
                    className="border-t border-white/10 mt-8 pt-8 text-center text-white/70"
                >
                    <p>
                        &copy; {new Date().getFullYear()} Silio Digital. All
                        rights reserved.
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;