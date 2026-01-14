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
                className="relative max-w-6xl mx-auto bg-white/5 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm"
            >

                <div className="relative z-10 px-6 py-16 text-center">
                    <div className="max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl font-bold text-white mb-6"
                        >
                            Ready to Elevate Your Business?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg mb-10 text-white/70 leading-relaxed max-w-2xl mx-auto"
                        >
                            Unlock transformative digital solutions that supercharge your growth and innovation with cutting-edge strategies tailored to your unique vision.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex justify-center"
                        >
                            <button
                                className="px-10 py-4 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors duration-200"
                            >
                                Start Your Project
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CTA;