import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070707] border-t border-brand-gold-dark/15 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand details */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <GraduationCap className="h-7 w-7 text-brand-gold" />
              <span className="text-lg font-bold tracking-wider font-sans text-gold-gradient">
                AURUM ACADEMY
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              India's premier learning institute for JEE, NEET, and Olympiads. Empowering minds, accelerating growth, and sculpting elite results.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-gold-light/80 bg-brand-gold-dark/10 border border-brand-gold-dark/20 w-fit px-3 py-1.5 rounded">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              ISO 9001:2015 Certified Institute
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase border-b border-brand-gold-dark/20 pb-2 w-fit">
              Courses
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses" className="hover:text-brand-gold transition-colors duration-200">
                  IIT-JEE Classroom Course
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-brand-gold transition-colors duration-200">
                  NEET Pre-Medical Program
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-brand-gold transition-colors duration-200">
                  Foundation Batch (Class 8-10)
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-brand-gold transition-colors duration-200">
                  Olympiad Edge Prep
                </Link>
              </li>
            </ul>
          </div>

          {/* Office locations */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase border-b border-brand-gold-dark/20 pb-2 w-fit">
              Our Centers
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <span className="text-white block font-medium">Kota (Corporate Office)</span>
                  <p className="text-xs text-gray-500">12, Rajiv Gandhi Nagar, Kota, Rajasthan</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <span className="text-white block font-medium">Delhi NCR</span>
                  <p className="text-xs text-gray-500">B-34, Block E, Connaught Place, New Delhi</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <span className="text-white block font-medium">Bengaluru</span>
                  <p className="text-xs text-gray-500">80 Feet Rd, Koramangala 4th Block, Bengaluru</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase border-b border-brand-gold-dark/20 pb-2 w-fit">
              Get in touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+918001234567" className="hover:text-brand-gold transition-colors">
                  +91 800 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:admissions@aurumacademy.in" className="hover:text-brand-gold transition-colors">
                  admissions@aurumacademy.in
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-xs text-white block mb-2 font-medium uppercase tracking-wider">
                Newsletter
              </span>
              <form onSubmit={(e) => e.preventDefault()} className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="bg-brand-dark-bg border border-brand-gold-dark/25 rounded-l px-3 py-1.5 text-xs text-white w-full form-input-focus"
                />
                <button
                  type="submit"
                  className="bg-gold-hover text-[#0A0A0A] font-bold text-xs px-3 rounded-r transition-all duration-200"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-brand-gold-dark/10 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-gray-500">
            &copy; {currentYear} Aurum Academy Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-brand-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
