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


    </div>
  );
};

export default Home;
