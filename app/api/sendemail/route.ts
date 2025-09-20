import { NextResponse } from "next/server";
import { sendEmail } from "../../lib/sendEmail";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sendEmail(email, name || null, subject, message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API send-email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
