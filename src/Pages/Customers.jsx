import React from 'react'
import Masonry from '../Componets/Masonry';
import image1 from '../assets/image 1.png';
import image2 from '../assets/image 2.png';
import image3 from '../assets/image 3.png';
import image4 from '../assets/image 4.png';
import image5 from '../assets/image 5.png';
import image6 from '../assets/image 6.png';
import image7 from '../assets/image 7.png';
import image8 from '../assets/image 8.png';
import image9 from '../assets/image 9.png';
import image10 from '../assets/image 10.png';

const items = [
  {
    id: "1",
    img: image1,
    url: "https://www.instagram.com/richdriveluxurycars/",
    height: 500,
  },
  {
    id: "2",
    img: image2,
    url: "https://www.instagram.com/richdriveluxurycars/",
    height: 350,
  },
  {
    id: "3",
    img: image3,
    url: "https://www.instagram.com/richdriveluxurycars/",
    height: 700,
  },
  {
    id: "4",
    img: image4,
    url: "https://www.instagram.com/richdriveluxurycars/",
    height: 300,
  },
  {
    id: "5",
    img: image5,
    url: "https://www.instagram.com/richdriveluxurycars/",
    height: 500,
  },
  {
    id: "6",
    img: image6,
    url: "https://www.instagram.com/richdriveluxurycars/",
    height: 600,
  },
  {
    id: "7",
    img: image7,
    url: "https://www.instagram.com/richdriveluxurycars/",
    height: 500,
  },
  {
    id: "8",
    img: image8,
    url: "https://www.instagram.com/richdriveluxurycars/",
    height: 600,
  },
  {
    id: "9",
    img: image9,
    url: "https://www.instagram.com/richdriveluxurycars/",
    height: 600,
  },
  {
    id: "10",
    img: image10,
    url: "https://www.instagram.com/richdriveluxurycars/",
    height: 400,
  },
];

const Customers = () => {
  return (

    <div>

      <h1 className="sheading text-4xl font-bold text-center mt-15">
        <p className="subheading"> OUR HAPPY </p> Costumers 
      </h1>

      <div className='a'>

      <div className='b'>
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

      </div>

    </div>


  );
}

export default Customers