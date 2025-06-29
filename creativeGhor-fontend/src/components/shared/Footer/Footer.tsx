"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

const footerLinks = [
  {
    title: "Information",
    links: [
      "Exchange & Refund",
      "Size Guide",
      "Loyalty Program",
      "Store Locations",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Payment Policy",
      "Shipping Policy",
      "Terms & Conditions",
      "Gift Card Policy",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Contact Us", "Intellectual Property"],
  },
];

const paymentMethods = [
  { src: "/images/payments/visa.jpg", alt: "Visa" },
  { src: "/images/payments/mastercard.jpg", alt: "MasterCard" },
  { src: "/images/payments/amex.jpg", alt: "AmEx" },
  { src: "/images/payments/bkash.jpg", alt: "bKash" },
  { src: "/images/payments/nagad.jpg", alt: "Nagad" },
  { src: "/images/payments/rocket.jpg", alt: "Rocket" },
];

export const Footer = () => {
  // const [email, setEmail] = useState("");

  return (
    <footer className="bg-white border-t text-sm text-gray-500">
      {/* Newsletter Signup */}
      <div className="border-b py-6 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-lg font-semibold text-gray-800 mb-2"
          >
            Join Our Newsletter
          </motion.h4>
          <p className="text-gray-500 text-sm mb-4">
            Get the latest offers, product launches & updates
          </p>
          <form
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   // TODO: handle submission to API/Mailchimp here
            //   alert(`Subscribed with ${email}`);
            //   setEmail("");
            // }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-900 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="text-black font-semibold mb-3">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-black transition">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Payment Methods */}
        <div>
          <h4 className="text-black font-semibold mb-3">You can pay by</h4>
          <div className="grid grid-cols-2 gap-2">
            {paymentMethods.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                width={60}
                height={30}
                className="object-contain"
              />
            ))}
          </div>
        </div>

        {/* Service Center */}
        <div>
          <h4 className="text-black font-semibold mb-3">Service Center</h4>
          <p className="mb-1">09666747585</p>
          <p className="mb-3">support@QMMERCE.global</p>
          <div className="flex gap-2">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs py-4 border-t bg-black text-white">
        © 2025 QMMERCE. All rights reserved.
      </div>
    </footer>
  );
};
