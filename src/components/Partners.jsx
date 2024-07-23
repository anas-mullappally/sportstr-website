import Image from "next/image";
import React from "react";

function Partners() {
  return (
    <div className=" px-8  md:px-20 xl:px-36  py-24 ">
      <div className="flex flex-col sm:flex-row justify-center gap-16 ">
        <div className="text-center ">
          <div className="border rounded-2xl p-10 hover:border-green-600 shadow-lg hover:bg-academy ">
            <Image
              src="/saina-partner.svg"
              alt="partner-logo"
              width={300}
              height={300}
              className="mx-auto my-auto"
            />
          </div>
          <h2 className="md:text-2xl mt-5 font-bold">Badminton Pros</h2>
        </div>
        <div className="text-center">
          <div className="border rounded-2xl p-10  hover:border-green-600 shadow-lg hover:bg-academy">
            <Image
              src="/tellicherry-partner.svg"
              alt="partner-logo"
              width={300}
              height={300}
              className="mx-auto my-auto"
            />
          </div>
          <h2 className="md:text-2xl mt-5 font-bold">
            Tellicherry Cricket Club
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Partners;
