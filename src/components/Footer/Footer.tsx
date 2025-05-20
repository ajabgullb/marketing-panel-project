
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/90 text-gray-600 w-full mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Marketing Panel</h3>
            <p className="text-sm">Empowering Businesses with Innovative Marketing Solutions to help you Grow in the Digital Age.</p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/home" className="hover:text-black transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="hover:text-black transition-colors text-sm">About Us</Link></li>
              <li><Link to="/blogs" className="hover:text-black transition-colors text-sm">Blogs</Link></li>
              <li><Link to="/services" className="hover:text-black transition-colors text-sm">Services</Link></li>
              <li><Link to="/contact" className="hover:text-black transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-black transition-colors text-sm">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-black transition-colors text-sm">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-black transition-colors text-sm">Content Marketing</a></li>
              <li><a href="#" className="hover:text-black transition-colors text-sm">Email Marketing</a></li>
              <li><a href="#" className="hover:text-black transition-colors text-sm">PPC Advertising</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-0.5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-sm">123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <a href="mailto:info@marketingpanel.com" className="hover:text-gray-900 transition-colors text-sm">info@marketingpanel.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <a href="tel:+11234567890" className="hover:text-gray-900 transition-colors text-sm">+1 (123) 456-7890</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Marketing Panel. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
