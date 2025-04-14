import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white shadow-inner mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-500 animate-float" />
              <span className="text-xl font-bold text-gray-800">LiverCare AI</span>
            </div>
            <p className="text-gray-600">
              Revolutionizing liver health assessment through advanced artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/about" text="About Us" />
              <FooterLink to="/risk-assessment" text="Risk Assessment" />
              <FooterLink to="/login" text="Patient Portal" />
              <FooterLink to="/contact" text="Contact" />
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink to="#" text="Health Articles" />
              <FooterLink to="#" text="Research Papers" />
              <FooterLink to="#" text="Patient Stories" />
              <FooterLink to="#" text="FAQs" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>support@livercare.ai</span>
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Newsletter</h4>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600">
              © {currentYear} LiverCare AI. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-600">
              <Link to="#" className="hover:text-blue-600 transition-colors duration-200">Privacy Policy</Link>
              <Link to="#" className="hover:text-blue-600 transition-colors duration-200">Terms of Service</Link>
              <Link to="#" className="hover:text-blue-600 transition-colors duration-200">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, text }: { to: string; text: string }) => (
  <li>
    <Link
      to={to}
      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
    >
      {text}
    </Link>
  </li>
);

export default Footer;