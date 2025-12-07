import React from "react";
import GlassSurface from "../Componets/GlassSurface";
import Logo from '../assets/logo.svg';
import Hero from '../assets/hero.svg';

const Home = () => {
  return (
    <div className="hero-bg">
      <img src={Logo} alt="Rich Drive Luxury Logo" className="absolute top-7 left-10 z-50" />
      <img src={Hero} alt="Rich Drive Luxury Hero" className="absolute bottom-19 left-10 z-50" />
      
      <div
        id="navbar"
        className="navbar fixed top-10 left-0 w-full flex justify-center z-50"
      >
        <GlassSurface
          width={800}
          height={70}
          borderRadius={40}
          displace={5}
          distortionScale={225}
          redOffset={5}
          greenOffset={15}
          blueOffset={25}
          brightness={60}
          opacity={0}
        >
          
      <div className="navbar flex items-center gap-10 text-lg font-medium">
        <a href="#home">Home</a>
        <a href="#category">Category</a>
        <a href="#about">About Us</a>
        <a href="#customers">Customers</a>
        <a href="#contact">Contact</a>
      </div>


        </GlassSurface>
      </div>
    </div>
  );
};

export default Home;
