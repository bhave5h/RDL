import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import background from "/assets/bg.webm";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-95"
      >
        <source src={background} type="video/webm" />
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
          className="absolute bottom-32 md:bottom-auto md:top-1/2 md:-translate-y-1/2 lg:top-8 lg:-translate-y-0 left-6 md:left-10 w-70 mb-9 md:w-52 lg:w-60 z-50"
        />

        {/* HERO SIDE IMAGE */}
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          src="/assets/hero.svg"
          alt="Rich Drive Luxury Hero"
          className="absolute bottom-10 left-6 md:left-10 w-70 md:w-80 z-50"
        />


      </div>
    </div>
  );
};

export default Home;
