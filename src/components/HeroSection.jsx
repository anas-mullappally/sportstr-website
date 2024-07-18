import Image from "next/image";

function HeroSection() {
  return (
    <div className="w-full ">
      <div className="w-full flex px-8 py-14 md:px-36 md:py-10 items-center md:flex-row flex-col ">
        {/* Left content section */}
        <div className="flex flex-col gap-4 md:gap-8 lg:w-3/5 md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-bold w-full">
            Transforming <br /> Academy Management
          </h1>
          <div className="relative w-full max-w-[550px] h-auto ">
            <Image
              src="/curve.svg"
              alt="curve"
              width={550}
              height={540}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="md:text-2xl text-base font-medium">
            Simplify, Manage and Enhance Your <br /> Coaching Operations
          </p>
          <button
            id="start-button"
            className="hidden md:block text-white py-3 px-2 rounded-2xl bg-spotify-gradient"
            aria-label="Start for less than a cost of a coffee per student"
          >
            <span className="text-xl">Start for less</span>
            <br />
            <span>than a cost of a coffee per student</span>
          </button>
        </div>

        {/* Right image section */}
        <div className="relative lg:w-2/5 md:w-1/2 w-full ">
          <div className="relative w-full max-w-[516px] h-auto ">
            <Image
              src="/cricketer.webp"
              alt="hero-image"
              width={516}
              height={516}
              className="w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Mobile button */}
        <button
          id="start-button"
          className="md:hidden text-white p-4 mt-5  w-full rounded-2xl bg-spotify-gradient"
          aria-label="Start for less than a cost of a coffee per student"
        >
          <span className="text-base">Start for less</span>
          <br />
          <span className="text-xs">than a cost of a coffee per student</span>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
