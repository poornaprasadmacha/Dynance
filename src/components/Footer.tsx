import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ExternalLink, Clock } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { products } from '../data/products';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-sm">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Business Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/dynace-logo.webp"
                alt="Dynace Global Logo"
                className="h-10 w-auto object-contain bg-white/10 p-1 rounded-md"
              />
              <div>
                <span className="block font-bold text-white text-base leading-tight">
                  Dynace Health Awareness Center
                </span>
                <span className="text-xs text-dynace-cyan font-medium">
                  Kadapa, Andhra Pradesh
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Your verified local awareness and distribution center in Kadapa connecting the community with authentic Dynace Global wellness products and informative health awareness guidance.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1">
              <p><strong className="text-white">Representative:</strong> {businessInfo.representative}</p>
              <p><strong className="text-white">Designation:</strong> {businessInfo.designation}</p>
            </div>

            <div className="pt-1">
              <a
                href={businessInfo.officialPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-dynace-cyan hover:text-white transition-colors underline underline-offset-4"
              >
                <span>Rama Mohan's Official Dynace Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Products Catalog</Link>
              </li>
              <li>
                <Link to="/health-awareness" className="hover:text-white transition-colors">Health Awareness & Guides</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & Location</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Products */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Dynace Products
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {products.map((prod) => (
                <li key={prod.slug}>
                  <Link
                    to={`/products/${prod.slug}`}
                    className="hover:text-dynace-cyan transition-colors flex items-center justify-between"
                  >
                    <span>{prod.name}</span>
                    <span className="text-[10px] text-slate-500">Details &rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Directions */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Visit or Call Us
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-dynace-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <p className="leading-snug">{businessInfo.address.full}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-dynace-cyan flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={businessInfo.phones.primary.telHref} className="hover:text-white">
                    {businessInfo.phones.primary.display}
                  </a>
                  <a href={businessInfo.phones.secondary.telHref} className="text-slate-400 hover:text-white">
                    {businessInfo.phones.secondary.display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-dynace-cyan flex-shrink-0" />
                <span className="text-[11px] text-slate-400">{businessInfo.hours}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={businessInfo.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors border border-slate-700"
              >
                <MapPin className="w-3.5 h-3.5 text-dynace-cyan" />
                <span>Get Google Maps Directions</span>
              </a>

              <a
                href={businessInfo.phones.primary.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg text-xs font-semibold transition-colors shadow-2xs"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} Dynace Health Awareness Center, Kadapa. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link>
            <a href={businessInfo.officialPageUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Official Corporate Page</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
