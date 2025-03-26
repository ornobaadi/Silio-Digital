import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        projectDetails: ''
    });

    const services = [
        "Logo Design & Branding",
        "Digital Marketing",
        "Web Development",
        "WordPress & Shopify Store Management",
        "Business Manager Setup",
        "Facebook Campaign Creation",
        "Ads Management",
        "Pixel Setup Plus Events",
        "Social Media Management"
    ];

    const budgetOptions = [
        "$100 - $500",
        "$500 - $1K",
        "$1K - $5K",
        "$5K - $10K"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // WhatsApp message formatting
        const whatsappMessage = `
New Project Inquiry:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Service: ${formData.service}
Budget: ${formData.budget}

Project Details:
${formData.projectDetails}
        `;
        
        // Direct WhatsApp link with pre-filled message
        const phoneNumber = '+8801646846514';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id='contact' className="py-20 bg-[#030303]">
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
                        Let's Collaborate
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Start Your Project
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-white/60 max-w-3xl mx-auto text-lg"
                    >
                        Share your project vision, and we'll help bring it to life.
                    </motion.p>
                </motion.div>

                <div className="max-w-5xl mx-auto bg-[#1a1a1a] rounded-3xl p-8 shadow-2xl border border-white/10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white/70 mb-2">First Name</label>
                                <input 
                                    type="text" 
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-white/70 mb-2">Last Name</label>
                                <input 
                                    type="text" 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                    required 
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white/70 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-white/70 mb-2">Company</label>
                                <input 
                                    type="text" 
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-white/70 mb-2">Select Service</label>
                            <select 
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                required
                            >
                                <option value="">Choose a Service</option>
                                {services.map((service, index) => (
                                    <option key={index} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-white/70 mb-2">Project Budget</label>
                            <select 
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                required
                            >
                                <option value="">Select Budget Range</option>
                                {budgetOptions.map((budget, index) => (
                                    <option key={index} value={budget}>{budget}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-white/70 mb-2">Project Details</label>
                            <textarea 
                                name="projectDetails"
                                value={formData.projectDetails}
                                onChange={handleChange}
                                rows="5"
                                className="w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                                required
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button 
                                type="submit"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl"
                            >
                                Send Project Inquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;