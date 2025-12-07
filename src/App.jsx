import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Category from './Pages/Category';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Customers from './Pages/Customers';

const App = () => {
  return (
    <div>

      <section id="home">
        <Home />
      </section>

      <section id="category">
        <Category />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="customers">
        <Customers />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
};

export default App;


