import React from "react";
import { motion } from "framer-motion";
import GlassSurface from "../Componets/GlassSurface";

const Home = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="https://ik.imagekit.io/bhavesssh/Projects_video/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* CONTENT WRAPPER TO KEEP OVER VIDEO */}
      <div className="relative z-10 w-full h-full min-h-screen">
        {/* LOGO */}
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          src="/assets/logo.svg"
          alt="Rich Drive Luxury Logo"
          className="absolute top-6 left-6 md:top-8 md:left-10 w-28 md:w-60 z-50"
        />

        {/* HERO SIDE IMAGE */}
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          src="/assets/hero.svg"
          alt="Rich Drive Luxury Hero"
          className="absolute bottom-10 left-6 md:left-10 w-40 md:w-80 z-50"
        />


      </div>
    </div>
  );
};

export default Home;
