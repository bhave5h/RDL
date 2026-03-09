// import React from 'react'
// import ScrollReveal from '../Componets/ScrollReveal';

// const About = () => {
//   return (
//     <div className="m-20">
//       <h1 className="subheading text-4xl font-bold text-center">
//         <p className="sheading"> About </p> us
//       </h1>

//       <ScrollReveal 
//         baseOpacity={0}
//         enableBlur={true}
//         baseRotation={0}
//         blurStrength={10}
//       >
//         We Offer premium per-owned luxury cars within your reach. Since 2021,
//         we've delivered 300+ curated cars across India, offering top quality at
//         the lowest prices.
//       </ScrollReveal>

//       <div className='flex justify-center mr-20'>

//       <table className='w-full' >
//         <thead>
//           <tr className='ctext'>
//             <th>300+</th>
//             <th>Since 2021</th>
//             <th>Buy | Sell</th>
//           </tr>
//         </thead>
//         <tbody className='dtext'>
//           <tr>
//             <td className="px-8 py-0 text-center">
//             Luxury Vehical Sold
//             </td>
//             <td className="px-8 py-0 text-center">
//             Trusted Across India
//             </td>
//             <td className="px-8 py-0 text-center">
//             With Ease
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       </div>

//     </div>
//   );
// }

// export default About

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../Componets/ScrollReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const About = () => {
  return (
    <div id="about" className="px-6 md:px-20 py-20 text-white overflow-hidden">

      {/* ---------------- HEADING ---------------- */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-3xl md:text-5xl font-cinzel font-extrabold leading-tight mb-10"
      >
        <span className="block font-alex text-gold text-4xl md:text-5xl mb-2">
          About
        </span>
        Us
      </motion.h1>

      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={0}
        blurStrength={10}
      >
        We Offer premium per-owned luxury cars within your reach. Since 2021,
        we've delivered 300+ curated cars across India, offering top quality at
        the lowest prices.
      </ScrollReveal>

      {/* ---------------- STATS GRID (Responsive Replacement for Table) ---------------- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex justify-center w-full mt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full max-w-3xl text-center">

          {/* STAT 1 */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <span className="text-gold font-open font-bold text-3xl md:text-4xl">300+</span>
            <span className="text-gray-400 font-open text-sm md:text-base mt-2">Luxury Vehicles Sold</span>
          </motion.div>

          {/* STAT 2 */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <span className="text-gold font-open font-bold text-3xl md:text-4xl">Since 2021</span>
            <span className="text-gray-400 font-open text-sm md:text-base mt-2">Trusted Across India</span>
          </motion.div>

          {/* STAT 3 */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <span className="text-gold font-open font-bold text-3xl md:text-4xl">Buy | Sell</span>
            <span className="text-gray-400 font-open text-sm md:text-base mt-2">With Ease</span>
          </motion.div>

        </div>
      </motion.div>

    </div>
  );
};

export default About;
