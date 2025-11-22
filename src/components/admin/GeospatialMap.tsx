"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { fetchSchoolLocations } from "@/app/admin/dashboard/actions";

export default function GeospatialMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const initMap = async () => {
            try {
                const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

                if (!apiKey) {
                    setError("Google Maps API key not configured");
                    setIsLoading(false);
                    return;
                }

                const loader = new Loader({
                    apiKey,
                    version: "weekly",
                });

                const { Map } = await loader.importLibrary("maps");
                const { AdvancedMarkerElement } = await loader.importLibrary("marker");

                if (mapRef.current) {
                    // Centrado en Antioquia, Colombia (Medellín)
                    const map = new Map(mapRef.current, {
                        center: { lat: 6.2442, lng: -75.5812 },
                        zoom: 10,
                        mapId: "DEMO_MAP_ID",
                    });

                    // Obtener ubicaciones desde actions.ts
                    const locations = await fetchSchoolLocations();

                    locations.forEach((location) => {
                        new AdvancedMarkerElement({
                            map,
                            position: location,
                            title: location.title,
                        });
                    });
                }

                setIsLoading(false);
            } catch (err) {
                console.error("Error loading map:", err);
                setError("Error loading map");
                setIsLoading(false);
            }
        };

        initMap();
    }, []);

    if (error) {
        return (
            <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                    <p className="text-gray-500">Cargando mapa...</p>
                </div>
            )}
            <div ref={mapRef} className="w-full h-full"></div>
        </div>
    );
}
