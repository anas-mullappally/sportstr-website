"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      image: "/avatar.png",
      name: "Kabir Thappar",
      occupation: "Coach, Tellicherry Cricket Academy ",
      review:
        "We streamline every aspect of academy management, from scheduling to attendance management to performance tracking to communication. With automated notifications and a centralised dashboard, you can reduce administrative tasks and focus more on coaching. Experience the ease of efficient academy management and keep your operations smooth and organised.",
    },
    {
      id: 2,
      image: "/avatar.png",
      name: "Kabir Thappar",
      occupation: "Coach, Tellicherry Cricket Academy ",
      review:
        "We streamline every aspect of academy management, from scheduling to attendance management to performance tracking to communication. With automated notifications and a centralised dashboard, you can reduce administrative tasks and focus more on coaching. Experience the ease of efficient academy management and keep your operations smooth and organised.",
    },
    {
      id: 3,
      image: "/avatar.png",
      name: "Kabir Thappar",
      occupation: "Coach, Tellicherry Cricket Academy ",
      review:
        "We streamline every aspect of academy management, from scheduling to attendance management to performance tracking to communication. With automated notifications and a centralised dashboard, you can reduce administrative tasks and focus more on coaching. Experience the ease of efficient academy management and keep your operations smooth and organised.",
    },
    {
      id: 4,
      image: "/avatar.png",
      name: "Kabir Thappar",
      occupation: "Coach, Tellicherry Cricket Academy ",
      review:
        "We streamline every aspect of academy management, from scheduling to attendance management to performance tracking to communication. With automated notifications and a centralised dashboard, you can reduce administrative tasks and focus more on coaching. Experience the ease of efficient academy management and keep your operations smooth and organised.",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col items-center justify-center gap-8  md:px-20 xl:px-36 w-full py-24 my-10  ">
      <h1 className=" text-2xl md:text-5xl font-semibold text-center md:pb-10  pb-5">
        What Our<span className="text-green-500"> Users Are Saying?</span>
      </h1>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full pl-4"
      >
        <CarouselContent className="w-full">
          {testimonials.map((testimony) => (
            <CarouselItem key={testimony.id} className="md:basis-1/2 w-full">
              <div>
                <Card className="relative rounded-2xl">
                  <CardContent className="flex gap-5 flex-col justify-center items-center pl-10 py-5 md:py-10">
                    <div className="flex gap-8 items-center w-full">
                      <Image
                        src={testimony.image}
                        alt="avatar"
                        className=" "
                        width={50}
                        height={50}
                      />
                      <div>
                        <h1 className="text-2xl font-semibold">
                          {testimony.name}
                        </h1>
                        <p className="text-sm text-gray-500">
                          {testimony.occupation}
                        </p>
                      </div>
                      <Image
                        src="/quote.svg"
                        alt="quote"
                        className="absolute right-4 top-4  hidden  sm:block"
                        width={40}
                        height={40}
                      />
                    </div>

                    <div>
                      <p className="text-sm  text-gray-500 leading-5">
                        {testimony.review}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default TestimonialCarousel;
