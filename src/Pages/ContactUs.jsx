import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Map, MapMarker, MarkerContent, MarkerLabel, MarkerPopup } from "../Componets/ui/map";
import { Button } from "../Componets/ui/button";
import { Star, Navigation, Clock, ExternalLink } from "lucide-react";

const places = [
    {
        id: 1,
        name: "Rich Drive Luxury",
        label: "Dealership",
        category: "Luxury Dealership",
        rating: 5.0,
        reviews: 342,
        hours: "10:00 AM - 8:00 PM",
        image: "/assets/image 1.png", // Use a real car asset from the project
        lng: 79.1102,
        lat: 21.1449,
    }
];

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-black text-white px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-cinzel font-extrabold mb-4">Contact <span className="text-gold">Us</span></h1>
                    <p className="text-gray-400 text-lg">Visit our showroom or get in touch with our luxury automotive experts.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-10 bg-[#1A1A1A] p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl flex flex-col justify-center"
                    >
                        <h2 className="text-3xl font-cinzel font-bold text-gold border-b border-gray-800 pb-4">Our Showroom</h2>

                        <div className="space-y-8">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-zinc-900 p-3 rounded-xl border border-gray-800 text-gold">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Location</h4>
                                    <p className="text-gray-400 leading-relaxed text-sm">Rich Drive Luxury<br />Chitnis Park, Mahal<br />Nagpur, Maharashtra 440032</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-zinc-900 p-2.5 rounded-xl border border-gray-800 text-gold">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Phone</h4>
                                    <div className="text-gray-400 leading-relaxed text-sm flex flex-col">
                                        <a href="tel:+918055558005" className="hover:text-gold transition-colors">+91 8055558005</a>
                                        <a href="tel:+917066405000" className="hover:text-gold transition-colors">+91 7066405000</a>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-zinc-900 p-2.5 rounded-xl border border-gray-800 text-gold">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Email</h4>
                                    <a href="mailto:info@richdriveluxury.com" className="text-gray-400 leading-relaxed text-sm hover:text-gold transition-colors">info@richdriveluxury.com</a>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-zinc-900 p-3 rounded-xl border border-gray-800 text-gold">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Business Hours</h4>
                                    <p className="text-gray-400 leading-relaxed text-sm">Mon - Sun: 10:00 AM - 8:00 PM</p>
                                </div>
                            </div>

                            {/* Separator */}
                            <hr className="border-gray-800" />

                            {/* Socials */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 font-cinzel text-gold">Follow Us</h4>
                                <div className="flex space-x-4">
                                    {/* WhatsApp */}
                                    <a href="https://www.whatsapp.com/catalog/919503414649/?app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-gray-800 hover:bg-green-600 hover:text-white text-gray-400 transition-all duration-300">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.52 3.48A11.8 11.8 0 0012 0C5.37 0 0 5.37 0 12a11.88 11.88 0 001.64 5.96L0 24l6.21-1.63A11.92 11.92 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.68.97 1-3.58-.24-.37A9.92 9.92 0 1122 12c0 5.52-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.9 1.08-.17.19-.33.21-.61.07a8.03 8.03 0 01-2.35-1.45 8.73 8.73 0 01-1.63-2.03c-.17-.29-.02-.45.12-.59.12-.12.28-.33.43-.5.14-.17.19-.29.28-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.53-.88-2.1-.23-.55-.46-.48-.64-.48-.17-.01-.36-.01-.55-.01s-.5.07-.76.35c-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.19 2.02 3.08 4.88 4.32 2.86 1.23 2.86.82 3.37.77.52-.05 1.65-.67 1.88-1.33.24-.66.24-1.24.17-1.36-.06-.12-.24-.19-.52-.33z" />
                                        </svg>
                                    </a>
                                    {/* Instagram */}
                                    <a href="https://www.instagram.com/richdriveluxurycars/" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-gray-800 hover:bg-pink-600 hover:text-white text-gray-400 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                                            <path d="M17.5 6.5h.01"></path>
                                        </svg>
                                    </a>
                                    {/* Facebook */}
                                    <a href="https://www.facebook.com/rich.drive.2025/" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-gray-800 hover:bg-blue-600 hover:text-white text-gray-400 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interactive Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="h-[450px] lg:h-auto min-h-[450px] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl relative bg-[#1E1E1E]"
                    >
                        <Map center={[21.1449, 79.1102]} zoom={15}>
                            {places.map((place) => (
                                <MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
                                    <MarkerContent>
                                        <div className="w-5 h-5 rounded-full bg-gold border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" />
                                        <MarkerLabel position="bottom">{place.label}</MarkerLabel>
                                    </MarkerContent>
                                    <MarkerPopup className="p-0 w-64 rounded-xl overflow-hidden">
                                        <div className="relative h-32 w-full overflow-hidden">
                                            <img
                                                src={place.image}
                                                alt={place.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="space-y-2 p-3 text-left">
                                            <div>
                                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                                                    {place.category}
                                                </span>
                                                <h3 className="font-semibold text-black leading-tight text-sm">
                                                    {place.name}
                                                </h3>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm">
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                                    <span className="font-medium">{place.rating}</span>
                                                    <span className="text-gray-500 text-xs">
                                                        ({place.reviews.toLocaleString()})
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span>{place.hours}</span>
                                            </div>
                                            <div className="flex gap-2 pt-1 text-black">
                                                <Button size="sm" className="flex-1 h-8 bg-zinc-900 text-white hover:bg-zinc-800 rounded-md shadow flex items-center justify-center">
                                                    <Navigation className="w-3.5 h-3.5 mr-1.5" />
                                                    <a href="https://maps.app.goo.gl/MzBdy1HJmydmjjm4A" target="_blank" rel="noopener noreferrer" className="flex-1 w-full h-full text-white hover:text-white text-sm no-underline inline-block leading-8">
                                                        Directions
                                                    </a>
                                                </Button>
                                                <Button size="sm" variant="outline" className="h-8 w-10 border border-gray-200 bg-white hover:bg-gray-100 rounded-md flex items-center justify-center">
                                                    <a href="https://maps.app.goo.gl/MzBdy1HJmydmjjm4A" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black">
                                                        <ExternalLink className="w-3.5 h-3.5" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </MarkerPopup>
                                </MapMarker>
                            ))}
                        </Map>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;
