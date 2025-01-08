import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../image/logo.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row py-4 px-2 border-b border-b-gray-200 gap-4 lg:items-center">
      <div className=" flex items-center justify-between w-full lg:w-auto">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            height={100}
            width={100}
            alt="logo"
            className="w-24 lg:w-28"
          />
        </Link>

        <div className=" lg:hidden">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className=" bg-gray-100 text-gray-800 py-1.5 px-3 text-sm rounded-lg hover:bg-gray-200 border border-gray-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>

      <div className="w-full lg:max-w-2xl">
        <SearchBar />
      </div>

      {/* DesktopView-Application-Button */}
      <div className="hidden lg:block ml-auto pr-6">
        <SignedOut>
          <SignInButton mode="modal">
            <button className=" bg-gray-100 text-gray-800 py-1.5 px-3 text-sm rounded-lg hover:bg-gray-200 border border-gray-300">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className=" flex items-center gap-3">
            <Link href={"/seller"}>
              <button className=" bg-blue-600 text-white rounded-xl text-sm py-2 px-4 hover:bg-blue-500 transition-all duration-200">
                Sell Tickets
              </button>
            </Link>
            <Link href={"/tickets"}>
              <button className=" bg-gray-100 text-gray-800 rounded-xl text-sm py-2 px-4 hover:bg-gray-200 transition-all duration-200 border border-gray-200">
                My Tickets
              </button>
            </Link>
            <UserButton />
          </div>
        </SignedIn>
      </div>

      {/* Mobile-Application-Button */}
      <div className=" flex justify-center gap-3 w-full lg:hidden">
        <Link href={"/seller"} className="flex-1">
          <button className=" w-full bg-blue-600 text-white rounded-xl text-sm py-2 px-4 hover:bg-blue-500 transition-all duration-200">
            Sell Tickets
          </button>
        </Link>
        <Link href={"/tickets"} className="flex-1">
          <button className=" w-full bg-gray-100 text-gray-800 rounded-xl text-sm py-2 px-4 hover:bg-gray-200 transition-all duration-200 border border-gray-200">
            My Tickets
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
