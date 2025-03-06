import React from 'react';
import { motion } from "motion/react"

const ServiceCard = ({ number, title, description, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="group bg-base-100 border border-base-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
        >
            <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                    <span className={`text-sm font-mono font-bold text-white ${color} px-2 py-1 rounded`}>
                        {number}
                    </span>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{title}</h3>
                </div>
                <p className="text-base-content/70">{description}</p>
            </div>
            <div className={`h-1 w-full ${color} opacity-70 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}></div>
        </motion.div>
    );
};

const About = () => {
    return (
        <div>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h4 className="btn pointer-events-none text-purple-500 uppercase text-sm font-bold my-5">Services</h4>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                        <p className="text-base-content/70 max-w-3xl mx-auto">
                            The principles that guide our platform, community, and team.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ServiceCard
                            number="01"
                            title="Logo Design"
                            description="We believe the best tech should rise based on quality, not marketing spend."
                            color="bg-blue-500"
                        />

                        <ServiceCard
                            number="02"
                            title="Graphic Design"
                            description="Our community thrives on helpful, actionable feedback that improves products."
                            color="bg-purple-500"
                        />

                        <ServiceCard
                            number="03"
                            title="Web Development"
                            description="We level the playing field for creators of all backgrounds and resources."
                            color="bg-pink-500"
                        />

                        <ServiceCard
                            number="04"
                            title="Shopify Store Management"
                            description="We never compromise on user privacy or data security practices."
                            color="bg-green-500"
                        />

                        <ServiceCard
                            number="05"
                            title="Transparent Curation"
                            description="Our moderation and ranking processes are open and understandable."
                            color="bg-yellow-500"
                        />

                        <ServiceCard
                            number="06"
                            title="Continuous Evolution"
                            description="We constantly improve our platform based on community needs."
                            color="bg-red-500"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;