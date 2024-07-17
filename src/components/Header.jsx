"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isClick, setIsClick] = useState(false);
  return (
    <nav className="bg-black h-[80px] sticky top-0 z-50">
      <div className=" px-4 sm:px-6 lg:pr-72 lg:pl-36 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white">
                <Image src={"/logo.svg"} alt="logo" width={150} height={20} />
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a
                href="/"
                className="text-white hover:text-green-600  rounded-lg p-2"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white hover:text-green-600  rounded-lg p-2"
              >
                About
              </a>
              <a
                href="/features"
                className="text-white hover:text-green-600  rounded-lg p-2"
              >
                Features
              </a>
              <a
                href="/contact"
                className="text-white hover:text-green-600  rounded-lg p-2"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsClick(!isClick)}
              aria-label={isClick ? "Close menu" : "Open menu"}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <>
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-2  space-y-1 sm:px-3">
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                About
              </a>
              <a
                href="/features"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Features
              </a>
              <a
                href="/contact"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Contact
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Header;
