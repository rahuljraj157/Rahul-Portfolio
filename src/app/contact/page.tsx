"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      "service_s788t68",
      "template_lqna55m",
      formData,
      "TYwdSg01oZliUJue8"
    ).then(() => {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }).catch((error) => {
      console.error("Error sending email:", error);
    });
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full space-y-6"
      >
        <h1 className="text-4xl font-bold text-center text-green-400">Contact Me</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            suppressHydrationWarning
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            suppressHydrationWarning
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            suppressHydrationWarning
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 h-32 resize-none"
          ></textarea>
          <button
            type="submit"
            suppressHydrationWarning
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
          >
            Send Message
          </button>
          {success && <p className="text-green-400 mt-2 text-center">Message sent successfully!</p>}
        </form>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center space-y-3">
          <p>Or contact me directly:</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="mailto:rahuljraj157@gmail.com"
              className="hover:text-green-400 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/7909178974"
              target="_blank"
              className="hover:text-green-400 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
