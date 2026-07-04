import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),

  email: z
    .string()
    .email("Please enter a valid email"),

  subject: z
    .string()
    .min(3, "Subject is required")
    .max(150, "Subject is too long"),

  message: z
    .string()
    .min(10, "Message should be at least 10 characters")
    .max(5000, "Message is too long"),

  // Honeypot (should always remain empty)
  company: z.string().optional(),

  // Cloudflare Turnstile Token
  token: z
    .string()
    .min(1, "Please complete the security verification."),
});

export type ContactFormData = z.infer<typeof contactSchema>;