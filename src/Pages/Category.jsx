import React from "react";
import BMW from "../assets/car1.png";
import BENZ from "../assets/car2.png";
import MINI from "../assets/car3.png";
import AUDI from "../assets/car4.png";

function Category() {
  return (
    <div>
      <h1 className="subheading text-4xl font-bold text-center mb-15">
        <p className="sheading"> Brands</p> We Deal In
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mt-12">

        <div className="cards flex items-center justify-center text-3xl font-bold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/archive/4/48/20220619140935%21Mercedes-Benz_logo.svg"
            alt="benz Logo"
            className=" w-70"
          />
        </div>

        <div className="cards flex items-center justify-center font-bold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
            alt="Bmw Logo"
            className=" w-40"
          />
        </div>

        <div className="cards flex items-center justify-center text-3xl font-bold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Audi_logo_detail.svg"
            alt="Audi Logo"
            className=" w-70"
          />
        </div>

        <div className="cards flex items-center justify-center text-3xl font-bold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/50/Jaguar_2024.svg"
            alt="jaguar Logo"
            className=" w-70"
          />
        </div>

        <div className="cards flex items-center justify-center text-3xl font-bold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/Lexus.svg"
            alt=" lexusLogo"
            className=" w-70"
          />
        </div>

        <div className="cards flex items-center justify-center text-3xl font-bold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Porsche_Wordmark_Logo_Black.svg"
            alt="Porsche Logo"
            className=" w-70"
          />
        </div>

        <div className="cards flex items-center justify-center text-3xl font-bold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/MINI_logo.svg"
            alt="mini Logo"
            className=" w-70"
          />
        </div>

        <div className="cards flex items-center justify-center text-3xl font-bold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Toyota_Logo.svg/960px-Toyota_Logo.svg.png"
            alt="toyota Logo"
            className=" w-50"
          />
        </div>
      </div>

      <div>
        <h1 className="subheading text-4xl font-bold text-center mb-12 mt-10">
          New Add <p className="sheading">Luxury Cars</p>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-12">

        <div class="car-card">
          <div class="car-image-container">
            <img src={BENZ} alt="Mercedes Benz E-Class" class="car-image"></img>
          </div>
          <div class="car-details">
            <h2 class="car-title">Mercedes Benz</h2>
            <div class="car-specs">
              <p>2.0 E 220 d | E-class (2023) | 29000 km </p>
              <p>Diesal | Automatic</p>
              <p>Prel White</p>
            </div>
            <div class="car-price">₹480000</div>
          </div>
        </div>

        <div class="car-card">
          <div class="car-image-container">
            <img src={BMW} alt="Mercedes Benz E-Class" class="car-image"></img>
          </div>
          <div class="car-details">
            <h2 class="car-title">BMW 5 Series</h2>
            <div class="car-specs">
              <p>2.0 520D M Sport | 2023 | 17000 km </p>
              <p>Diseal | Automatic</p>
              <p>Grey</p>
            </div>
            <div class="car-price">₹5500000</div>
          </div>
        </div>

        <div class="car-card">
          <div class="car-image-container">
            <img src={MINI} alt="Mercedes Benz E-Class" class="car-image"></img>
          </div>
          <div class="car-details">
            <h2 class="car-title">MINI Cooper CM</h2>
            <div class="car-specs">
              <p>COOPER S COUNTRYMAN | 50,000 Km</p>
              <p>Petrol | Automatic</p>
              <p>Grey</p>
            </div>
            <div class="car-price">₹350000</div>
          </div>
        </div>

        <div class="car-card">
          <div class="car-image-container">
            <img src={AUDI} alt="Mercedes Benz E-Class" class="car-image"></img>
          </div>
          <div class="car-details">
            <h2 class="car-title">Mercedes Benz</h2>
            <div class="car-specs">
              <p>2.0 45 TFSI | 2017 | 37,000 Km</p>
              <p>Petrol | Automatic</p>
              <p>Navy Blue</p>
            </div>
            <div class="car-price">₹370000</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Category;
