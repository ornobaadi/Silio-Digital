import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sanitizeInput, validateForm, checkRateLimit } from '../../lib/security';
import emailjs from '@emailjs/browser';

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

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

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
        // Clear error for this field when user starts typing
        setErrors(prev => ({ ...prev, [name]: '' }));
        setSubmitStatus(null);

        setFormData(prev => ({
            ...prev,
            [name]: sanitizeInput(value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check rate limiting (max 3 submissions per 5 minutes)
        if (!checkRateLimit('contact_form', 3, 300000)) {
            setSubmitStatus({
                type: 'error',
                message: 'Too many submissions. Please wait a few minutes before trying again.'
            });
            return;
        }

        // Validate form
        const validationRules = {
            firstName: { required: true, minLength: 2, maxLength: 50 },
            lastName: { required: true, minLength: 2, maxLength: 50 },
            email: { required: true, email: true },
            service: { required: true },
            budget: { required: true },
            projectDetails: { required: true, minLength: 5, maxLength: 1000 }
        };

        const validation = validateForm(formData, validationRules);

        if (!validation.isValid) {
            setErrors(validation.errors);
            setSubmitStatus({
                type: 'error',
                message: 'Please fix the errors in the form before submitting.'
            });
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            // Send email using EmailJS
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                console.warn("EmailJS credentials missing. Falling back...");
                // Fallback for dev/demo if keys aren't set yet - simulate success
                await new Promise(resolve => setTimeout(resolve, 1500));
                console.log("Simulated email sent with data:", formData);
            } else {
                // Actual EmailJS send
                await emailjs.send(
                    serviceId,
                    templateId,
                    {
                        from_name: `${formData.firstName} ${formData.lastName}`,
                        from_email: formData.email,
                        reply_to: formData.email,
                        company: formData.company || 'Not provided',
                        service: formData.service,
                        budget: formData.budget,
                        message: formData.projectDetails,
                        to_email: 'israkparvez@gmail.com'
                    },
                    publicKey
                );
            }

            // Reset form on success
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                service: '',
                budget: '',
                projectDetails: ''
            });

            setSubmitStatus({
                type: 'success',
                message: 'Thank you! Your project inquiry has been sent successfully. We will get back to you shortly.'
            });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'An error occurred while sending your message. Please try again later or contact us via WhatsApp.'
            });
        } finally {
            setIsSubmitting(false);
        }
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
                        className="inline-block bg-white/10 text-emerald-500 uppercase text-sm font-bold px-4 py-2 rounded-full mb-4"
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
                                    className={`w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all`}
                                    required
                                />
                                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                            </div>
                            <div>
                                <label className="block text-white/70 mb-2">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all`}
                                    required
                                />
                                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
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
                                    className={`w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all`}
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-white/70 mb-2">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-white/70 mb-2">Select Service</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={`w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border ${errors.service ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all`}
                                required
                            >
                                <option value="">Choose a Service</option>
                                {services.map((service, index) => (
                                    <option key={index} value={service}>{service}</option>
                                ))}
                            </select>
                            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                        </div>

                        <div>
                            <label className="block text-white/70 mb-2">Project Budget</label>
                            <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className={`w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border ${errors.budget ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all`}
                                required
                            >
                                <option value="">Select Budget Range</option>
                                {budgetOptions.map((budget, index) => (
                                    <option key={index} value={budget}>{budget}</option>
                                ))}
                            </select>
                            {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                        </div>

                        <div>
                            <label className="block text-white/70 mb-2">Project Details</label>
                            <textarea
                                name="projectDetails"
                                value={formData.projectDetails}
                                onChange={handleChange}
                                rows="5"
                                className={`w-full bg-[#2a2a2a] text-white rounded-xl px-4 py-3 border ${errors.projectDetails ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all`}
                                placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                                required
                            ></textarea>
                            {errors.projectDetails &&
                                <p className="text-red-500 text-sm mt-1">{errors.projectDetails}</p>
                            }
                        </div>

                        {/* Status Message */}
                        {submitStatus && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-4 rounded-xl border ${submitStatus.type === 'success'
                                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                                    }`}
                            >
                                {submitStatus.message}
                            </motion.div>
                        )}

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-emerald-600 text-white font-semibold py-4 px-10 rounded-lg transition-colors duration-200 ${isSubmitting
                                    ? 'opacity-50 cursor-not-allowed'
                                    : 'hover:bg-emerald-700'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2 justify-center">
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Project Inquiry'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </section >
    );
};

export default Contact;