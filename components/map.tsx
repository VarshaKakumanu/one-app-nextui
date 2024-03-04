"use client";
// map.tsx
import React, { useEffect, useState, FunctionComponent } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; // Import the CSS for Mapbox

// Define props type
interface MapProps {
  longitude: number;
  latitude: number;
  zoom: number;
}

const Map: FunctionComponent<MapProps> = ({ longitude, latitude, zoom }) => {
  const [isClient, setIsClient] = useState(false);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    // Set isClient to true once the component mounts on the client
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      mapboxgl.accessToken =
        "pk.eyJ1IjoidGVzdGVyYWNjMDA0IiwiYSI6ImNsdDZqcXpuaTA1dTEybXJ4Z3EwanNxaWkifQ.dlOpCXeF50I_ntpX5OtB3A"; // Use your Mapbox access token

      const initializeMap = new mapboxgl.Map({
        container: "mapContainer", // Use the container ID
        style: "mapbox://styles/mapbox/streets-v11", // Specify the map style
        center: [longitude, latitude], // Specify the initial map center coordinates
        zoom: zoom, // Specify the initial zoom level
      });

      initializeMap.on("load", function () {
        // Add marker
        new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .addTo(initializeMap);

        // Add compass
        initializeMap.addControl(new mapboxgl.NavigationControl());

        // Add layer
        initializeMap.addLayer({
          id: "points",
          type: "symbol",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [longitude, latitude],
                  },
                  properties: {
                    name: "My Point",
                    description: "This is a point I added to my map.",
                  },
                },
              ],
            },
          },
        });
      });

      setMap(initializeMap);
    }
  }, [isClient]); // Depend on isClient and map props

  // Conditionally render the map container based on isClient
  return isClient ? <div id='mapContainer' className='map-container' /> : null;
};

export default Map;
