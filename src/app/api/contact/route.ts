import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// --- SECURITY: RATE LIMITING (In-Memory Sliding Window) ---
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 3;
const ipMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipMap.get(ip) || [];
  const validTimestamps = timestamps.filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW,
  );

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  ipMap.set(ip, validTimestamps);
  return false;
}

// --- SECURITY: ZOD INPUT VALIDATION SCHEMA ---
const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is too short")
    .max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").toLowerCase(),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s()-]{7,20}$/, "Invalid phone format"),
  company: z
    .string()
    .trim()
    .max(120, "Company name too long")
    .optional()
    .default("N/A"),

  // Fixed: Use 'message' parameter instead of 'errorMap'
  interest: z.enum(["facades", "columns", "jaalis", "domes", "custom"], {
    message: "Please select a valid area of interest",
  }),

  projectDetails: z
    .string()
    .trim()
    .min(10, "Please provide more details")
    .max(2000, "Message exceeds 2000 characters"),

  // Fixed: Use 'message' parameter instead of 'errorMap'
  agreed: z.literal(true, {
    message: "You must accept the terms",
  }),
});

// Utility to escape HTML special characters for XSS prevention
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Mapping interest key to human-readable label
const interestMap: Record<string, string> = {
  facades: "GRC Facades & Cladding Panels",
  columns: "Classical Columns & Pilasters",
  jaalis: "Intricate Screen Panels / Jaalis",
  domes: "Lightweight High-Strength Domes",
  custom: "Bespoke Custom Engineering Molds",
};

// --- EFFICIENT SMTP TRANSPORTER POOLING ---
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // 465 SSL
  pool: true, // Keeps connections open for fast performance
  maxConnections: 5,
  maxMessages: 100,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again in 10 minutes.",
        },
        { status: 429 },
      );
    }

    // 2. Parse Request Body
    const body = await req.json();

    // 3. Validate Inputs via Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const issue = validationResult.error.issues[0];
      return NextResponse.json(
        { success: false, error: `${issue.path.join(".")}: ${issue.message}` },
        { status: 400 },
      );
    }

    const data = validationResult.data;
    const readableInterest = interestMap[data.interest] || data.interest;

    // 4. Sanitize inputs for HTML rendering
    const sanitizedData = {
      name: escapeHtml(data.name),
      email: escapeHtml(data.email),
      phone: escapeHtml(data.phone),
      company: escapeHtml(data.company || "N/A"),
      interest: escapeHtml(readableInterest),
      projectDetails: escapeHtml(data.projectDetails).replace(/\n/g, "<br/>"),
    };

    // 5. Construct Branded HTML Email Template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Lead - Vallalar GRC Contact Form</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; color: #333; }
          .container { max-width: 600px; background: #ffffff; padding: 30px; border-radius: 4px; border-top: 4px solid #C5A26B; margin: 0 auto; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
          .header { border-bottom: 1px solid #eeeeee; padding-bottom: 15px; margin-bottom: 20px; }
          .header h2 { margin: 0; color: #181818; font-size: 20px; text-transform: uppercase; letter-spacing: 1px; }
          .badge { background: #FAF9F6; color: #C5A26B; font-weight: bold; padding: 4px 10px; border: 1px solid #C5A26B; display: inline-block; font-size: 11px; margin-top: 8px; border-radius: 2px; }
          .field { margin-bottom: 15px; }
          .field-title { font-size: 11px; font-weight: bold; color: #888; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
          .field-value { font-size: 14px; color: #222; font-weight: 500; background: #fafafa; padding: 8px 12px; border-radius: 3px; border: 1px solid #f0f0f0; }
          .footer { margin-top: 25px; pt: 15px; border-top: 1px solid #eee; font-size: 11px; color: #aaa; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Inquiry - Vallalar GRC</h2>
            <div class="badge">Requirement: ${sanitizedData.interest}</div>
          </div>

          <div class="field">
            <div class="field-title">Client Name</div>
            <div class="field-value">${sanitizedData.name}</div>
          </div>

          <div class="field">
            <div class="field-title">Email Address</div>
            <div class="field-value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
          </div>

          <div class="field">
            <div class="field-title">Phone Number</div>
            <div class="field-value"><a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a></div>
          </div>

          <div class="field">
            <div class="field-title">Company / Organization</div>
            <div class="field-value">${sanitizedData.company}</div>
          </div>

          <div class="field">
            <div class="field-title">Project Details</div>
            <div class="field-value">${sanitizedData.projectDetails}</div>
          </div>

          <div class="footer">
            Submitted via Vallalar GRC Official Contact Form • ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
          </div>
        </div>
      </body>
      </html>
    `;

    // 6. Send Email Notification
    await transporter.sendMail({
      from: `"Vallalar GRC Portal" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || "vallalargrc@gmail.com",
      replyTo: data.email,
      subject: `[GRC Lead] ${data.name} - ${readableInterest}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany: ${data.company}\nInterest: ${readableInterest}\nDetails: ${data.projectDetails}`,
      html: htmlTemplate,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your inquiry has been submitted successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("API Error - Contact Submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 },
    );
  }
}
