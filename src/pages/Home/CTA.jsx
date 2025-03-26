import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <div className="relative w-full px-4 py-16 sm:px-6 lg:px-8 bg-[#030303]">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative max-w-6xl mx-auto bg-gradient-to-br from-[#0a0a0a] to-[#1e1e1e] rounded-3xl shadow-2xl border border-gray-800/50 overflow-hidden"
            >
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-purple-600/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/30 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 px-6 py-16 text-center">
                    <div className="max-w-3xl mx-auto">
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 mb-6"
                        >
                            Ready to Elevate Your Business?
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg mb-10 text-gray-300 leading-relaxed max-w-2xl mx-auto"
                        >
                            Unlock transformative digital solutions that supercharge your growth and innovation with cutting-edge strategies tailored to your unique vision.
                        </motion.p>
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex justify-center space-x-6"
                        >
                            <button
                                className="group relative px-10 py-4 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl hover:from-purple-700 hover:to-blue-700"
                            >
                                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/50 to-blue-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative z-10">Start Your Project</span>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CTA;