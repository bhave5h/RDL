import React from "react";
import { motion } from "framer-motion";
import GlassSurface from "../Componets/GlassSurface";
import Logo from "../assets/logo.svg";
import Hero from "../assets/hero.svg";
import landing from "../assets/landing.jpg";

const Home = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen w-full bg-cover bg-left md:bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${landing})` }}
    >
      {/* LOGO */}
      <motion.img
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        src={Logo}
        alt="Rich Drive Luxury Logo"
        className="absolute top-6 left-6 md:top-8 md:left-10 w-28 md:w-60 z-50"
      />

      {/* HERO SIDE IMAGE */}
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        src={Hero}
        alt="Rich Drive Luxury Hero"
        className="absolute bottom-10 left-6 md:left-10 w-40 md:w-80 z-50"
      />

      {/* NAVBAR */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.8 }}
        className="fixed top-6 md:top-10 left-0 w-full flex justify-center z-50 px-4"
      >
        <div className="w-full max-w-[800px]">
          <GlassSurface
            width="100%"
            height={70}
            borderRadius={40}
            displace={5}
            distortionScale={225}
            redOffset={5}
            greenOffset={15}
            blueOffset={25}
            brightness={60}
            opacity={0}
            className="flex items-center shadow-2xl"
          >
            <div className="flex w-full items-center justify-start md:justify-center gap-4 sm:gap-6 md:gap-10 text-white font-cinzel font-semibold text-xs sm:text-sm md:text-lg px-2 sm:px-6 overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
              <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="#home" className="hover:text-gold transition">Home</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="#category" className="hover:text-gold transition">Category</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="#about" className="hover:text-gold transition">About</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="#customers" className="hover:text-gold transition">Customers</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="#contact" className="hover:text-gold transition">Contact</motion.a>
            </div>
          </GlassSurface>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
