import { useSession } from "next-auth/react";
import Image from "next/image";
import Signout from "../components/Signout";

export default function Component() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-4 bg-white">
        <div className="text-sm md:text-md lg:text-lg text-black">
          Signed in as {session.user.email}
        </div>
        <Image
          src={session.user.image}
          alt="avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="text-sm md:text-md lg:text-lg text-[#383838] uppercase">
          {session.user.name}
        </div>
        <div className="text-md md:text-lg lg:text-xl text-[#FF7B54] uppercase lg:w-[30%] text-center font-bold">
          This website is a demo of next-auth to login with Github and MapBox
          with Tailwindcss
        </div>
      </div>
    );
  }
  return <Signout />;
}
