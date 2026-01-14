import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsFillTriangleFill } from 'react-icons/bs';

const Footer = () => {
    // Get environment variables
    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'israkparvez@gmail.com';
    const contactPhone = import.meta.env.VITE_CONTACT_PHONE || '+8801646846514';
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+8801646846514';
    const companyAddress = import.meta.env.VITE_COMPANY_ADDRESS || '123 Dhaka, Bangladesh';
    const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com';
    const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com';
    const twitterUrl = import.meta.env.VITE_TWITTER_URL || 'https://twitter.com';

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
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center lg:text-left">
                    {/* Brand Section */}
                    <motion.div
                        variants={itemVariants}
                        className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start"
                    >
                        <Link to="/" className="flex items-center gap-2">
                            <BsFillTriangleFill className="text-emerald-600 text-2xl" />
                            <span className="text-xl font-bold text-white">
                                Silio Digital
                            </span>
                        </Link>
                        <p className="mt-4 text-white/70 max-w-xs lg:max-w-none mx-auto lg:mx-0">
                            Empowering your digital presence
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        variants={itemVariants}
                        className="col-span-1 flex flex-col items-center lg:items-start"
                    >
                        <h6 className="text-lg font-semibold mb-4 text-white">Quick Links</h6>
                        <div className='flex flex-col gap-3 w-full lg:w-auto'>
                            <Link to="/" className="text-white/70 hover:text-emerald-500 transition-colors">
                                Home
                            </Link>
                            <Link to="/about" className="text-white/70 hover:text-emerald-500 transition-colors">
                                About
                            </Link>
                            <Link to="/services" className="text-white/70 hover:text-emerald-500 transition-colors">
                                Services
                            </Link>
                            <Link to="/contact" className="text-white/70 hover:text-emerald-500 transition-colors">
                                Contact
                            </Link>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="col-span-1 flex flex-col items-center lg:items-start"
                    >
                        <h6 className="text-lg font-semibold mb-4 text-white">Social</h6>
                        <div className="flex flex-col gap-3 w-full lg:w-auto">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=Hello%20there!%20I%20would%20like%20to%20discuss%20about%20a%20Project.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center lg:justify-start gap-2 text-white/70 hover:text-emerald-500 transition-colors"
                            >
                                <FaWhatsapp className="text-xl" />
                                <span>WhatsApp</span>
                            </a>
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center lg:justify-start gap-2 text-white/70 hover:text-emerald-500 transition-colors"
                            >
                                <FaLinkedin className="text-xl" />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href={instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center lg:justify-start gap-2 text-white/70 hover:text-emerald-500 transition-colors"
                            >
                                <FaInstagram className="text-xl" />
                                <span>Instagram</span>
                            </a>
                            <a
                                href={twitterUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center lg:justify-start gap-2 text-white/70 hover:text-emerald-500 transition-colors"
                            >
                                <FaTwitter className="text-xl" />
                                <span>Twitter</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={itemVariants}
                        className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start"
                    >
                        <h6 className="text-lg font-semibold mb-4 text-white">Contact</h6>
                        <a href={`mailto:${contactEmail}`} className="text-white/70 hover:text-emerald-500 transition-colors block mb-2 break-all lg:break-normal">
                            {contactEmail}
                        </a>
                        <a href={`tel:${contactPhone}`} className="text-white/70 hover:text-emerald-500 transition-colors block mb-2">
                            {contactPhone}
                        </a>
                        <p className="text-white/70 max-w-[200px] lg:max-w-none mx-auto lg:mx-0">
                            {companyAddress}
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