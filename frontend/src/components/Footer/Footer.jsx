import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/xxehacker", key: "github" },
  { icon: FaInstagram, href: "https://www.instagram.com/mridupawan0x1", key: "instagram" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/mridupawan503", key: "linkedin" },
  { icon: FaTwitter, href: "https://twitter.com/xxehacker0x1", key: "twitter" },
];

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/" },
  { name: "Contact Us", href: "#contact" },
  { name: "Portfolio", href: "https://mridupawan-portfolio.vercel.app/" },
];

const CONTACT_INFO = [
  { icon: MapPin, text: "Guwahati, Assam", key: "location" },
  { icon: Phone, text: "+91 7099550167", key: "phone" },
  { icon: Mail, text: "mridupawan503@gmail.com", key: "email" },
];

const BOTTOM_LINKS = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-gray-900">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                MoneyHack
              </span>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We're dedicated to transforming financial management through innovative solutions that empower individuals and businesses.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, key }) => (
                <Link key={key} to={href} target="_blank" className="hover:text-emerald-500 transition-colors">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ name, href }) => (
                <li key={name}>
                  <a href={href} className="text-sm text-gray-600 hover:text-emerald-500 transition-colors flex items-center gap-2">
                    <span className="h-px w-4 bg-emerald-500"></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Contact Info</h3>
            <ul className="space-y-4">
              {CONTACT_INFO.map(({ icon: Icon, text, key }) => (
                <li key={key} className="flex items-start gap-3 text-sm text-gray-600">
                  <Icon className="w-5 h-5 text-emerald-500 mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Newsletter</h3>
            <p className="text-sm text-gray-600">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} MoneyHack. All rights reserved.
            </p>
            <p className="text-sm text-gray-600">
              Made with ❤️ by{" "}
              <Link to="https://mridupawan-portfolio.vercel.app/" className="text-emerald-500 hover:underline">
                Mridupawan Bordoloi
              </Link>
            </p>
            <div className="flex items-center gap-6">
              {BOTTOM_LINKS.map(({ name, href }) => (
                <a key={name} href={href} className="text-sm text-gray-600 hover:text-emerald-500 transition-colors">
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;