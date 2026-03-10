
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { carsData } from "../data/cars";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Category() {
  const navigate = useNavigate();

  return (
    <div id="category" className="px-6 md:px-12 lg:px-20 py-20 text-white overflow-hidden">

      {/* ---------- HEADING: BRANDS WE DEAL IN ---------- */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-5xl font-cinzel font-extrabold leading-tight"
      >
        <span className="block font-alex text-4xl md:text-5xl text-gold mb-2">
          Brands
        </span>
        We Deal In
      </motion.h1>

      {/* ---------- BRAND LOGOS ---------- */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12">
        {[
          { src: "https://upload.wikimedia.org/wikipedia/commons/archive/4/48/20220619140935%21Mercedes-Benz_logo.svg", alt: "Mercedes Logo" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg", alt: "BMW Logo" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Audi_logo_detail.svg", alt: "Audi Logo" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Jaguar_2024.svg", alt: "Jaguar Logo" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/7/75/Lexus.svg", alt: "Lexus Logo" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Porsche_Wordmark_Logo_Black.svg", alt: "Porsche Logo" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/MINI_logo.svg", alt: "MINI Logo" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Toyota_Logo.svg/960px-Toyota_Logo.svg.png", alt: "Toyota Logo" },
        ].map((brand, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="bg-[#1E1E1E] rounded-3xl w-40 h-40 md:w-48 md:h-48 flex items-center justify-center p-4"
          >
            <img src={brand.src} alt={brand.alt} className="w-24 md:w-32" />
          </motion.div>
        ))}
      </div>

      {/* ---------- HEADING: NEW LUXURY CARS ---------- */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-5xl mt-32 font-cinzel font-extrabold leading-tight"
      >
        New Add
        <span className="block font-alex text-gold text-4xl md:text-5xl mt-2">
          Luxury Cars
        </span>
      </motion.h1>

      {/* ---------- CAR CARDS GRID ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 place-items-center">

        {/* CARDS ARRAY FOR STAGGERING */}
        {carsData.slice(0, 4).map((car, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="bg-[#1E1E1E] flex flex-col text-white rounded-xl border-1 border-zinc-800 overflow-hidden w-[300px] shadow-lg transition-shadow hover:shadow-2xl hover:shadow-black/50"
          >
            <div className="overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={car.img}
                alt={car.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold text-gray-300">{car.title}</h2>
              <div className="mt-2 text-sm text-gray-400">
                <p>{car.specs}</p>
                <p>{car.fuel}</p>
                <p>{car.color}</p>
              </div>
              <p className="text-3xl font-bold mt-3 mb-4">{car.price}</p>

              <div className="mt-auto">
                <button
                  onClick={() => navigate(`/car/${car.id}`)}
                  className="font-bold w-1/2 bg-zinc-900 border-1 border-zinc-600 hover:bg-zinc-800 py-2 rounded-xl transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ---------- BUY CAR BUTTON ---------- */}
      <div className="flex justify-center mt-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/buy-car")}
          className="bg-gold text-black font-cinzel font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-gold/50 transition duration-300"
        >
          View All Cars
        </motion.button>
      </div>
    </div>
  );
}

export default Category;
