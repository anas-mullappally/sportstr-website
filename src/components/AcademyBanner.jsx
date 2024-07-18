import Image from "next/image";
import React from "react";

function AcademyBanner() {
  return (
    <div className="w-full md:py-36 py-24">
      <div className="w-full md:px-36 px-8 ">
        <div className="border border-green-500 rounded-3xl -rotate-3 md:p-3">
          <div className="flex flex-col md:flex-row items-center justify-between rounded-3xl bg-gray-50 drop-shadow-xl px-8 py-4 rotate-3">
            <div>
              <h2 className="text-xl md:text-4xl font-semibold md:leading-10 leading-6">
                Find more time to spend on making <br /> your academy ace.
              </h2>
              <p className="font-semibold text-xs md:text-xl mt-5 ">
                Become a digital savvy academy in less than a week.
                <br /> Save time, efforts and cost of tedious administrative
                tasks.
              </p>
            </div>
            <div>
              <Image
                alt="macbook"
                src={"/macbook.webp"}
                width={357}
                height={334}
                className="h-48 w-48 md:h-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademyBanner;
