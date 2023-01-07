import React from "react";
import { useSession } from "next-auth/react";
import Signout from "../components/Signout";
import MapBox from "../components/Map";

const Map = () => {
  const { data: session } = useSession();
  return session ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <MapBox />
    </div>
  ) : (
    <Signout />
  );
};

export default Map;
