import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ServiceCard = ({ number, title, description, points, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="group bg-black/50 border border-white/10 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all backdrop-blur-md"
        >
            <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                    <span
                        className={`text-sm font-mono font-bold text-white ${color} px-2 py-1 rounded`}
                    >
                        {number}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-green-500 transition-colors">
                        {title}
                    </h3>
                </div>
                <p className="text-white/70 mb-4">{description}</p>
                <ul className="space-y-2">
                    {points.map((point, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-2 text-sm text-white/80"
                        >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={`h-1 w-full ${color} opacity-70 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
            ></div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section className="py-20 bg-[#030303]">
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
                        What we offer
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-white/60 max-w-3xl mx-auto text-lg"
                    >
                        Unlock your business potential with our expert services.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                    <ServiceCard
                        number="01"
                        title="Logo Design & Branding"
                        description="Stand out with a unique and memorable brand identity."
                        points={[
                            'Custom Logo Design',
                            'Brand Guidelines & Visual Identity',
                            'Business Cards & Marketing Materials',
                        ]}
                        color="bg-blue-500"
                    />

                    <ServiceCard
                        number="02"
                        title="Digital Marketing"
                        description="From SEO to paid ads, we help you reach the right audience."
                        points={[
                            'Social Media Marketing',
                            'SEO Optimization',
                            'Content Marketing',
                        ]}
                        color="bg-purple-500"
                    />

                    <ServiceCard
                        number="03"
                        title="Web Development"
                        description="We build responsive, fast, and secure websites."
                        points={[
                            'Custom Website Development',
                            'SaaS & Web Applications',
                            'UI/UX Optimization',
                        ]}
                        color="bg-pink-500"
                    />

                    <ServiceCard
                        number="04"
                        title="WordPress & Shopify Store Management"
                        description="We manage your online store for smooth operation."
                        points={[
                            'Shopify & WooCommerce Setup',
                            'Performance Optimization',
                            'Ongoing Maintenance & Support',
                        ]}
                        color="bg-yellow-500"
                    />

                    <ServiceCard
                        number="05"
                        title="Business Manager Setup"
                        description="Efficiently manage your business assets and ad accounts."
                        points={[
                            'Business Manager Account Creation',
                            'Ad Account Setup',
                            'Team Member Access Management',
                        ]}
                        color="bg-indigo-500"
                    />

                    <ServiceCard
                        number="06"
                        title="Facebook Campaign Creation"
                        description="Create high-performing ad campaigns to grow your business."
                        points={[
                            'Campaign Strategy Development',
                            'Ad Creative Design',
                            'Targeting & Audience Segmentation',
                        ]}
                        color="bg-teal-500"
                    />

                    <ServiceCard
                        number="07"
                        title="Ads Management"
                        description="Optimize and manage your ad campaigns for maximum ROI."
                        points={[
                            'Ad Performance Monitoring',
                            'A/B Testing & Optimization',
                            'Budget Management',
                        ]}
                        color="bg-orange-500"
                    />

                    <ServiceCard
                        number="08"
                        title="Pixel Setup Plus Events"
                        description="Track user behavior and conversions with pixel setup."
                        points={[
                            'Facebook Pixel Installation',
                            'Custom Event Tracking',
                            'Conversion Tracking Setup',
                        ]}
                        color="bg-red-500"
                    />

                    <ServiceCard
                        number="9"
                        title="Social Media Management"
                        description="Engage your audience with consistent and impactful content."
                        points={[
                            'Content Strategy & Planning',
                            'Post Scheduling & Publishing',
                            'Community Engagement',
                        ]}
                        color="bg-cyan-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;