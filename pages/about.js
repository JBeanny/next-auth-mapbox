import React from "react";
import * as info from "../data/info.json";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full lg:w-[80%] h-screen flex justify-center items-center gap-8 mx-auto">
      <div className="w-full lg:w-[50%] h-screen flex flex-col justify-center items-center lg:items-start gap-8">
        <div className="text-sm md:text-lg lg:text-2xl font-bold text-secondary">
          Hi There ! My name is{" "}
          <span className="text-primary uppercase">
            {info.firstname} {info.lastname}
          </span>
        </div>
        <div className="text-sm md:text-lg lg:text-2xl font-bold text-secondary text-center lg:text-start">
          I am the developer of this small demo with MapBox and Next Auth
        </div>
        <div className="text-sm md:text-lg lg:text-2xl font-bold text-white bg-primary rounded-lg p-4 w-[90%] md:w-[60%] lg:w-[50%]">
          Here are my contacts
        </div>
        <ul className="text-sm md:text-lg lg:text-2xl font-bold text-secondary flex flex-col gap-8 pl-8">
          <li
            className="flex gap-4 items-center cursor-pointer"
            onClick={() => window.open(`${info.social_media.facebook}`)}
          >
            <Image
              src="/svg/facebook.svg"
              alt="facebook"
              width={30}
              height={30}
            />
            {info.social_media.facebook}
          </li>
          <li
            className="flex gap-4 items-center cursor-pointer"
            onClick={() => window.open(`${info.social_media.instagram}`)}
          >
            <Image
              src="/svg/instagram.svg"
              alt="facebook"
              width={30}
              height={30}
            />
            {info.social_media.instagram}
          </li>
          <li
            className="flex gap-4 items-center cursor-pointer"
            onClick={() => window.open(`${info.social_media.telegram}`)}
          >
            <Image
              src="/svg/telegram.svg"
              alt="facebook"
              width={30}
              height={30}
            />
            {info.social_media.telegram}
          </li>
        </ul>
      </div>
      <div className="w-[600px] h-[500px] hidden lg:flex justify-center items-center gap-4 bg-primary rounded-lg">
        <Image
          src="/profile.jpg"
          alt="profile"
          width={200}
          height={200}
          className="object-contain w-[80%] rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
