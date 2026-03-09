import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const Footer = () => {
    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            id="contact"
            className="w-full bg-[#0a0a0a] border-t border-[#333333] pt-16 pb-6 text-white font-open"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* COLUMN 1: BRANDING */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left">
                        <a href="#home" className="inline-block mb-6">
                            <img src={Logo} alt="Rich Drive Luxury Logo" className="w-48 h-auto" />
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs font-open">
                            Premium pre-owned luxury cars delivered with trust and excellence across India.
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="flex space-x-4">
                            {/* WhatsApp */}
                            <a href="https://www.whatsapp.com/catalog/919503414649/?app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E1E1E] hover:bg-green-600 hover:text-white text-gray-400 transition-all duration-300">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.52 3.48A11.8 11.8 0 0012 0C5.37 0 0 5.37 0 12a11.88 11.88 0 001.64 5.96L0 24l6.21-1.63A11.92 11.92 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.68.97 1-3.58-.24-.37A9.92 9.92 0 1122 12c0 5.52-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.9 1.08-.17.19-.33.21-.61.07a8.03 8.03 0 01-2.35-1.45 8.73 8.73 0 01-1.63-2.03c-.17-.29-.02-.45.12-.59.12-.12.28-.33.43-.5.14-.17.19-.29.28-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.53-.88-2.1-.23-.55-.46-.48-.64-.48-.17-.01-.36-.01-.55-.01s-.5.07-.76.35c-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.19 2.02 3.08 4.88 4.32 2.86 1.23 2.86.82 3.37.77.52-.05 1.65-.67 1.88-1.33.24-.66.24-1.24.17-1.36-.06-.12-.24-.19-.52-.33z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/richdriveluxurycars/" target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E1E1E] hover:bg-pink-600 hover:text-white text-gray-400 transition-all duration-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                                    <path d="M17.5 6.5h.01"></path>
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="https://www.facebook.com/rich.drive.2025/" target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E1E1E] hover:bg-blue-600 hover:text-white text-gray-400 transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            {/* Maps */}
                            <a href="https://maps.app.goo.gl/MzBdy1HJmydmjjm4A" target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E1E1E] hover:bg-white hover:text-black text-gray-400 transition-all duration-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>

                    {/* COLUMN 2: QUICK LINKS */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left pt-2">
                        <h3 className="text-gold font-cinzel text-lg font-bold tracking-widest uppercase mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gold hidden md:block"></span>
                        </h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#home" className="hover:text-white hover:pl-2 transition-all duration-300">Home</a></li>
                            <li><a href="#category" className="hover:text-white hover:pl-2 transition-all duration-300">Inventory</a></li>
                            <li><a href="#about" className="hover:text-white hover:pl-2 transition-all duration-300">About Us</a></li>
                            <li><a href="#customers" className="hover:text-white hover:pl-2 transition-all duration-300">Testimonials</a></li>
                        </ul>
                    </motion.div>

                    {/* COLUMN 3: CONTACT */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left pt-2">
                        <h3 className="text-gold font-cinzel text-lg font-bold tracking-widest uppercase mb-6 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gold hidden md:block"></span>
                        </h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="tel:+918055558005" className="hover:text-white transition-colors duration-300">+91 8055558005</a></li>
                            <li><a href="tel:+917066405000" className="hover:text-white transition-colors duration-300">+91 7066405000</a></li>
                            <li><a href="mailto:info@richdriveluxury.com" className="hover:text-white transition-colors duration-300">info@richdriveluxury.com</a></li>
                        </ul>
                    </motion.div>

                    {/* COLUMN 4: LOCATION */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left pt-2">
                        <h3 className="text-gold font-cinzel text-lg font-bold tracking-widest uppercase mb-6 relative inline-block">
                            Location
                            <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gold hidden md:block"></span>
                        </h3>
                        <a href="https://maps.app.goo.gl/MzBdy1HJmydmjjm4A" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white leading-relaxed transition-colors duration-300 cursor-pointer">
                            Rich Drive Luxury<br />
                            Chitnis Park, Mahal<br />
                            Nagpur, Maharashtra 440032
                        </a>
                    </motion.div>

                </div>

                {/* BOTTOM DIVIDER & COPYRIGHT */}
                <motion.div variants={itemVariants} className="border-t border-[#222222] pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Rich Drive Luxury — All rights reserved.</p>
                    <p className="mt-2 md:mt-0">
                        Website By <a href="https://github.com/bhave5h" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">Bhavesh</a>
                    </p>
                </motion.div>

            </div>
        </motion.footer>
    );
};

export default Footer;
