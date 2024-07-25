"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { memo } from "react";
import { GoogleMapsEmbed as OriginalGoogleMapsEmbed } from "@next/third-parties/google";

const GoogleMapsEmbed = memo(OriginalGoogleMapsEmbed);

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const validateField = (id, value) => {
    const errors = {};

    if (id === "name" && !value.trim()) {
      errors.name = "Name is required";
    }

    if (id === "email") {
      if (!value.trim()) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errors.email = "Email is invalid";
      }
    }

    if (id === "message" && !value.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (success) setSuccess(false);
    if (error) setError(null);

    const newErrors = { ...formErrors, ...validateField(id, value) };
    if (newErrors[id] && value.trim()) {
      delete newErrors[id];
    }
    setFormErrors(newErrors);
  };

  const validateForm = ({ name, email, message }) => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    setFormErrors({});
    setError(null);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div
      className="w-full pb-24 xl:px-36 lg:px-20 md:px-20 px-8 md:pt-10 "
      id="contact"
    >
      <h1 className="text-2xl md:text-5xl font-semibold text-center md:pb-10 pb-5">
        Contact <span className="text-green-500">Us</span>
      </h1>
      <div className="flex flex-col md:flex-row w-full gap-10">
        {/* FORM */}
        <div className="bg-gray-50 w-full p-10 rounded-md flex flex-col gap-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                type="text"
                id="name"
                placeholder="John Doe"
                className="h-12 placeholder-transparent focus:placeholder-transparent"
                value={formData.name}
                onChange={handleChange}
                onFocus={(e) =>
                  e.target.classList.add("placeholder-transparent")
                }
                onBlur={(e) =>
                  e.target.value === "" &&
                  e.target.classList.remove("placeholder-transparent")
                }
              />
              {formErrors.name && (
                <p className="text-red-500">{formErrors.name}</p>
              )}
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Your Email *</Label>
              <Input
                type="email"
                id="email"
                placeholder="example@yourmail.com"
                className="h-12 placeholder-transparent focus:placeholder-transparent"
                value={formData.email}
                onChange={handleChange}
                onFocus={(e) =>
                  e.target.classList.add("placeholder-transparent")
                }
                onBlur={(e) =>
                  e.target.value === "" &&
                  e.target.classList.remove("placeholder-transparent")
                }
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                placeholder="Hello there, I would like to talk about how to..."
                id="message"
                className="h-36 placeholder-transparent focus:placeholder-transparent"
                value={formData.message}
                onChange={handleChange}
                onFocus={(e) =>
                  e.target.classList.add("placeholder-transparent")
                }
                onBlur={(e) =>
                  e.target.value === "" &&
                  e.target.classList.remove("placeholder-transparent")
                }
              />
              {formErrors.message && (
                <p className="text-red-500">{formErrors.message}</p>
              )}
            </div>
            <div>
              <Button
                variant="subscribe"
                className="bg-spotify-gradient"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </div>
          </form>
          {success && (
            <p className="text-green-500">Message sent successfully!</p>
          )}
          {error && <p className="text-red-500">{error}</p>}
        </div>
        {/* Address */}
        <div className="p-10 w-full bg-[#f6f6f6] rounded-md flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center h-full">
            <Image src={"/logo_black.png"} alt="logo" width={150} height={42} />
            <h1 className="text-2xl font-semibold my-4">Address</h1>
            <p className="text-gray-500">
              Showing the location of the SportStr office
            </p>
          </div>
        </div>
      </div>
      {/* MAP */}
      {/* <div className="pt-14 w-full flex items-center justify-center flex-col gap-4">
        <h4 className="text-2xl font-semibold hidden md:block">Additional Contact Info</h4>
        <div className="map-container w-full h-[350px] rounded-lg md:mt-5 overflow-hidden">
          <GoogleMapsEmbed
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API}
            height={350}
            width="100%"
            mode="place"
            q="WHF9+FC Bengaluru, Karnataka, India"
            className="rounded-lg"
            title="Map of Bengaluru, Karnataka, India"
          />
        </div>
      </div> */}
    </div>
  );
}

export default ContactUs;
