import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import { Button } from "./ui/button";

function ContactUs() {
  return (
    <div className="md:px-36 w-full py-24 md:py-36 px-8">
      <h1 className=" text-2xl md:text-5xl font-semibold text-center md:pb-10  pb-5">
        Contact <span className="text-green-500">Us</span>
      </h1>
      <div className="flex flex-col md:flex-row w-full gap-10 ">
        {/* FORM */}
        <div className="bg-gray-50  w-full p-10 rounded-md flex flex-col gap-6">
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="John Doe"
              className="h-12"
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="email">Your Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="example@yourmail.com"
              className="h-12"
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              placeholder="Hello there,I would like to talk about how to..."
              id="message"
              className="h-36"
            />
          </div>
          <div>
            <Button variant="subscribe" className="bg-spotify-gradient">
              Send Message
            </Button>
          </div>
        </div>
        {/* Address */}
        <div className=" p-10 w-full bg-[#f6f6f6] rounded-md flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center h-full">
            <Image
              src={"/logo.svg"}
              className="bg"
              alt="logo"
              width={150}
              height={42}
            />
            <h1 className="text-2xl font-semibold my-4">Address</h1>
            <p className="text-[#808080]">
              Showing the location of the SportStr office
            </p>
          </div>
        </div>
      </div>
      {/* MAP  */}
      <div className="p-10 w-full flex items-center justify-center ">
        <h4 className="text-2xl font-semibold hidden md:block">
          Additional Contact Info
        </h4>
     
      </div>
    </div>
  );
}

export default ContactUs;
