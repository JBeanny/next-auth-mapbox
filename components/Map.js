import React, { useState } from "react";
import Map, { Marker, GeolocateControl, NavigationControl } from "react-map-gl";
import * as cities from "../data/cities.json";
import Image from "next/image";
import { useDropdownContext } from "../context/DropdownContext";

const MapBox = () => {
  const [viewport, setViewport] = useState({
    longitude: 104.888535,
    latitude: 11.562108,
    zoom: 10,
  });

  const { status } = useDropdownContext();

  const [selectedCity, setSelectedCity] = useState(null);

  const cityIcon = (
    <svg
      id="Layer_1"
      height="30"
      viewBox="0 0 24 24"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="#0081C9"
    >
      <path d="m11 0h-8a3 3 0 0 0 -3 3v21h14v-21a3 3 0 0 0 -3-3zm-5 19h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm5 12h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm10-2h-5v19h8v-16a3 3 0 0 0 -3-3zm0 14h-2v-2h2zm0-4h-2v-2h2zm0-4h-2v-2h2z" />
    </svg>
  );
  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill="#DC0000"
    >
      <path d="M19.5,2H4.5C2.019,2,0,4.019,0,6.5v11c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,15.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v11Zm-7.146-8.646l-3.146,3.146,3.146,3.146c.195,.195,.195,.512,0,.707-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146l-3.146-3.146-3.146,3.146c-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l3.146-3.146-3.146-3.146c-.195-.195-.195-.512,0-.707s.512-.195,.707,0l3.146,3.146,3.146-3.146c.195-.195,.512-.195,.707,0s.195,.512,0,.707Z" />
    </svg>
  );

  return (
    <div
      className={`flex justify-center items-center transition-all ${
        status ? "-z-50" : "z-10 duration-500"
      }`}
    >
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={viewport}
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
        style={{ width: "80vw", height: "70vh" }}
        minZoom={5}
        maxZoom={15}
        onMove={(e) => setViewport(e.viewState)}
        attributionControl={false}
      >
        <NavigationControl />
        <GeolocateControl />
        {cities.map((city, index) => {
          return (
            <Marker
              key={index}
              latitude={+city.lat}
              longitude={+city.lng}
              onClick={(e) => {
                e.preventDefault;
                setSelectedCity(city);
              }}
            >
              <button className="border-none cursor-pointer">{cityIcon}</button>
            </Marker>
          );
        })}
        <div
          className={`w-[300px] h-[300px] -ml-[150px] -mt-[150px] md:w-[400px] md:h-[400px] md:-ml-[200px] md:-mt-[200px] lg:w-[600px] lg:h-[600px] absolute left-[50%] top-[50%] lg:-ml-[300px] lg:-mt-[300px] bg-white rounded-lg ${
            selectedCity ? "scale-100" : "scale-0"
          } flex flex-col items-center p-8 justify-between transition-all duration-200`}
        >
          <div className="text-lg md:text-xl lg:text-2xl text-center">
            {selectedCity?.admin_name} - {selectedCity?.city}
          </div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Phnom_Penh_Evening_Aerial_View.png/400px-Phnom_Penh_Evening_Aerial_View.png"
            alt="city"
            width={400}
            height={400}
            className="object-cover"
          />
          <div className="text-lg md:text-xl lg:text-2xl">
            Population: {selectedCity?.population || 0} people
          </div>
          <div
            className="absolute top-[10px] right-[10px] cursor-pointer duration-100 transition-all"
            onClick={() => setSelectedCity(null)}
          >
            {closeIcon}
          </div>
        </div>
      </Map>
    </div>
  );
};

export default MapBox;
