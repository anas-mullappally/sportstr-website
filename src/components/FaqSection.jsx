import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    id: 1,
    title: "1. What is SportStr?",
    description:
      "SportStr is an all-in-one platform designed to streamline the management of sports academies, enhancing efficiency for coaches, admins, and athletes.",
  },
  {
    id: 2,
    title: "2. Can SportStr handle multiple sports?",
    description:
      "SportStr simplifies administrative tasks, enhances communication, and provides detailed performance tracking, allowing you to focus more on coaching and athlete development.",
  },
  {
    id: 3,
    title: "3. What features does SportStr offer?",
    description:
      "SportStr offers schedule management, attendance management, performance tracking, communication tools, custom training plans, admin dashboard, payments and billing, reports and mobile app access.",
  },
  {
    id: 4,
    title: "4. Can SportStr handle multiple sports?",
    description:
      "Yes, SportStr is designed to support a wide range of sports, providing tailored features for each discipline to meet specific coaching and management needs.",
  },
  {
    id: 5,
    title: "5. Can I manage multiple centers with SportStr?",
    description:
      "Yes, SportStr allows you to create and manage multiple centers, each with its own settings and configurations.",
  },
  {
    id: 6,
    title: "6. Is SportStr suitable for small academies?",
    description:
      "Absolutely! SportStr caters to academies of all sizes, offering scalable solutions that grow with your needs.",
  },
  {
    id: 7,
    title: "7. How can users access SportStr?",
    description:
      "SportStr Admin module can be accessed through browsers, and we can iOS and Android Apps for coaches and trainees/parents.",
  },
  {
    id: 8,
    title: "8. How secure is the data on SportStr?",
    description:
      "We prioritize data security with robust encryption and regular security audits to ensure your academy’s data is safe and confidential.",
  },
  {
    id: 9,
    title: "9. Can parents and trainees access SportStr?",
    description:
      "Yes, SportStr provides apps for parents and trainees to view schedules, track performance, and communicate with coaches.",
  },
  {
    id: 10,
    title: "10. How can I get started with SportStr?",
    description:
      "Getting started is easy! Contact us on the website, and our team will guide you through the setup process, helping you customize the platform to fit your academy’s needs.",
  },
  {
    id: 11,
    title: "11. Does SportStr integrate with other software?",
    description:
      "Yes, SportStr offers integration capabilities with various third-party software and payment gateways.",
  },
  {
    id: 12,
    title: "12. What is the pricing structure for SportStr?",
    description:
      "SportStr offers various pricing plans tailored to different academy sizes and needs. Contact our sales team for a customized quote.",
  },
];

function FaqSection() {
  return (
    <div className="px-8 md:px-20 xl:px-36 w-full py-24 md:py-36">
      <h1 className=" text-2xl md:text-5xl font-semibold text-center md:pb-10 pb-5">
        Frequently Asked <span className="text-green-500">Questions</span>
      </h1>

      <Accordion type="single" collapsible className="w-full ">
        {faq.map((item) => (
          <AccordionItem
            value={`item-${item.id}`}
            key={item.id}
            className="border-2 border-gray-300 my-5 rounded-xl py-1 px-6 "
          >
            <AccordionTrigger className="text-sm sm:text-xl font-semibold text-left md:text-center">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-xs sm:text-base">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FaqSection;
