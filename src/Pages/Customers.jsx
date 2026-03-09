// import React from 'react'
// import Masonry from '../Componets/Masonry';
// import image1 from '../assets/image 1.png';
// import image2 from '../assets/image 2.png';
// import image3 from '../assets/image 3.png';
// import image4 from '../assets/image 4.png';
// import image5 from '../assets/image 5.png';
// import image6 from '../assets/image 6.png';
// import image7 from '../assets/image 7.png';
// import image8 from '../assets/image 8.png';
// import image9 from '../assets/image 9.png';
// import image10 from '../assets/image 10.png';

// const items = [
//   {
//     id: "1",
//     img: image1,
//     url: "https://www.instagram.com/richdriveluxurycars/",
//     height: 500,
//   },
//   {
//     id: "2",
//     img: image2,
//     url: "https://www.instagram.com/richdriveluxurycars/",
//     height: 350,
//   },
//   {
//     id: "3",
//     img: image3,
//     url: "https://www.instagram.com/richdriveluxurycars/",
//     height: 700,
//   },
//   {
//     id: "4",
//     img: image4,
//     url: "https://www.instagram.com/richdriveluxurycars/",
//     height: 300,
//   },
//   {
//     id: "5",
//     img: image5,
//     url: "https://www.instagram.com/richdriveluxurycars/",
//     height: 500,
//   },
//   {
//     id: "6",
//     img: image6,
//     url: "https://www.instagram.com/richdriveluxurycars/",
//     height: 600,
//   },
//   {
//     id: "7",
//     img: image7,
//     url: "https://www.instagram.com/richdriveluxurycars/",
//     height: 500,
//   },
//   {
//     id: "8",
//     img: image8,
//     url: "https://www.instagram.com/richdriveluxurycars/",
//     height: 600,
//   },
//   {
//     id: "9",
//     img: image9,
//     url: "https://www.instagram.com/richdriveluxurycars/",
//     height: 600,
//   },
//   {
//     id: "10",
//     img: image10,
//     url: "https://www.instagram.com/richdriveluxurycars/",
//     height: 400,
//   },
// ];

// const Customers = () => {
//   return (

//     <div>

//       <h1 className="sheading text-4xl font-bold text-center mt-15">
//         <p className="subheading"> OUR HAPPY </p> Costumers 
//       </h1>

//       <div className='a'>

//       <div className='b'>
//       <Masonry 
//         items={items}
//         ease="power3.out"
//         duration={0.6}
//         stagger={0.05}
//         animateFrom="top"
//         scaleOnHover={true}
//         hoverScale={0.95}
//         blurToFocus={true}
//         colorShiftOnHover={false}
//       />

//       </div>

//       </div>

//     </div>


//   );
// }

// export default Customers

// import React from "react";
// import Masonry from "../Componets/Masonry";

// import image1 from "../assets/image 1.png";
// import image2 from "../assets/image 2.png";
// import image3 from "../assets/image 3.png";
// import image4 from "../assets/image 4.png";
// import image5 from "../assets/image 5.png";
// import image6 from "../assets/image 6.png";
// import image7 from "../assets/image 7.png";
// import image8 from "../assets/image 8.png";
// import image9 from "../assets/image 9.png";
// import image10 from "../assets/image 10.png";

// const items = [
//   { id: "1", img: image1, url: "https://www.instagram.com/richdriveluxurycars/", height: 500 },
//   { id: "2", img: image2, url: "https://www.instagram.com/richdriveluxurycars/", height: 350 },
//   { id: "3", img: image3, url: "https://www.instagram.com/richdriveluxurycars/", height: 700 },
//   { id: "4", img: image4, url: "https://www.instagram.com/richdriveluxurycars/", height: 300 },
//   { id: "5", img: image5, url: "https://www.instagram.com/richdriveluxurycars/", height: 500 },
//   { id: "6", img: image6, url: "https://www.instagram.com/richdriveluxurycars/", height: 600 },
//   { id: "7", img: image7, url: "https://www.instagram.com/richdriveluxurycars/", height: 500 },
//   { id: "8", img: image8, url: "https://www.instagram.com/richdriveluxurycars/", height: 600 },
//   { id: "9", img: image9, url: "https://www.instagram.com/richdriveluxurycars/", height: 600 },
//   { id: "10", img: image10, url: "https://www.instagram.com/richdriveluxurycars/", height: 400 },
// ];

// const Customers = () => {
//   return (
//     <section id="customers" className="px-6 md:px-20 py-20 text-white">

//       {/* ---------- SECTION HEADING ---------- */}
//       <h1 className="text-center text-3xl md:text-5xl font-cinzel font-extrabold leading-tight mb-12">
//         <span className="block font-alex text-gold text-4xl md:text-5xl mb-2">
//           Our Happy
//         </span>
//         Customers
//       </h1>

//       {/* ---------- CENTERED MASONRY WRAPPER ---------- */}
//       <div className="w-full flex justify-center">

//         <div className="w-full max-w-7xl">
//           <Masonry
//             items={items}
//             ease="power3.out"
//             duration={0.6}
//             stagger={0.05}
//             animateFrom="top"
//             scaleOnHover={true}
//             hoverScale={0.95}
//             blurToFocus={true}
//             colorShiftOnHover={false}
//           />
//         </div>

//       </div>

//     </section>
//   );
// };

// export default Customers;

import React from "react";
import { motion } from "framer-motion";
import Masonry from "../Componets/Masonry";


const items = [
  { id: "1", img: "/assets/image 1.png", url: "https://www.instagram.com/richdriveluxurycars/", height: 500 },
  { id: "2", img: "/assets/image 2.png", url: "https://www.instagram.com/richdriveluxurycars/", height: 350 },
  { id: "3", img: "/assets/image 3.png", url: "https://www.instagram.com/richdriveluxurycars/", height: 700 },
  { id: "4", img: "/assets/image 4.png", url: "https://www.instagram.com/richdriveluxurycars/", height: 300 },
  { id: "5", img: "/assets/image 5.png", url: "https://www.instagram.com/richdriveluxurycars/", height: 500 },
  { id: "6", img: "/assets/image 6.png", url: "https://www.instagram.com/richdriveluxurycars/", height: 600 },
  { id: "7", img: "/assets/image 7.png", url: "https://www.instagram.com/richdriveluxurycars/", height: 500 },
  { id: "8", img: "/assets/image 8.png", url: "https://www.instagram.com/richdriveluxurycars/", height: 600 },
  { id: "9", img: "/assets/image 9.png", url: "https://www.instagram.com/richdriveluxurycars/", height: 600 },
  { id: "10", img: "/assets/image 10.png", url: "https://www.instagram.com/richdriveluxurycars/", height: 400 },
];

const Customers = () => {
  return (
    <section id="customers" className="px-6 md:px-20 pt-20 pb-20 text-white overflow-hidden">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        className="text-center text-3xl md:text-5xl font-cinzel font-extrabold leading-tight mb-12"
      >
        <span className="block font-alex text-gold text-4xl md:text-5xl mb-2">
          Our Happy
        </span>
        Customers
      </motion.h1>

      {/* Masonry Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full flex justify-center"
      >
        <div className="w-full max-w-7xl">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="top"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Customers;
