"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { scrollToSection, sections } from "@/utils/utils";

function Header() {
  const [isClick, setIsClick] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    //function to get current section while scrolling
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            current = section;
          }
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-black py-6 sticky top-0 z-50">
      <div className="px-8 md:px-20 xl:px-36 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="#">
                <Image src={"/logo.svg"} alt="logo" width={150} height={42} />
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <ul className="ml-4 flex items-center gap-10 list-none">
              {sections.map((item) => (
                <li
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={` hover:text-green-600 rounded-lg p-2 cursor-pointer ${
                    currentSection === item ? "text-green-600" : "text-white"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
              <li>
                <Button variant="subscribe" className="bg-spotify-gradient">
                  Login to Your Academy
                </Button>
              </li>
            </ul>
          </div>

          {/* mobile menu */}

          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-full text-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
      <div
        className={`md:hidden bg-black transition-max-height duration-500 ease-in-out overflow-hidden ${
          isClick ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-2 pt-2 pb-5 space-y-1 sm:px-3 list-none">
          {sections.map((item) => (
            <li
              key={item}
              onClick={() => {
                scrollToSection(item);
                setIsClick(false);
              }}
              className={`text-white block hover:bg-green-600 rounded-lg p-2 cursor-pointer ${
                currentSection === item ? "bg-green-600" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
          <li className="p-2">
            <Button variant="subscribe" className="bg-spotify-gradient">
              Login to Your Academy
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
