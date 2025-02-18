"use client";
import { Facebook, Mail, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";
export default function Footer() {
  return (
    <footer className="bg-[#0B2416] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Made with love section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium mb-4">Made with ❤️ from-</h3>
          <Image
            src={logo}
            alt="Lipighor Logo"
            width={150}
            height={150}
            className="mb-2"
          />
          <div className="text-sm text-gray-300">
            <p>All Rights Reserved</p>
            <p>CreativeGhor</p>
            <p>© 2020-2025</p>
          </div>
        </div>

        {/* Know about section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium mb-4">Know about Our-</h3>
          <div className="space-y-2">
            <Link
              href="/terms"
              className="block text-emerald-400 hover:text-emerald-300"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="block text-emerald-400 hover:text-emerald-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund"
              className="block text-emerald-400 hover:text-emerald-300"
            >
              Refund Policy
            </Link>
            <Link
              href="/about"
              className="block text-emerald-400 hover:text-emerald-300"
            >
              About Us
            </Link>
            <Link
              href="/testimonial"
              className="block text-emerald-400 hover:text-emerald-300"
            >
              Testimonial
            </Link>
            <Link
              href="/faq"
              className="block text-emerald-400 hover:text-emerald-300"
            >
              F.A.Q.
            </Link>
          </div>
        </div>

        {/* Contact section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium mb-4">Contact Us-</h3>
          <div className="space-y-2 mb-6">
            <p>CreativeGhor@gmail.com</p>
            <p>+88 01847 313 603</p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Follow Us on -</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-emerald-400 p-2 rounded-full hover:bg-emerald-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="bg-emerald-400 p-2 rounded-full hover:bg-emerald-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="bg-emerald-400 p-2 rounded-full hover:bg-emerald-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
