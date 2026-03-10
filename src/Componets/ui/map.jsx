import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { Map as PigeonMap, Marker as PigeonMarker } from "pigeon-maps";
import { Button } from "./button";
import { Star, Navigation, Clock, ExternalLink } from "lucide-react";

const MarkerContext = createContext();

export function Map({ center, zoom, children, className, ...props }) {
    return (
        <div className={`relative w-full h-full h-[100%] ${className || ""}`}>
            <PigeonMap defaultCenter={center} defaultZoom={zoom} center={center} zoom={zoom} {...props}>
                {children}
            </PigeonMap>
        </div>
    );
}

export const Maps = Map;

export function MapMarker({ longitude, latitude, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <PigeonMarker anchor={[latitude, longitude]} offset={[0, 0]}>
            <MarkerContext.Provider value={{ isOpen, setIsOpen }}>
                <div ref={popupRef} className="relative flex flex-col items-center group">
                    {children}
                </div>
            </MarkerContext.Provider>
        </PigeonMarker>
    );
}

export function MarkerContent({ children }) {
    const { setIsOpen } = useContext(MarkerContext);
    return (
        <div
            className="relative z-10 cursor-pointer"
            onClick={(e) => {
                e.stopPropagation();
                setIsOpen((prev) => !prev);
            }}
        >
            {children}
        </div>
    );
}

export function MarkerLabel({ position, children }) {
    const positionClasses = {
        top: "bottom-full mb-2",
        bottom: "top-full mt-2",
        left: "right-full mr-2",
        right: "left-full ml-2",
    };

    const positionClass = positionClasses[position] || positionClasses.bottom;

    return (
        <div className={`absolute left-1/2 -translate-x-1/2 ${positionClass} whitespace-nowrap bg-black text-white px-2 py-1 rounded text-[10px] font-medium pointer-events-none drop-shadow-md z-0`}>
            {children}
        </div>
    );
}

export function MarkerPopup({ className, children }) {
    const { isOpen } = useContext(MarkerContext);

    if (!isOpen) return null;

    return (
        <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white text-black border rounded-xl shadow-2xl z-50 ${className || ""}`}>
            {children}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white" />
        </div>
    );
}

export function darkmap() {
    const places = [
        {
            id: 1,
            name: "The Metropolitan Museum of Art",
            label: "Museum",
            category: "Museum",
            rating: 4.8,
            reviews: 12453,
            hours: "10:00 AM - 5:00 PM",
            image: "https://images.unsplash.com/photo-1575223970966-76ae61ee7838?w=300&h=200&fit=crop",
            lng: -73.9632,
            lat: 40.7794,
        }
    ];

    return (
        <div className="h-[500px] w-full">
            <Map center={[-73.98, 40.74]} zoom={11}>
                {places.map((place) => (
                    <MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
                        <MarkerContent>
                            <div className="w-5 h-5 rounded-full bg-rose-500 border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" />
                            <MarkerLabel position="bottom">{place.label}</MarkerLabel>
                        </MarkerContent>
                        <MarkerPopup className="p-0 w-64 rounded-xl overflow-hidden">
                            <div className="relative h-32 overflow-hidden">
                                <img src={place.image} alt={place.name} className="object-cover w-full h-full" />
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
                                        Directions
                                    </Button>
                                    <Button size="sm" variant="outline" className="h-8 w-10 border border-gray-200 bg-white hover:bg-gray-100 rounded-md flex items-center justify-center">
                                        <ExternalLink className="w-3.5 h-3.5 text-black" />
                                    </Button>
                                </div>
                            </div>
                        </MarkerPopup>
                    </MapMarker>
                ))}
            </Map>
        </div>
    );
}
