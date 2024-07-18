import Image from "next/image";
import React from "react";

function AcademyBanner() {
  return (
    <div className="w-full py-24">
      <div className="w-full px-36 ">
        <div className="border border-green-500 rounded-3xl">
          <div className="flex items-center justify-between rounded-3xl p-8 ">
            <div>
              <h2 className="text-3xl font-semibold leading-10">
                Find more time to spend on making <br /> your academy ace.
              </h2>
              <p className="font-semibold mt-5">
                Become a digital savvy academy in less than a week.
                <br /> Save time, efforts and cost of tedious administrative
                tasks.
              </p>
            </div>
            <div>
              <Image src={"/macbook.webp"} width={357} height={334} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademyBanner;
