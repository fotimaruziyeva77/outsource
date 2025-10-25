"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaPaperPlane,
  FaComment,
} from "react-icons/fa";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const faqs = [
    { question: "How can I contact support?", answer: "You can reach us via email or phone anytime." },
    { question: "Do you offer international shipping?", answer: "Yes, we ship to most countries worldwide." },
    { question: "Can I change my order later?", answer: "Yes, within 24 hours after placing it." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
   
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/assets/contact.png" 
          alt="Contact Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-wide"
          >
            Contact
          </motion.h1>
        </div>
      </div>

      {/* 📬 Contact Form and FAQ Section */}
      <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-12">
        {/* Chap: Kontakt form */}
        <aside className="bg-white shadow-lg rounded-2xl p-6 w-full lg:w-1/2 lg:sticky lg:top-7">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Firstname"
                name="first_name"
                placeholder="Firstname"
                icon={<FaUser />}
                onChange={handleChange}
                value={formData.first_name}
              />
              <Field
                label="Lastname"
                name="last_name"
                placeholder="Lastname"
                icon={<FaUser />}
                onChange={handleChange}
                value={formData.last_name}
              />
            </div>

            <Field
              label="Company name"
              name="company"
              placeholder="Company name (if any)"
              icon={<FaBuilding />}
              onChange={handleChange}
              value={formData.company}
            />

            <Field
              label="Email"
              name="email"
              placeholder="you@example.com"
              icon={<FaEnvelope />}
              type="email"
              onChange={handleChange}
              value={formData.email}
            />

            <Field
              label="Phone number"
              name="phone"
              placeholder="+998 99 123 45 67"
              icon={<FaPhone />}
              type="tel"
              onChange={handleChange}
              value={formData.phone}
            />

            {/* Textarea */}
            <div>
              <label className="font-semibold text-lg">Text</label>
              <div className="relative mt-1">
                <FaComment className="absolute left-3 top-3 text-gray-500" />
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  className="pl-10 w-full border border-gray-200 bg-gray-50 rounded-xl p-3 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none h-40"
                  required
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex items-center gap-2 bg-green-700 text-white px-8 py-3 rounded-xl shadow-md font-semibold hover:bg-green-800 transition"
              >
                <FaPaperPlane /> Submit
              </motion.button>
            </div>

            {success && (
              <div className="bg-green-100 text-green-800 font-semibold rounded-xl p-3 text-center mt-4">
                Message sent successfully ✅
              </div>
            )}
          </form>
        </aside>

        {/* O‘ng: FAQ */}
        <section className="w-full lg:w-1/2 bg-white shadow-lg rounded-2xl p-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  icon,
  type = "text",
  onChange,
  value,
}: {
  label: string;
  name: string;
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
   onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-semibold text-lg">
        {label}
      </label>
      <div className="relative mt-1">
        <div className="absolute left-3 top-3 text-gray-500">{icon}</div>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="pl-10 w-full border border-gray-200 bg-gray-50 rounded-xl p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
          onChange={onChange}
          value={value}
          required={name !== "company"}
        />
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-gray-200 rounded-xl p-4 cursor-pointer transition hover:bg-gray-50"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center font-semibold">
        <span>{question}</span>
        <span className="text-green-700 text-xl">{open ? "−" : "+"}</span>
      </div>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
}
