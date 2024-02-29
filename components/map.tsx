// page.js
"use client";

import Map, { NavigationControl, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@/styles/globals.css";

export default function Mapui() {
  const mapboxToken =
    "sk.eyJ1IjoidGVzdGVyYWNjMDA0IiwiYSI6ImNsdDRub242cDA0dGoyaXFlaTg3ZHN6dWcifQ.FHA0oSIs5AckLPVa_U6dbg";

  return (
    <main className='mainStyle'>
      <Map
        mapboxAccessToken={mapboxToken}
        mapStyle='mapbox://styles/mapbox/streets-v12'
        className={"mapStyle" as string}
        initialViewState={{
          latitude: 35.668641,
          longitude: 139.750567,
          zoom: 10,
        }}
        maxZoom={20}
        minZoom={3}>
        <GeolocateControl position='top-left' />
        <NavigationControl position='top-left' />
      </Map>
    </main>
  );
}
