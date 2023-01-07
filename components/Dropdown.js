import React, { useState, useRef } from "react";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";
import { useDropdownContext } from "../context/DropdownContext";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const sidebarRef = useRef(null);

  const { setStatus, status } = useDropdownContext();

  const CloseIcon = (
    <svg
      version="1.1"
      viewBox="0 0 512.021 512.021"
      width="10"
      height="10"
      fill="#ffffff"
    >
      <g>
        <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z" />
      </g>
    </svg>
  );
  const HamburgerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="#FF7B54"
    >
      <rect y="11" width="24" height="2" rx="1" />
      <rect y="4" width="24" height="2" rx="1" />
      <rect y="18" width="24" height="2" rx="1" />
    </svg>
  );

  const handleClickOutside = (e) => {
    if (!sidebarRef.current.contains(e.target)) setOpen(false);
    setStatus(!status);
  };

  const handleClose = () => {
    setOpen(false);
    setStatus(!status);
  };

  const toggleDropdown = () => {
    setOpen(!open);
    setStatus(!status);
  };
  return (
    <div className="flex lg:hidden relative pr-4">
      <button onClick={toggleDropdown}>{HamburgerIcon}</button>
      <div
        onClick={handleClickOutside}
        className={`fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-[#b2b2b26c] ${
          open ? "flex" : "hidden"
        }`}
      ></div>
      <div
        ref={sidebarRef}
        className={`flex flex-col justify-between pb-[50px] absolute right-0 h-screen bg-white z-50 shadow-sm drop-shadow-md transition-all duration-200 ${
          open ? "scale-x-100" : "scale-x-0 translate-x-[50%]"
        }`}
      >
        <ul className="w-[300px] flex flex-col gap-8">
          <button
            onClick={toggleDropdown}
            className="h-[50px] w-full bg-[#FF7D7D] text-white text-xl flex justify-center items-center gap-4"
          >
            Close <span>{CloseIcon}</span>
          </button>
          <Link
            className="flex justify-center items-center gap-4"
            href="/"
            onClick={handleClose}
          >
            <Image src="/compass.png" alt="Logo" width={30} height={30} />
            <p className="text-xl text-secondary font-bold">
              Bean<span className="text-primary">Compass</span>
            </p>
          </Link>
          <li className="cursor-pointer pl-8">
            <Link
              href="/"
              className="text-lg text-primary"
              onClick={handleClose}
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer pl-8">
            <Link
              href="/map"
              className="text-lg text-primary"
              onClick={handleClose}
            >
              Map
            </Link>
          </li>
          <li className="cursor-pointer pl-8">
            <Link
              href="/about"
              className="text-lg text-primary"
              onClick={handleClose}
            >
              About Me
            </Link>
          </li>
        </ul>
        <div className="mx-auto">
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-lg bg-primary w-[250px] h-[40px] text-white rounded-lg"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="text-lg bg-primary w-[250px] h-[40px] text-white rounded-lg"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
