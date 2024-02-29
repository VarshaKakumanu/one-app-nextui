"use client";
import Cardcomponent from "@/components/card";
import Map from "@/components/map";

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div
        id='mapContainer'
        className='inline-block max-w-lg text-center justify-center'>
        <Map longitude={0} latitude={0} zoom={0} />
      </div>
      <div>
        <Cardcomponent />
      </div>
    </section>
  );
}
