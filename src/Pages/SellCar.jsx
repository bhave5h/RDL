import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SellCar = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        specs: '',
        color: '',
        price: '',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        regYear: '',
        regState: '',
        kmsDriven: '',
        ownership: '1',
        insuranceType: 'Comprehensive',
        vehicleType: 'Sedan',
        doors: '4',
        drive: 'FWD',
        seatingCapacity: '5',
        features: ''
    });

    const [images, setImages] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            const newImages = files.map(file => ({
                url: URL.createObjectURL(file),
                file
            }));
            setImages(prev => [...prev, ...newImages]);
        }
    };

    const removeImage = (indexToRemove) => {
        setImages(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({
                    title: '', specs: '', color: '', price: '', fuelType: 'Petrol', transmission: 'Automatic',
                    regYear: '', regState: '', kmsDriven: '', ownership: '1', insuranceType: 'Comprehensive',
                    vehicleType: 'Sedan', doors: '4', drive: 'FWD', seatingCapacity: '5', features: ''
                });
                setImages([]);
                window.scrollTo(0, 0);
            }, 3000);
        }, 1500);
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-black text-white px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-cinzel font-extrabold mb-4">Sell Your <span className="text-gold">Car</span></h1>
                    <p className="text-gray-400 text-lg">Provide details about your vehicle to list it on our luxury platform.</p>
                </motion.div>

                {isSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#1A1A1A] border border-green-500/50 p-12 rounded-2xl text-center shadow-2xl shadow-green-900/20"
                    >
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h2 className="text-3xl font-cinzel font-bold text-white mb-4">Submission Successful!</h2>
                        <p className="text-gray-400">Your vehicle has been submitted to our team for review. We will contact you within 24 hours.</p>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-10"
                    >
                        {/* 1. Basic Information */}
                        <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800 shadow-2xl">
                            <h3 className="text-2xl font-cinzel font-bold mb-6 border-b border-gray-800 pb-4 text-gold">Basic Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Vehicle Title Make & Model <span className="text-red-500">*</span></label>
                                    <input required name="title" value={formData.title} onChange={handleInputChange} placeholder="e.g. BMW 5 Series" className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Sub-Specs <span className="text-red-500">*</span></label>
                                    <input required name="specs" value={formData.specs} onChange={handleInputChange} placeholder="e.g. 2.0 520D M Sport" className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Exterior Color <span className="text-red-500">*</span></label>
                                    <input required name="color" value={formData.color} onChange={handleInputChange} placeholder="e.g. Polar White" className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Expected Price <span className="text-red-500">*</span></label>
                                    <input required name="price" value={formData.price} onChange={handleInputChange} placeholder="e.g. ₹55,00,000" className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white" />
                                </div>
                            </div>
                        </div>

                        {/* 2. Quick Stats Specifications */}
                        <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800 shadow-2xl">
                            <h3 className="text-2xl font-cinzel font-bold mb-6 border-b border-gray-800 pb-4 text-gold">Vehicle Specifications</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Fuel Type</label>
                                    <select name="fuelType" value={formData.fuelType} onChange={handleInputChange} className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white appearance-none">
                                        <option value="Petrol">Petrol</option>
                                        <option value="Diesel">Diesel</option>
                                        <option value="Electric">Electric</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Transmission</label>
                                    <select name="transmission" value={formData.transmission} onChange={handleInputChange} className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white appearance-none">
                                        <option value="Automatic">Automatic</option>
                                        <option value="Manual">Manual</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Registration Year <span className="text-red-500">*</span></label>
                                    <input required type="number" min="1990" max="2025" name="regYear" value={formData.regYear} onChange={handleInputChange} placeholder="e.g. 2023" className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Registration State <span className="text-red-500">*</span></label>
                                    <input required name="regState" value={formData.regState} onChange={handleInputChange} placeholder="e.g. Maharashtra (MH)" className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Kilometers Driven <span className="text-red-500">*</span></label>
                                    <input required name="kmsDriven" value={formData.kmsDriven} onChange={handleInputChange} placeholder="e.g. 17000 KMs" className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Ownership Level</label>
                                    <select name="ownership" value={formData.ownership} onChange={handleInputChange} className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white appearance-none">
                                        <option value="1">1st Owner</option>
                                        <option value="2">2nd Owner</option>
                                        <option value="3">3rd Owner</option>
                                        <option value="4+">4th Owner or more</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Insurance Type</label>
                                    <select name="insuranceType" value={formData.insuranceType} onChange={handleInputChange} className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white appearance-none">
                                        <option value="Comprehensive">Comprehensive</option>
                                        <option value="Zero Dep. | Under Warranty">Zero Dep. | Under Warranty</option>
                                        <option value="Third Party">Third Party</option>
                                        <option value="None">None</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Vehicle Type</label>
                                    <select name="vehicleType" value={formData.vehicleType} onChange={handleInputChange} className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white appearance-none">
                                        <option value="Sedan">Sedan</option>
                                        <option value="SUV">SUV</option>
                                        <option value="Coupe">Coupe</option>
                                        <option value="Hatchback">Hatchback</option>
                                        <option value="Convertible">Convertible</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Number of Doors</label>
                                    <select name="doors" value={formData.doors} onChange={handleInputChange} className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white appearance-none">
                                        <option value="2">2 Doors</option>
                                        <option value="4">4 Doors</option>
                                        <option value="5">5 Doors</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Drive Type</label>
                                    <select name="drive" value={formData.drive} onChange={handleInputChange} className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white appearance-none">
                                        <option value="FWD">FWD (Front-Wheel)</option>
                                        <option value="RWD">RWD (Rear-Wheel)</option>
                                        <option value="AWD">AWD (All-Wheel)</option>
                                        <option value="4WD">4WD (Four-Wheel)</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Seating Capacity</label>
                                    <select name="seatingCapacity" value={formData.seatingCapacity} onChange={handleInputChange} className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white appearance-none">
                                        <option value="2">2 Seats</option>
                                        <option value="4">4 Seats</option>
                                        <option value="5">5 Seats</option>
                                        <option value="7">7 Seats</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* 3. Features & Uploads */}
                        <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800 shadow-2xl">
                            <h3 className="text-2xl font-cinzel font-bold mb-6 border-b border-gray-800 pb-4 text-gold">Features & Media</h3>

                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Key Features (Comma separated)</label>
                                    <textarea name="features" value={formData.features} onChange={handleInputChange} rows="3" placeholder="e.g. Sunroof, Leather Seats, 360 Degree Camera..." className="w-full bg-[#2A2A2A] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition text-white resize-none" />
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm text-gray-400 font-semibold tracking-wide">Upload Vehicle Images <span className="text-red-500">*</span></label>

                                    {/* Custom upload box */}
                                    <div className="relative border-2 border-dashed border-gray-600 hover:border-gold rounded-2xl p-8 transition-colors flex flex-col items-center justify-center bg-[#2A2A2A]/50 cursor-pointer overflow-hidden group">
                                        <input
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        />
                                        <svg className="w-12 h-12 text-gray-400 group-hover:text-gold transition-colors mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <p className="font-semibold text-lg text-white mb-1">Click to upload or drag and drop</p>
                                        <p className="text-sm text-gray-400">SVG, PNG, JPG or WEBP (max. 5MB each)</p>
                                    </div>

                                    {/* Image Previews */}
                                    {images.length > 0 && (
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                            {images.map((img, idx) => (
                                                <div key={idx} className="relative group rounded-xl overflow-hidden h-32 border border-gray-700">
                                                    <img src={img.url} alt={`Upload Preview ${idx + 1}`} className="w-full h-full object-cover" />
                                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <button
                                                            type="button"
                                                            onClick={() => removeImage(idx)}
                                                            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6 border-t border-gray-800">
                            <button
                                disabled={isSubmitting || images.length === 0}
                                className={`w-full font-cinzel font-bold text-lg py-5 rounded-2xl shadow-xl transition-all ${isSubmitting || images.length === 0
                                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                        : 'bg-gold text-black hover:shadow-gold/40 hover:bg-[#e6ca6f]'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-3">
                                        <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing Registration...
                                    </span>
                                ) : 'Submit Vehicle Details'}
                            </button>
                            {images.length === 0 && <p className="text-red-500 text-sm mt-3 text-center">Please upload at least one image to proceed.</p>}
                        </div>

                    </motion.form>
                )}
            </div>
        </div>
    );
};

export default SellCar;
