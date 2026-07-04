"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionObserver from "@/components/ui/SectionObserver";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32"
    >
      <SectionObserver id="contact" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          subtitle="GET IN TOUCH"
          title="Let's Build Something Amazing"
          description="Whether you need a website, branding, digital marketing, or a complete business solution, I'd love to hear about your project."
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}