import Image from "next/image";

function HeroSection() {
  return (
    <div className="w-full flex px-8 py-14 md:px-20 md:py-32 items-center md:flex-row flex-col  ">
      {/* Left content section */}

      <div className="flex flex-col gap-4 md:gap-8 lg:w-3/5 md:w-1/2 text-center md:text-left  ">
        <h1 className="text-2xl md:text-5xl font-bold w-full">
          Transforming <br /> Academy Management
        </h1>
        <Image src={"/curve.svg"} alt="logo" width={550} height={540} />
        <p className="md:text-2xl text-base  font-medium">
          Simplify, Manage and Enhance Your <br /> Coaching Operations
        </p>
        <button
          id="start-button"
          className=" hidden md:block text-white py-3 px-2 rounded-2xl bg-spotify-gradient"
          aria-label="Start for less than a cost of a coffee per student"
        >
          <span className="text-xl">Start for less</span>
          <br />
          <span>than a cost of a coffee per student</span>
        </button>
      </div>

      {/* Right image section */}

      <div className="lg:w-2/5 md:w-1/2 w-full ">
        <Image
          src={"/hero.webp"}
          alt="logo"
          width={516}
          height={28}
          className="w-full"
        />
      </div>

      {/* Mobile button */}

      <button
        id="start-button"
        className=" hidden md:block text-white py-3 px-2 rounded-2xl bg-spotify-gradient"
        aria-label="Start for less than a cost of a coffee per student"
      >
        <span className="text-base">Start for less</span>
        <br />
        <span className="text-xs">than a cost of a coffee per student</span>
      </button>
    </div>
  );
}

export default HeroSection;
