import React, { useState } from 'react';
import { X, ExternalLink, UserCheck } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Modal / Popup when clicked */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-dynace-border overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs flex-shrink-0">
                <WhatsAppIcon className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Dynace Kadapa Support</h4>
                <p className="text-[11px] text-white/80">Typically replies within a few minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Close WhatsApp dialogue"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-dynace-bg space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-2xs text-dynace-body leading-relaxed">
              👋 <strong>Namaskaram!</strong> Welcome to Dynace Health Awareness Center, Kadapa. How can we assist you with Dynace Global products today?
            </div>

            <p className="font-semibold text-dynace-deep text-[11px] uppercase tracking-wider pt-1">
              Select Contact Number:
            </p>

            {/* Option 1: Primary Number */}
            <a
              href={businessInfo.phones.primary.whatsappUrl("Hello B. Rama Mohan garu, I am visiting the Dynace Health Awareness Center website and would like information on Dynace Global products in Kadapa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-white hover:bg-emerald-50 rounded-xl border border-gray-200 hover:border-emerald-300 transition-all shadow-2xs group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-dynace-deep text-xs group-hover:text-emerald-700">
                    B. Rama Mohan
                  </span>
                  <span className="text-[11px] text-dynace-muted">
                    {businessInfo.phones.primary.display}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-600" />
            </a>

            {/* Option 2: Secondary Number */}
            <a
              href={businessInfo.phones.secondary.whatsappUrl("Hello, I am interested in Dynace Global products available at Kadapa center. Please share details.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-white hover:bg-emerald-50 rounded-xl border border-gray-200 hover:border-emerald-300 transition-all shadow-2xs group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center p-1.5 flex-shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-dynace-deep text-xs group-hover:text-emerald-700">
                    Secondary Line
                  </span>
                  <span className="text-[11px] text-dynace-muted">
                    {businessInfo.phones.secondary.display}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-600" />
            </a>
          </div>

          {/* Footer note */}
          <div className="p-3 bg-white border-t border-gray-100 text-center text-[10px] text-dynace-muted">
            Official Kadapa Center WhatsApp Assistance
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-white hover:bg-emerald-50 text-white flex items-center justify-center shadow-xl hover:shadow-2xl border-2 border-emerald-500/20 transition-all duration-300 transform hover:scale-105 focus:outline-hidden focus:ring-4 focus:ring-emerald-200 group p-1.5"
        aria-label="Open WhatsApp conversation"
      >
        <WhatsAppIcon className="w-10 h-10 group-hover:scale-110 transition-transform duration-200 drop-shadow-sm" />
        <span className="sr-only">Chat on WhatsApp</span>
      </button>
    </div>
  );
};
