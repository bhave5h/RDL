import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { carsData } from '../data/cars';

const CarDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const car = carsData.find(c => c.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    if (!car) {
        return (
            <div className="pt-32 min-h-screen flex flex-col items-center text-white">
                <h1 className="text-4xl font-cinzel font-bold mb-4">Car Not Found</h1>
                <button onClick={() => navigate('/buy-car')} className="text-gold underline">Return to Cars</button>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 min-h-screen bg-black text-white px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Header section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8"
                >
                    <div>
                        <button
                            onClick={() => navigate(-1)}
                            className="mb-4 text-gray-400 hover:text-gold flex items-center gap-2 transition"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Back
                        </button>
                        <h1 className="text-4xl md:text-5xl font-cinzel font-bold">{car.title}</h1>
                        <p className="text-xl text-gray-400 mt-2">{car.specs}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-left md:text-right">
                        <p className="text-4xl font-bold text-gold">{car.price}</p>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onClick={() => setSelectedImage(car.images[0])}
                    className="w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-black/80 cursor-pointer"
                >
                    <img src={car.images[0]} alt={car.title} className="w-full h-full object-cover" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Details & Gallery */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Quick Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-[#1E1E1E] text-white p-8 rounded-2xl grid grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-2"
                        >
                            {[
                                {
                                    label: "FUEL TYPE",
                                    value: car.fuelType,
                                    icon: <svg className="w-8 h-8 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 11l7-7 7 7M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" /></svg>
                                },
                                {
                                    label: "REG. YEAR",
                                    value: car.regYear,
                                    icon: <svg className="w-8 h-8 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                },
                                {
                                    label: "REG. STATE",
                                    value: car.regState,
                                    icon: <svg className="w-8 h-8 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                },
                                {
                                    label: "KMS. DRIVEN",
                                    value: car.kmsDriven,
                                    icon: <svg className="w-8 h-8 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                },
                                {
                                    label: "OWNERSHIP",
                                    value: car.ownership,
                                    icon: <svg className="w-8 h-8 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                },
                                {
                                    label: "INSURANCE TYPE",
                                    value: car.insuranceType,
                                    icon: <svg className="w-8 h-8 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                },
                                {
                                    label: "VEHICLE TYPE",
                                    value: car.vehicleType,
                                    icon: <svg className="w-8 h-8 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13h2l.4 2M7 21h10a2 2 0 002-2v-5a2 2 0 00-2-2H7a2 2 0 00-2 2v5a2 2 0 002 2zM5 11V7a2 2 0 012-2h10a2 2 0 012 2v4M10 13h4" /></svg>
                                },
                                {
                                    label: "DOORS",
                                    value: car.doors,
                                    icon: <svg className="w-8 h-8 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                                },
                                {
                                    label: "DRIVE",
                                    value: car.drive,
                                    icon: <svg className="w-8 h-8 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                                },
                                {
                                    label: "SEATING CAPACITY",
                                    value: car.seatingCapacity,
                                    icon: <svg className="w-8 h-8 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    {stat.icon}
                                    <p className="text-sm tracking-wider text-gray-300 mb-1">{stat.label}</p>
                                    <p className="font-bold text-sm text-white">{stat.value}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Gallery */}
                        <div>
                            <h3 className="text-2xl font-cinzel font-bold mb-6">Gallery</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {car.images.slice(1).map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => setSelectedImage(img)}
                                        className="rounded-xl overflow-hidden h-48 md:h-64 shadow-lg cursor-pointer"
                                    >
                                        <img src={img} alt={`${car.title} ${idx + 2}`} className="w-full h-full object-cover" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Sidebar / Features */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="bg-[#1A1A1A] p-6 lg:p-8 rounded-2xl  shadow-2xl">
                            <h3 className="text-2xl font-cinzel font-bold mb-6 border-b border-gray-800 pb-4">Key Features</h3>
                            <ul className="space-y-4">
                                {car.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-lg">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full mt-8 bg-zinc-900 border-1 border-zinc-600 text-white font-cinzel font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-gold/50 hover:bg-zinc-800 transition-all">
                                Contact Dealer
                            </button>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Fullscreen Image Preview Area */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-[210]"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        {/* Enlarged image */}
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                            src={selectedImage}
                            alt="Preview"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CarDetails;
