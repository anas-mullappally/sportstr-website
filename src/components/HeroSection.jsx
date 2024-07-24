import Image from "next/image";

function HeroSection() {
  return (
    <div className="w-full   bg-main-gradient py-16" id="home">
      <div className="w-full flex px-8 md:px-20 xl:px-36  pt-14  md:py-10 items-center md:flex-row flex-col">
        {/* Left content section */}
        <div className="flex flex-col gap-4 md:gap-8 lg:w-3/5 md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-bold w-full md:leading-[60px] ">
            Transforming <br /> Academy Management
          </h1>
          <div className="relative w-full max-w-[550px] h-auto ">
            <Image
              src="/curve.svg"
              alt="curve"
              width={523}
              height={35}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="md:text-2xl text-base font-medium md:leading-10">
            Simplify, Manage and Enhance Your <br />
            Coaching Operations
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
              width={1144}
              height={1047}
              // className="w-full h-full"
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

      {/* Academy Banner */}

      <div className="w-full px-8  md:px-20 xl:px-36 mt-28 ">
        <div className="border border-green-500 rounded-3xl -rotate-3 md:p-3">
          <div className="flex flex-col sm:flex-row items-center justify-between rounded-3xl bg-academy drop-shadow-xl px-8 py-4 rotate-3">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold lg:leading-10 leading-6">
                Find more time to spend on making <br /> your academy ace.
              </h2>
              <p className="font-semibold text-xs md:text-base lg:text-xl mt-5 ">
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

export default HeroSection;
