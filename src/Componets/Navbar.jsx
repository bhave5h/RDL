import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassSurface from "./GlassSurface";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.8 }}
            className={`fixed top-6 md:top-10 left-6 md:left-0 flex md:justify-center z-[100] transition-all duration-300 ${isOpen ? "w-[calc(100%-3rem)]" : "w-[70px] md:w-full"}`}
        >
            <div className={`w-full max-w-[800px] md:px-4`}>
                <GlassSurface
                    width="100%"
                    height={isOpen ? 360 : 70}
                    borderRadius={isOpen ? 20 : 35}
                    displace={5}
                    distortionScale={225}
                    redOffset={5}
                    greenOffset={15}
                    blueOffset={25}
                    brightness={60}
                    opacity={0}
                    className="shadow-2xl transition-all duration-300"
                >
                    <div className="flex flex-col w-full h-full">
                        {/* Top Bar */}
                        <div className="flex w-full items-center justify-start md:justify-center h-[54px] flex-shrink-0">
                            {/* Mobile Hamburger Button */}
                            <div className="md:hidden flex items-center justify-center w-[54px] h-[54px]">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-white hover:text-gold transition focus:outline-none flex items-center justify-center w-full h-full"
                                    aria-label="Toggle Menu"
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {isOpen ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        )}
                                    </svg>
                                </button>
                            </div>

                            {/* Desktop Links */}
                            <div className="hidden md:flex w-full items-center justify-center gap-10 text-white font-cinzel font-semibold text-lg whitespace-nowrap">
                                <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="#home" className="hover:text-gold transition">Home</motion.a>
                                <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="#category" className="hover:text-gold transition">Category</motion.a>
                                <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="#about" className="hover:text-gold transition">About</motion.a>
                                <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="#customers" className="hover:text-gold transition">Customers</motion.a>
                                <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="#contact" className="hover:text-gold transition">Contact</motion.a>
                            </div>
                        </div>

                        {/* Mobile Dropdown Links */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="md:hidden flex flex-col items-start gap-5 px-4 pt-4 pb-8 w-full text-white font-cinzel font-semibold text-xl overflow-hidden"
                                >
                                    <a onClick={() => setIsOpen(false)} href="#home" className="hover:text-gold transition w-full border-b border-gray-600/30 pb-2 pl-2">Home</a>
                                    <a onClick={() => setIsOpen(false)} href="#category" className="hover:text-gold transition w-full border-b border-gray-600/30 pb-2 pl-2">Category</a>
                                    <a onClick={() => setIsOpen(false)} href="#about" className="hover:text-gold transition w-full border-b border-gray-600/30 pb-2 pl-2">About</a>
                                    <a onClick={() => setIsOpen(false)} href="#customers" className="hover:text-gold transition w-full border-b border-gray-600/30 pb-2 pl-2">Customers</a>
                                    <a onClick={() => setIsOpen(false)} href="#contact" className="hover:text-gold transition w-full pl-2">Contact</a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </GlassSurface>
            </div>
        </motion.div>
    );
};

export default Navbar;
