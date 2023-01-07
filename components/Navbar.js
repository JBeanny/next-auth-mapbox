import React from "react";
import Link from "next/link";
import { signOut, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="w-screen fixed h-[50px] md:h-[80px] lg:h-[80px] top-0 bg-white shadow-md drop-shadow-md flex justify-between px-0 md:px-8 lg:px-12">
        <Link
          className="flex justify-center items-center h-full gap-4 pl-4"
          href="/"
        >
          <Image
            src="/compass.png"
            alt="Logo"
            width={30}
            height={30}
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px]"
          />
          <div className="hidden md:flex lg:flex font-bold text-xl text-secondary">
            Bean<span className="text-primary">Compass</span>
          </div>
        </Link>
        <div className="w-2/3 md:w-1/2 lg:w-1/2 hidden lg:flex gap-6 justify-end items-center font-semibold">
          <Link href="/" className="text-sm md:text-md lg:text-lg text-primary">
            Home
          </Link>
          <Link
            href="/map"
            className="text-sm md:text-md lg:text-lg text-primary"
          >
            Map
          </Link>
          <Link
            href="/about"
            className="text-sm md:text-md lg:text-lg text-primary"
          >
            About Me
          </Link>
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-sm md:text-md lg:text-lg bg-primary w-[100px] h-[40px] text-white rounded-lg"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="text-sm md:text-md lg:text-lg bg-primary w-[100px] h-[40px] text-white rounded-lg"
            >
              Sign In
            </button>
          )}
        </div>
        <Dropdown />
      </div>
    </>
  );
};

export default Navbar;
