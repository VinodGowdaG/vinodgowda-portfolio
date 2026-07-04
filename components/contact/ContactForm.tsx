"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import Turnstile from "react-turnstile";

import {
  contactSchema,
  ContactFormData,
} from "@/lib/validations";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    if (!token) {
  toast.error("Please verify that you're human.");
  return;
}
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
  ...data,
  token,
}),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      reset();

      // 🎉 Premium Confetti
      const duration = 1500;
      const animationEnd = Date.now() + duration;

      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 9999,
      };

      const interval = window.setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          return;
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti({
          ...defaults,
          particleCount,
          origin: {
            x: Math.random() * 0.3 + 0.1,
            y: Math.random() - 0.2,
          },
        });

        confetti({
          ...defaults,
          particleCount,
          origin: {
            x: Math.random() * 0.3 + 0.6,
            y: Math.random() - 0.2,
          },
        });
      }, 250);

      toast.success("Message Sent Successfully! 🎉", {
        description:
          "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed to Send Message", {
        description:
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Name */}
      <div>
        <input
          {...register("name")}
          placeholder="Your Name"
          className="w-full rounded-xl border border-white/10 bg-[#0f172a] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 hover:border-cyan-400/40 focus:border-cyan-400 focus:bg-[#111827] focus:ring-2 focus:ring-cyan-500/30"
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          {...register("email")}
          placeholder="Your Email"
          className="w-full rounded-xl border border-white/10 bg-[#0f172a] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 hover:border-cyan-400/40 focus:border-cyan-400 focus:bg-[#111827] focus:ring-2 focus:ring-cyan-500/30"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="w-full rounded-xl border border-white/10 bg-[#0f172a] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 hover:border-cyan-400/40 focus:border-cyan-400 focus:bg-[#111827] focus:ring-2 focus:ring-cyan-500/30"
        />

        {errors.subject && (
          <p className="mt-2 text-sm text-red-400">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          rows={6}
          {...register("message")}
          placeholder="Tell me about your project..."
          className="w-full rounded-xl border border-white/10 bg-[#0f172a] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 hover:border-cyan-400/40 focus:border-cyan-400 focus:bg-[#111827] focus:ring-2 focus:ring-cyan-500/30"
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot */}
      <input
        type="text"
        {...register("company")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Turnstile */}
      <div className="flex justify-center">
  <Turnstile
    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
    onVerify={(token) => setToken(token)}
    theme="dark"
  />
</div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/30 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </motion.form>
  );
}