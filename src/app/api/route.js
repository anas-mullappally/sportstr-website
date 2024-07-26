import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";
import db from "../../../db/drizzle";
import { contactUs, newsletterSubscription } from "../../../db/schema";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SEND_GRID_API_KEY);

export async function POST(req) {
  const { name, email, message, formType } = await req.json();

  let emailSent = false;
  let dbInserted = false;

  try {
    if (formType === "contact") {
      // Send email via SendGrid
      await sendgrid.send({
        to: process.env.NEXT_PUBLIC_SEND_GRID_MAIL,
        from: process.env.NEXT_PUBLIC_SEND_GRID_MAIL,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
      emailSent = true;

      // Insert data into the database
      await db.insert(contactUs).values({
        fullName: name,
        email: email,
        message: message,
        datetime: new Date(),
      });
      dbInserted = true;

      return NextResponse.json({
        success: true,
        message: "Contact form submitted successfully",
      });
    } else if (formType === "newsletter") {
      // Send email via SendGrid
      await sendgrid.send({
        to: process.env.NEXT_PUBLIC_SEND_GRID_MAIL,
        from: process.env.NEXT_PUBLIC_SEND_GRID_MAIL,
        subject: `New Newsletter Subscription from ${email}`,
        html: `
          <p><strong>Email:</strong> ${email}</p>
        `,
      });
      emailSent = true;

      // Insert data into the database
      await db.insert(newsletterSubscription).values({
        email: email,
        datetime: new Date(),
      });
      dbInserted = true;

      return NextResponse.json({
        success: true,
        message: "Newsletter subscription successful",
      });
    } else {
      return NextResponse.json({ success: false, error: "Invalid form type" });
    }
  } catch (error) {
    // Handle errors based on which operation failed
    if (!emailSent) {
      // If email sending failed
      console.error("Error sending email:", error);
      return NextResponse.json({
        success: false,
        error: "Error sending email",
      });
    }

    if (!dbInserted) {
      // If database insertion failed
      console.error("Error inserting into database:", error);
      return NextResponse.json({
        success: false,
        error: "Error storing data in database",
      });
    }

    // Generic error handling
    console.error("Unexpected error:", error);
    return NextResponse.json({
      success: false,
      error: "An unexpected error occurred",
    });
  }
}
