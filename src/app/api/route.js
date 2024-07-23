import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SEND_GRID_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
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

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Error sending email" });
  }
}
