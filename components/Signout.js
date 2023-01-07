import React from "react";
import { signIn } from "next-auth/react";

const Signout = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4 bg-white">
      <div className="text-sm md:text-md lg:text-lg text-black">
        You can only view the content as you signed in
      </div>
      <button
        onClick={() => signIn()}
        className="w-[200px] py-2 bg-black text-white rounded-md"
      >
        Sign in
      </button>
    </div>
  );
};

export default Signout;
