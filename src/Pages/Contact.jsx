import React from "react";
import Audi from "../assets/car1.png";
import Logo from '../assets/logo.svg';

const Contact = () => {
  return (
    <div>

      <div className="flex items-end w-full">
        <footer className="w-full body-font border">
          <div className="container flex flex-wrap px-5 py-10 mx-auto md:items-start md:flex-row flex-col">
            {/* Logo + Description + Social Icons */}
            <div className="flex-shrink-0 w-70 md:text-left md:mx-5">
              <a className="flex items-center justify-center md:justify-start font-medium text-gray-900 title-font">
                <img
                  src={Logo}
                  alt="Rich Drive Luxury Logo"
                  className="w-40 h-auto"
                />
              </a>

              {/* Social Icons */}
              <div className="mt-1 mr-5">
                <span className="inline-flex">
                  <a className="text-white-500 hover:text-green-500 cursor-pointer" href="https://www.whatsapp.com/catalog/919503414649/?app_absent=0&utm_source=ig">
                    <svg
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.52 3.48A11.8 11.8 0 0012 0C5.37 0 0 5.37 0 12a11.88 11.88 0 001.64 5.96L0 24l6.21-1.63A11.92 11.92 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.68.97 1-3.58-.24-.37A9.92 9.92 0 1122 12c0 5.52-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.9 1.08-.17.19-.33.21-.61.07a8.03 8.03 0 01-2.35-1.45 8.73 8.73 0 01-1.63-2.03c-.17-.29-.02-.45.12-.59.12-.12.28-.33.43-.5.14-.17.19-.29.28-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.53-.88-2.1-.23-.55-.46-.48-.64-.48-.17-.01-.36-.01-.55-.01s-.5.07-.76.35c-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.19 2.02 3.08 4.88 4.32 2.86 1.23 2.86.82 3.37.77.52-.05 1.65-.67 1.88-1.33.24-.66.24-1.24.17-1.36-.06-.12-.24-.19-.52-.33z" />
                    </svg>
                  </a>

                  <a className="ml-3 text-white-500 hover:text-pink-500 cursor-pointer" href="https://www.instagram.com/richdriveluxurycars/">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5" ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                      <path d="M17.5 6.5h.01"></path>
                    </svg>
                  </a>

                  <a className="ml-3 text-white-500 hover:text-blue-700 cursor-pointer" href="https://maps.app.goo.gl/MzBdy1HJmydmjjm4A">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </a>

                  <a className="text-white-500 hover:text-blue-500 cursor-pointer" href="https://www.facebook.com/rich.drive.2025/">
                    {/* Facebook */}
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>


                </span>
              </div>
            </div>

            {/* Footer Columns */}
            <div className="flex flex-wrap flex-grow mt-10 md:pl-20 md:mt-0 text-center md:text-left -mb-10">
          
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <h2 className="mb-3 text-sm font-medium tracking-widest uppercase">
                  Contact us
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a>
                     +91 8055558005 
                    </a>
                  </li>
                  <li className="mt-3">
                    <a>
                      +91 7066405000
                    </a>
                  </li>
                  <li className="mt-3">
                    <a>
                      
                    </a>
                  </li>
                </nav>
              </div>

              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <h2 className="mb-3 text-sm font-medium tracking-widest uppercase">
                  Loaction
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a href="https://maps.app.goo.gl/MzBdy1HJmydmjjm4A">
                    Rich Drive Luxury,Chitnis Park,Mahal, Nagpur 440032
                    </a>
                  </li>
                  <li className="mt-3">

                  </li>
                  <li className="mt-3">
                    <a>
                      
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer">
            <div className="container mx-auto px-5 py-4">
              <p className="text-sm text-center">
                © 2025 Rich Drive Luxury — All rights reserved <a href="https://github.com/bhave5h">| Website By Bhavesh</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
