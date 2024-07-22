import Image from "next/image";
import React from "react";

function AdvantageSection() {
  return (
    <div className="w-full ">
      <div className="w-full md:px-36 px-8 py-14  ">
        <h1 className=" text-2xl md:text-5xl font-semibold text-center ">
          The SportStr <span className="text-green-600">Advantage</span>
        </h1>

        <div className="w-full md:mt-20 mt-14">
          {/* For Academy Owners and Administrators section */}

          <div className="flex items-center w-full gap-10 text-center md:text-left ">
            <div className="w-full  md:w-1/2 flex flex-col gap-5   ">
              <h2 className="font-semibold md:text-2xl ">
                FOR ACADEMY OWNERS & <br />
                ADMINISTRATORS
              </h2>

              {/* Image for the mobile view */}

              <div className="flex items-center  md:hidden">
                <Image
                  src="/info-board.webp"
                  alt="info-boards"
                  width={457}
                  height={334}
                />
              </div>
              <p className="text-sm text-gray-500 leading-6">
                Streamline every aspect of academy management from scheduling to
                attendance management to communication to billing and payment
                collections. With automated notifications and a centralized
                dashboard, reduce administrative tasks and focus more on
                strategic growth. Experience efficient management and keep your
                operations smooth and organized.
              </p>
            </div>
            <div className=" hidden md:flex md:w-1/2 w-full justify-end">
              <Image
                src="/info-board.webp"
                alt="info-board"
                width={457}
                height={334}
                className=""
              />
            </div>
          </div>

          {/* For coaches Section */}

          <div className="flex items-center w-full  text-center md:text-left gap-10 my-24">
            <div className="md:w-1/2 w-full hidden md:block">
              <Image
                src="/calendar.webp"
                alt="calendar"
                width={1080}
                height={805}
              />
            </div>
            <div className=" md:w-1/2 w-full flex flex-col gap-5">
              <h2 className="font-semibold md:text-2xl">FOR COACHES</h2>
              {/* Image for the mobile view */}

              <div className="md:w-1/2 w-full  md:hidden ">
                <Image
                  src="/calendar.webp"
                  alt="calendar"
                  width={1080}
                  height={805}
                  className="w-full"
                />
              </div>
              <p className="text-sm text-gray-500 leading-6">
                Streamline every aspect of academy management from scheduling to
                attendance management to communication to billing and payment
                collections. With automated notifications and a centralized
                dashboard, reduce administrative tasks and focus more on
                strategic growth. Experience efficient management and keep your
                operations smooth and organized.
              </p>
            </div>
          </div>

          {/* For Athletes/Trainees Section */}

          <div className="flex items-center w-full text-center gap-10 md:text-left ">
            <div className=" md:w-1/2 w-full flex flex-col gap-5">
              <h2 className="font-semibold md:text-2xl ">
                FOR ATHLETES/TRAINEES
              </h2>

              {/* Image for the mobile view */}

              <div className="md:w-1/2 w-full md:hidden">
                <Image
                  src="/calendar.webp"
                  alt="calendar"
                  width={1080}
                  height={805}
                />
              </div>
              <p className="text-sm text-gray-500 leading-6">
                Streamline every aspect of academy management from scheduling to
                attendance management to communication to billing and payment
                collections. With automated notifications and a centralized
                dashboard, reduce administrative tasks and focus more on
                strategic growth. Experience efficient management and keep your
                operations smooth and organized.
              </p>
            </div>
            <div className="md:w-1/2 w-full hidden md:flex justify-end">
              <Image
                src="/calendar.webp"
                alt="calendar"
                width={1080}
                height={805}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvantageSection;
