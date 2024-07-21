import React from "react";
import Image from "next/image";

function FreeDemoBanner() {
  return (
    <div className="w-full px-8 md:px-36">
      <div className=" w-full  border-2 bg-free-demo h-56 rounded-3xl py-10 relative text-center shadow-lg ">
        <Image
          src="/bg-free-demo-curve.svg"
          alt="Green Curve"
          className="absolute top-0 right-0  h-24 w-28 lg:w-52 md:w-44 sm:w-44 sm:h-full "
          width={250}
          height={150}
        />
        <div className="px-5 flex flex-col gap-8 justify-center items-center ">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
            Ready to take your Academy to the next level?
          </h1>
          <button className="p-3 bg-spotify-gradient rounded-md text-white text-sm sm:text-base border-green-400 border">
            Request for a Free Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default FreeDemoBanner;
