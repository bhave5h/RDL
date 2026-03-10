import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { carsData } from '../data/cars';

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.3 } }
};

const BuyCar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const filteredCars = carsData.filter(car =>
        car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.fuel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.color.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-32 pb-20 min-h-screen w-full px-6 md:px-12 lg:px-20 text-white">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-cinzel font-extrabold text-center mb-10"
            >
                Buy <span className="text-gold">Car</span>
            </motion.h1>

            <div className="max-w-xl mx-auto mb-16 relative">
                <input
                    type="text"
                    placeholder="Search for cars, fuel types, colors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-gray-700 text-white px-6 py-4 rounded-full pl-6 pr-14 focus:outline-none focus:border-gold transition-colors text-lg"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center max-w-[1400px] mx-auto">
                <AnimatePresence>
                    {filteredCars.map((car) => (
                        <motion.div
                            layout
                            key={car.id}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={cardVariants}
                            className="bg-[#1E1E1E] flex flex-col text-white rounded-xl overflow-hidden w-full max-w-[300px] shadow-lg transition-shadow hover:shadow-2xl hover:shadow-black/50"
                        >
                            <div className="overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    src={car.img}
                                    alt={car.title}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h2 className="text-xl font-semibold text-gray-300">{car.title}</h2>
                                <div className="mt-2 text-sm text-gray-400 space-y-1">
                                    <p>{car.specs}</p>
                                    <p>{car.fuel}</p>
                                    <p>{car.color}</p>
                                </div>
                                <div className="mt-4 mb-4 flex items-center justify-between">
                                    <p className="text-2xl font-bold text-white">{car.price}</p>
                                </div>

                                <div className="mt-auto">
                                    <button
                                        onClick={() => navigate(`/car/${car.id}`)}
                                        className="font-semibold cursor-pointer w-fit p-5 bg-zinc-900 border-1 border-zinc-600 hover:bg-zinc-800 py-2 rounded-xl transition-colors duration-300"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredCars.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full text-center text-gray-500 mt-10"
                >
                    <p className="text-xl">No cars found matching "{searchTerm}"</p>
                </motion.div>
            )}
        </div>
    );
};

export default BuyCar;
