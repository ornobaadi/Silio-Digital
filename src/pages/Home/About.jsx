import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ServiceCard = ({ number, title, description, points, color }) => {
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
                <p className="text-base-content/70 mb-4">{description}</p>
                <ul className="space-y-2">
                    {points.map((point, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-base-content/80">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`h-1 w-full ${color} opacity-70 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}></div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h4 className="btn pointer-events-none text-purple-500 uppercase text-sm font-bold my-5">
                        What we offer
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-base-content/70 max-w-3xl mx-auto">
                        Unlock your business potential with our expert services.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ServiceCard
                        number="01"
                        title="Logo Design & Branding"
                        description="Stand out with a unique and memorable brand identity."
                        points={[
                            "Custom Logo Design",
                            "Brand Guidelines & Visual Identity",
                            "Business Cards & Marketing Materials"
                        ]}
                        color="bg-blue-500"
                    />

                    <ServiceCard
                        number="02"
                        title="Digital Marketing"
                        description="From SEO to paid ads, we help you reach the right audience."
                        points={[
                            "Social Media Marketing",
                            "SEO Optimization",
                            "Content Marketing"
                        ]}
                        color="bg-purple-500"
                    />

                    <ServiceCard
                        number="03"
                        title="Web Development"
                        description="We build responsive, fast, and secure websites."
                        points={[
                            "Custom Website Development",
                            "SaaS & Web Applications",
                            "UI/UX Optimization"
                        ]}
                        color="bg-pink-500"
                    />

                    <ServiceCard
                        number="04"
                        title="Digital Consultancy"
                        description="Get expert guidance to navigate the digital landscape."
                        points={[
                            "Business Strategy & Growth",
                            "Conversion Optimization",
                            "Data-Driven Insights"
                        ]}
                        color="bg-green-500"
                    />

                    <ServiceCard
                        number="05"
                        title="WordPress & Shopify Store Management"
                        description="We manage your online store for smooth operation."
                        points={[
                            "Shopify & WooCommerce Setup",
                            "Performance Optimization",
                            "Ongoing Maintenance & Support"
                        ]}
                        color="bg-yellow-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
