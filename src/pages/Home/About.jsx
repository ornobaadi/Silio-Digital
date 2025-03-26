import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Users, BarChart2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#030303] border-t border-white/10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block bg-white/10 text-purple-500 uppercase text-sm font-bold px-4 py-2 rounded-full mb-4"
                    >
                        Who We Are
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        About Silio Digital
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-white/60 max-w-3xl mx-auto text-lg"
                    >
                        We're a full-service digital agency helping businesses thrive in the online world.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                                {/* Placeholder for agency image/video */}
                                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-emerald-500/20 flex items-center justify-center">
                                    <img src="/public/F3WKVNxXwAMNeQH.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md w-1/2">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-emerald-500/20 rounded-lg">
                                    <Rocket className="w-5 h-5 text-emerald-500" />
                                </div>
                                <span className="text-white text-sm font-medium">10+ Years Experience</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Empowering Your Digital Presence
                        </h3>
                        <p className="text-white/70 mb-6">
                            At Silio Digital, we help businesses thrive with stunning designs, strategic marketing, 
                            and seamless development. From logo creation to full-scale web solutions, we bring your 
                            vision to life with our comprehensive digital services.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <ShieldCheck className="w-5 h-5 text-purple-500" />
                                    <span className="text-white font-medium">Trusted</span>
                                </div>
                                <p className="text-white/60 text-sm">
                                    100+ satisfied clients worldwide
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <Users className="w-5 h-5 text-emerald-500" />
                                    <span className="text-white font-medium">Dedicated</span>
                                </div>
                                <p className="text-white/60 text-sm">
                                    Expert team focused on your success
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <BarChart2 className="w-5 h-5 text-blue-500" />
                                    <span className="text-white font-medium">Results</span>
                                </div>
                                <p className="text-white/60 text-sm">
                                    Data-driven strategies that deliver
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 transition-all"
                            >
                                Learn More
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all"
                            >
                                Our Process
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-white mb-2">10+</div>
                        <div className="text-white/60">Years Experience</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-white mb-2">100+</div>
                        <div className="text-white/60">Happy Clients</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-white mb-2">200+</div>
                        <div className="text-white/60">Projects Completed</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-white mb-2">24/7</div>
                        <div className="text-white/60">Support Available</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;