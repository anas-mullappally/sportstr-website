import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SEND_GRID_API_KEY);

export async function POST(req) {
  const { name, email, message, formType } = await req.json();

  try {
    if (formType === "contact") {
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
    } else if (formType === "newsletter") {
      await sendgrid.send({
        to: process.env.NEXT_PUBLIC_SEND_GRID_MAIL,
        from: process.env.NEXT_PUBLIC_SEND_GRID_MAIL,
        subject: `New Newsletter Subscription from ${email}`,
        html: `
          <p><strong>Email:</strong> ${email}</p>
        `,
      });
    } else {
      return NextResponse.json({ success: false, error: "Invalid form type" });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Error sending email" });
  }
}
