import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Users, BarChart2, Award, TrendingUp, Zap, Target } from 'lucide-react';

const About = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 }
        }
    };

    const featureCards = [
        {
            icon: ShieldCheck,
            title: "Trusted",
            description: "100+ satisfied clients worldwide",
            color: "emerald"
        },
        {
            icon: Users,
            title: "Dedicated",
            description: "Expert team focused on your success",
            color: "emerald"
        },
        {
            icon: BarChart2,
            title: "Results",
            description: "Data-driven strategies that deliver",
            color: "emerald"
        },
        {
            icon: Award,
            title: "Quality",
            description: "Premium solutions, every time",
            color: "emerald"
        }
    ];

    const stats = [
        { number: "10+", label: "Years Experience", icon: TrendingUp, color: "text-emerald-400" },
        { number: "100+", label: "Happy Clients", icon: Users, color: "text-emerald-400" },
        { number: "200+", label: "Projects Done", icon: Rocket, color: "text-emerald-400" },
        { number: "24/7", label: "Support", icon: Zap, color: "text-emerald-400" }
    ];

    return (
        <section id="about" className="relative py-20 md:py-32 bg-[#030303] overflow-hidden">
            {/* Animated background gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
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
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-emerald-500 uppercase text-sm font-bold px-4 py-2 rounded-full mb-4 backdrop-blur-sm"
                    >
                        <Target className="w-4 h-4" />
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
                        className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed"
                    >
                        We're a full-service digital agency helping businesses thrive in the online world through innovative solutions and creative excellence.
                    </motion.p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center mb-16 md:mb-20">
                    {/* Image Section - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-5 relative"
                    >
                        {/* Main Image Container */}
                        <div className="relative group">

                            {/* Image card */}
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-3 md:p-4 backdrop-blur-sm overflow-hidden">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                                    <img
                                        src="/F3WKVNxXwAMNeQH.webp"
                                        alt="Silio Digital Team"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="absolute -bottom-6 -right-4 md:-right-6
        rounded-xl p-2 md:py-3 px-5
        bg-white/10
        backdrop-blur-2xl
        border border-white/20
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                            >
                                <div className="flex items-center gap-3 whitespace-nowrap">
                                    <div className="p-2 md:p-2.5 bg-white/15 rounded-lg backdrop-blur-md">
                                        <Rocket className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                    </div>
                                    <div className="text-white font-semibold text-base md:text-lg">
                                        10+ Years Experience
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* Content Section - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-7 space-y-6 md:space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                                Empowering Your Digital Presence
                            </h3>
                            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                                At Silio Digital, we specialize in transforming businesses through innovative digital solutions.
                                Our expert team combines creativity with technical excellence to deliver stunning designs,
                                strategic marketing campaigns, and seamless web development.
                            </p>
                        </div>

                        {/* Feature Cards Grid */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
                        >
                            {featureCards.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{ y: -3 }}
                                    className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-3 md:gap-4">
                                        <div className="p-2 md:p-2.5 bg-emerald-500/10 rounded-lg">
                                            <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-semibold text-base md:text-lg mb-1">
                                                {feature.title}
                                            </h4>
                                            <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 md:px-8 py-3 md:py-4 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors duration-200"
                            >
                                Learn More
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 md:px-8 py-3 md:py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
                            >
                                Our Process
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section - Redesigned */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Stats Container */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 backdrop-blur-sm">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -3 }}
                                    className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 text-center hover:border-emerald-500/50 transition-all duration-300"
                                >
                                    {/* Icon */}
                                    <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-emerald-500/10 rounded-lg mb-3 md:mb-4">
                                        <stat.icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color}`} />
                                    </div>

                                    {/* Number */}
                                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                                        {stat.number}
                                    </div>

                                    {/* Label */}
                                    <div className="text-white/60 text-xs md:text-sm lg:text-base font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;