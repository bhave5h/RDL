// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from './Pages/Home';
// import Category from './Pages/Category';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Customers from './Pages/Customers';

// const App = () => {
//   return (
//     <div>

//       <section id="home">
//         <Home />
//       </section>

//       <section id="category">
//         <Category />
//       </section>

//       <section id="about">
//         <About />
//       </section>

//       <section id="customers">
//         <Customers />
//       </section>

//       <section id="contact">
//         <Contact />
//       </section>

//     </div>
//   );
// };

// export default App;


import React from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./Componets/Navbar";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import About from "./Pages/About";
import Customers from "./Pages/Customers";
import Footer from "./Componets/Footer";
import BuyCar from "./Pages/BuyCar";
import CarDetails from "./Pages/CarDetails";
import SellCar from "./Pages/SellCar";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT (fills all remaining height before footer) */}
      <main className="flex-grow pb-40">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Category />
                <About />
                <Customers />
              </>
            }
          />
          <Route path="/buy-car" element={<BuyCar />} />
          <Route path="/sell-car" element={<SellCar />} />
          <Route path="/car/:id" element={<CarDetails />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <div className="mt-auto w-full">
        <Footer />
      </div>

    </div>
  );
};

export default App;
