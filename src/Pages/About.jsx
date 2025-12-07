import React from 'react'
import ScrollReveal from '../Componets/ScrollReveal';

const About = () => {
  return (
    <div className="m-20">
      <h1 className="subheading text-4xl font-bold text-center">
        <p className="sheading"> About </p> us
      </h1>

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

      <div className='flex justify-center mr-20'>

      <table className='w-full' >
        <thead>
          <tr className='ctext'>
            <th>300+</th>
            <th>Since 2021</th>
            <th>Buy | Sell</th>
          </tr>
        </thead>
        <tbody className='dtext'>
          <tr>
            <td className="px-8 py-0 text-center">
            Luxury Vehical Sold
            </td>
            <td className="px-8 py-0 text-center">
            Trusted Across India
            </td>
            <td className="px-8 py-0 text-center">
            With Ease
            </td>
          </tr>
        </tbody>
      </table>

      </div>
      
    </div>
  );
}

export default About