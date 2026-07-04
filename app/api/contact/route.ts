import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/validations";

import AdminEmail from "@/lib/emails/AdminEmail";
import AutoReplyEmail from "@/lib/emails/AutoReplyEmail";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    const {
      name,
      email,
      subject,
      message,
      company,
      token,
    } = parsed.data;

    // ======================================
    // Honeypot Protection
    // ======================================

    if (company) {
      return NextResponse.json({
        success: true,
      });
    }

    // ======================================
    // Cloudflare Turnstile Verification
    // ======================================

    const verify = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: token,
        }),
      }
    );

    const result = await verify.json();

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Turnstile verification failed.",
        },
        {
          status: 400,
        }
      );
    }

    // ======================================
    // Email to You (Admin Notification)
    // ======================================

    await resend.emails.send({
      from: "Vinodgowda G Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `📩 Portfolio Contact - ${subject}`,

      react: AdminEmail({
  name,
  email,
  subject,
  message,
}),
    });

    // ======================================
    // Auto Reply to Visitor
    // ======================================

    await resend.emails.send({
      from: "Vinodgowda G <onboarding@resend.dev>",
      to: email,

      subject: "Thank you for contacting Vinodgowda G 👋",

      react: AutoReplyEmail({
  name,
  subject,
}),
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to send message.",
      },
      {
        status: 500,
      }
    );
  }
}