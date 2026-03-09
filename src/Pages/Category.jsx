// import React from "react";
// import BMW from "../assets/car1.png";
// import BENZ from "../assets/car2.png";
// import MINI from "../assets/car3.png";
// import AUDI from "../assets/car4.png";

// function Category() {
//   return (
//     <div>
//       <h1 className="subheading text-4xl font-bold text-center mb-15">
//         <p className="sheading"> Brands</p> We Deal In
//       </h1>

//       <div className="flex flex-wrap justify-center gap-4 mt-12">

//         <div className="cards flex items-center justify-center text-3xl font-bold">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/archive/4/48/20220619140935%21Mercedes-Benz_logo.svg"
//             alt="benz Logo"
//             className=" w-70"
//           />
//         </div>

//         <div className="cards flex items-center justify-center font-bold">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
//             alt="Bmw Logo"
//             className=" w-40"
//           />
//         </div>

//         <div className="cards flex items-center justify-center text-3xl font-bold">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Audi_logo_detail.svg"
//             alt="Audi Logo"
//             className=" w-70"
//           />
//         </div>

//         <div className="cards flex items-center justify-center text-3xl font-bold">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/5/50/Jaguar_2024.svg"
//             alt="jaguar Logo"
//             className=" w-70"
//           />
//         </div>

//         <div className="cards flex items-center justify-center text-3xl font-bold">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/7/75/Lexus.svg"
//             alt=" lexusLogo"
//             className=" w-70"
//           />
//         </div>

//         <div className="cards flex items-center justify-center text-3xl font-bold">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Porsche_Wordmark_Logo_Black.svg"
//             alt="Porsche Logo"
//             className=" w-70"
//           />
//         </div>

//         <div className="cards flex items-center justify-center text-3xl font-bold">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/e/e9/MINI_logo.svg"
//             alt="mini Logo"
//             className=" w-70"
//           />
//         </div>

//         <div className="cards flex items-center justify-center text-3xl font-bold">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Toyota_Logo.svg/960px-Toyota_Logo.svg.png"
//             alt="toyota Logo"
//             className=" w-50"
//           />
//         </div>
//       </div>

//       <div>
//         <h1 className="subheading text-4xl font-bold text-center mb-12 mt-10">
//           New Add <p className="sheading">Luxury Cars</p>
//         </h1>
//       </div>

//       <div className="flex flex-wrap justify-center gap-4 mt-12">

//         <div class="car-card">
//           <div class="car-image-container">
//             <img src={BENZ} alt="Mercedes Benz E-Class" class="car-image"></img>
//           </div>
//           <div class="car-details">
//             <h2 class="car-title">Mercedes Benz</h2>
//             <div class="car-specs">
//               <p>2.0 E 220 d | E-class (2023) | 29000 km </p>
//               <p>Diesal | Automatic</p>
//               <p>Prel White</p>
//             </div>
//             <div class="car-price">₹480000</div>
//           </div>
//         </div>

//         <div class="car-card">
//           <div class="car-image-container">
//             <img src={BMW} alt="Mercedes Benz E-Class" class="car-image"></img>
//           </div>
//           <div class="car-details">
//             <h2 class="car-title">BMW 5 Series</h2>
//             <div class="car-specs">
//               <p>2.0 520D M Sport | 2023 | 17000 km </p>
//               <p>Diseal | Automatic</p>
//               <p>Grey</p>
//             </div>
//             <div class="car-price">₹5500000</div>
//           </div>
//         </div>

//         <div class="car-card">
//           <div class="car-image-container">
//             <img src={MINI} alt="Mercedes Benz E-Class" class="car-image"></img>
//           </div>
//           <div class="car-details">
//             <h2 class="car-title">MINI Cooper CM</h2>
//             <div class="car-specs">
//               <p>COOPER S COUNTRYMAN | 50,000 Km</p>
//               <p>Petrol | Automatic</p>
//               <p>Grey</p>
//             </div>
//             <div class="car-price">₹350000</div>
//           </div>
//         </div>

//         <div class="car-card">
//           <div class="car-image-container">
//             <img src={AUDI} alt="Mercedes Benz E-Class" class="car-image"></img>
//           </div>
//           <div class="car-details">
//             <h2 class="car-title">Audi Tt</h2>
//             <div class="car-specs">
//               <p>2.0 45 TFSI | 2017 | 37,000 Km</p>
//               <p>Petrol | Automatic</p>
//               <p>Navy Blue</p>
//             </div>
//             <div class="car-price">₹370000</div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Category;

import React from "react";
import { motion } from "framer-motion";

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
        {[
          {
            img: "/assets/car2.png", title: "Mercedes Benz", specs: "2.0 E 220 d | E-Class (2023) | 29,000 km", fuel: "Diesel | Automatic", color: "Polar White", price: "₹4,80,000"
          },
          {
            img: "/assets/car1.png", title: "BMW 5 Series", specs: "2.0 520D M Sport | 2023 | 17,000 km", fuel: "Diesel | Automatic", color: "Grey", price: "₹55,00,000"
          },
          {
            img: "/assets/car3.png", title: "MINI Cooper CM", specs: "COOPER S COUNTRYMAN | 50,000 km", fuel: "Petrol | Automatic", color: "Grey", price: "₹3,50,000"
          },
          {
            img: "/assets/car4.png", title: "Audi TT", specs: "2.0 45 TFSI | 2017 | 37,000 km", fuel: "Petrol | Automatic", color: "Navy Blue", price: "₹3,70,000"
          }
        ].map((car, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="bg-[#1E1E1E] text-white rounded-xl overflow-hidden w-[300px] shadow-lg cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-black/50"
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
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-300">{car.title}</h2>
              <div className="mt-2 text-sm text-gray-400">
                <p>{car.specs}</p>
                <p>{car.fuel}</p>
                <p>{car.color}</p>
              </div>
              <p className="text-3xl font-bold mt-3">{car.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Category;
