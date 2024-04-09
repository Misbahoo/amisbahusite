"use client";

import Link from "next/link";
import { ImHome } from "react-icons/im";
import { FaRegEnvelope } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { BsFileBarGraph } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col p-5 fixed w-2/12 min-h-screen bg-gradient-to-t from-gray-950 to-gray-700 justify-center items-center">
      <div className="flex flex-col mb-10 justify-center items-center">
        <div className="flex w-28 h-28 rounded-full bg-white mb-10 justify-center items-center p-5">
          <p>Picture</p>
        </div>
        <div className="text-gray-200 text-center">
          <p className="text-2xl">{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
        </div>
      </div>
      <div className="flex flex-col text-gray-200 gap-10 w-full">
        <Link href="/" className="flex gap-5 items-center">
          <div className="w-1/6 flex justify-end">
            <ImHome />
          </div>
          <div className="w-5/6 flex justify-start">
            <p>Home</p>
          </div>
        </Link>
        <Link href="/" className="flex gap-5 justify-center items-center">
          <div className="flex justify-end w-1/6">
            <FaRegEnvelope />
          </div>
          <div className="flex justify-start w-5/6">
            <p>Messages</p>
          </div>
        </Link>
        <Link href="/" className="flex gap-5 justify-center items-center">
          <div className="flex justify-end w-1/6">
            <MdNotificationsNone />
          </div>
          <div className="flex justify-start w-5/6">
            <p>Notification</p>
          </div>
        </Link>
        <Link href="/" className="flex gap-5 items-center">
          <div className="flex justify-end w-1/6">
            <SlLocationPin />
          </div>
          <div className="flex justify-start w-5/6">
            <p>Location</p>
          </div>
        </Link>
        <Link href="/" className="flex gap-5 items-center">
          <div className="flex w-1/6 justify-end">
            <BsFileBarGraph />
          </div>
          <div className="flex w-5/6 justify-start">
            <p>Graph</p>
          </div>
        </Link>
        <button
          className="text-white p-3 bg-blue-700"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
