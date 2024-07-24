"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { scrollToSection, sections } from "@/utils/utils";

function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col gap-5 w-full py-12 px-8  xl:px-36 lg:px-20 md:px-20">
      {/* news letter */}
      <div>
        <h2 className="text-[20px]">Newsletter</h2>
        <p className="text-[15px] mt-6 mb-4">
          Stay updated with the latest features and releases.
        </p>

        <div className="mt-3 mb-2 flex flex-col md:flex-row gap-2">
          <input
            type="email"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="w-full md:w-[40vw] h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Enter your email"
          />
          <Button variant="subscribe" className="w-[200px] h-[50px]">
            Subscribe
          </Button>
        </div>

        <p id="helper-text-explanation" className="mt-3 text-sm ">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates.
        </p>
      </div>
      {/* Quick Links */}
      <div className="mt-5">
        <h3 className="text-3xl my-3">Quick Links</h3>
        <ul className="flex flex-col lg:flex-row gap-2 lg:gap-10">
          {sections.map((menu) => (
            <li
              key={menu}
              onClick={() => scrollToSection(menu)}
              className="w-full lg:w-auto flex justify-start cursor-pointer hover:text-green-600"
            >
              {menu.charAt(0).toUpperCase() + menu.slice(1)}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Separator className="my-3" />
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between ">
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0 sm:gap-4">
            <div className="w-full lg:w-auto">
              <span className="text-sm block">
                © 2024 <Link href="#">Sportstr™</Link>. All Rights Reserved.
              </span>
            </div>
            <div className="flex  gap-3 sm:gap-10">
              <span className="text-sm block hover:text-green-600 sm:text-center">
                <Link href="#">Privacy Policy</Link>
              </span>
              <span className="text-sm block hover:text-green-600 sm:text-center">
                <Link href="#">Terms of Service</Link>
              </span>
              <span className="text-sm block hover:text-green-600 sm:text-center">
                <Link href="#">Cookie Settings</Link>
              </span>
            </div>
          </div>

          <div className="flex mt-4 md:mt-0 items-start space-x-5 rtl:space-x-reverse">
            <Link href="#" className=" hover:text-green-600 ">
              <Image
                src={"/fb-logo.svg"}
                alt="facebook-logo"
                width={83}
                height={82}
                className="w-6 h-6 rounded-full "
              ></Image>
            </Link>
            <Link href="#" className="hover:text-green-600 ">
              <Image
                src={"/instagram.svg"}
                alt="instagram-logo"
                width={83}
                height={82}
                className="w-6 h-6 rounded-full "
              ></Image>
            </Link>
            <Link href="#" className="hover:text-green-600 ">
              <Image
                src={"/x.svg"}
                alt="x-logo"
                width={83}
                height={82}
                className="w-6 h-6 rounded-full "
              ></Image>
            </Link>
            <Link href="#" className=" hover:text-green-600 ">
              <Image
                src={"/linkedIn.svg"}
                alt="linkedIn-logo"
                width={83}
                height={82}
                className="w-6 h-6 rounded-full "
              ></Image>
            </Link>
            <Link href="#" className=" hover:text-green-600 ">
              <Image
                src={"/youtube.svg"}
                alt="youtube"
                width={83}
                height={82}
                className="w-6 h-6 rounded-full "
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
