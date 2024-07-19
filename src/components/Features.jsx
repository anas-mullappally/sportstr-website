import Image from "next/image";

function Features() {
  const features = [
    {
      id: 1,
      title: "Dashboard & Reporting",
      description:
        " Centralize data management and reporting with the Admin Dashboard.",
      icon: "/dashboard.svg",
    },
    {
      id: 2,
      title: "Performance Tracking",
      description: "Monitor trainee performance with detailed analytics.",
      icon: "/performance.svg",
    },
    {
      id: 3,
      title: "Communication Tools",
      description:
        "Keep in touch with trainees and parents through built-in messaging.",
      icon: "/communication.svg",
    },
    {
      id: 4,
      title: "Custom Training Plans",
      description: "Develop personalized training plans for each athlete.",
      icon: "/training.svg",
    },
    {
      id: 5,
      title: "Schedule Management",
      description: "Easily create and manage training schedules & sessions.",
      icon: "/schedule.svg",
    },
    {
      id: 6,
      title: "Payments & Billing",
      description: "Simplify billing with integrated payment solutions.",
      icon: "/payment.svg",
    },
    {
      id: 7,
      title: "Attendance management",
      description: "Develop personalized training plans for each athlete.",
      icon: "/attendance.svg",
    },
    {
      id: 8,
      title: "Batches & packages",
      description: "Easily create and manage training schedules & sessions.",
      icon: "/batches.svg",
    },
    {
      id: 9,
      title: "Roster",
      description: "Simplify billing with integrated payment solutions.",
      icon: "/roster.svg",
    },
  ];
  return (
    <div className="w-full mt-8">
      <div className="w-full  md:px-36 px-8  ">
        <h1 className="text-2xl md:text-5xl font-semibold text-center ">
          Powerful Features for <br />{" "}
          <span className="text-green-600">
            Academies, Coaches, Parents and Students
          </span>
        </h1>
        <div className="w-full  md:mt-20 mt-14  mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature) => (
              <div className="bg-white p-8 border border-green-400 hover:border-green-600 rounded-md cursor-pointer" key={feature.id}>
                <div className="flex ">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    className="w-20 h-20"
                    width={100}
                    height={150}
                  />
                </div>
                <div className="flex mt-6 justify-between w-full">
                  <div className="flex flex-col w-3/4 ">
                    <h4 className="text-xl font-semibold">{feature.title}</h4>
                    <p className="mt-3 text-lg text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                  <div className="w-1/4 flex items-end  justify-end ">
                    <Image
                      src={"/arrow.svg"}
                      alt="arrow"
                      className="w-14 h-14"
                      width={100}
                      height={150}
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="h-[286px] bg-black"></div>
            <div className="h-[286px] bg-black"></div>
            <div className="h-[286px] bg-black"></div>
            <div className="h-[286px] bg-black"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
