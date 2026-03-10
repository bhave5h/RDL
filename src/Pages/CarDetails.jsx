import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { carsData } from '../data/cars';

const CarDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const car = carsData.find(c => c.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

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
                    className="w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-black/80"
                >
                    <img src={car.images[0]} alt={car.title} className="w-full h-full object-cover" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Details & Gallery */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            {[
                                { label: "Fuel Type", value: car.fuel.split(" | ")[0] },
                                { label: "Transmission", value: car.fuel.split(" | ")[1] },
                                { label: "Color", value: car.color },
                                { label: "Mileage", value: car.specs.split(" | ")[2] || "N/A" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800">
                                    <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                                    <p className="font-semibold text-lg">{stat.value}</p>
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
                        <div className="bg-[#1A1A1A] p-6 lg:p-8 rounded-2xl border border-gray-800 shadow-2xl">
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
        </div>
    );
};

export default CarDetails;
