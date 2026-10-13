import React, { useState } from 'react';
import { MapPin, Phone, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid full name.';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Phone Number is required for response.';
    } else if (cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please provide a valid email format, or leave empty.';
      }
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message or product query.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters in your query.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hello Dynace Health Awareness Center Kadapa,\n\nName: ${formData.fullName}\nPhone: ${formData.phone}${formData.email ? `\nEmail: ${formData.email}` : ''}\n\nMessage:\n${formData.message}`;
    const targetUrl = businessInfo.phones.primary.whatsappUrl(text);
    
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEOHead
        title="Contact Dynace Health Awareness Center | Kadapa, Andhra Pradesh"
        description="Contact Dynace Health Awareness Center in Kadapa. Call or WhatsApp +91 78010 65008. Visit our center at Rajiv Park, Maruthi Nagar, Kadapa - 516001."
        canonicalPath="/contact"
      />

      <div className="bg-white border-b border-dynace-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
        </div>
      </div>

      {/* Main Header */}
      <section className="py-12 bg-gradient-to-b from-dynace-bg to-white border-b border-dynace-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-dynace-blue uppercase tracking-wider">
              Get in Touch with Our Kadapa Center
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dynace-deep tracking-tight mt-1">
              Contact Dynace Health Awareness Center
            </h1>
            <p className="text-base text-dynace-body mt-3 leading-relaxed">
              Have questions about Dynace Global products, local packaging, or center visits? Reach out to B. Rama Mohan and our support team in Kadapa via phone, WhatsApp, or through our contact form.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-16 bg-dynace-bg border-b border-dynace-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact Info & Action Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Official Representative & Phones */}
              <div className="bg-white rounded-2xl border border-dynace-border p-6 sm:p-7 shadow-2xs space-y-4">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <img
                    src="/images/rama-mohan.png"
                    alt="B. Rama Mohan"
                    className="w-16 h-16 rounded-full object-cover object-top border-2 border-dynace-cyan bg-white"
                  />
                  <div>
                    <h3 className="font-bold text-dynace-deep text-base">{businessInfo.representative}</h3>
                    <p className="text-xs font-semibold text-dynace-blue">{businessInfo.designation}</p>
                    <p className="text-[11px] text-dynace-muted">Dynace Global Representative</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-dynace-muted block">Direct Phone & WhatsApp:</span>
                    <div className="flex items-center justify-between mt-1">
                      <a
                        href={businessInfo.phones.primary.telHref}
                        className="font-bold text-dynace-deep hover:text-dynace-blue text-sm"
                      >
                        {businessInfo.phones.primary.display}
                      </a>
                      <a
                        href={businessInfo.phones.primary.whatsappUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs hover:bg-emerald-100 transition-colors"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span>Chat</span>
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-start gap-2">
                    <Clock className="w-4 h-4 text-dynace-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-dynace-deep">Working Hours:</span>
                      <p className="text-dynace-muted text-[11px] mt-0.5">{businessInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Center Address & Venue Building */}
              <div className="bg-white rounded-2xl border border-dynace-border p-6 sm:p-7 shadow-2xs space-y-4">
                <div className="rounded-xl overflow-hidden border border-dynace-border group">
                  <img
                    src="/images/venue.png"
                    alt="Dynace Health Awareness Center building and signboard in Kadapa"
                    className="w-full h-40 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="bg-slate-50 px-3 py-1.5 border-t border-dynace-border text-[11px] text-dynace-muted flex items-center justify-between">
                    <span className="font-semibold text-dynace-deep">Physical Premises & Signboard</span>
                    <span>Rajiv Park, Kadapa</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-dynace-bg text-dynace-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <h4 className="font-bold text-dynace-deep text-sm">Center Address</h4>
                    <p className="text-dynace-body leading-relaxed">
                      {businessInfo.address.full}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={businessInfo.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-dynace-deep hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors shadow-2xs"
                  >
                    <MapPin className="w-3.5 h-3.5 text-dynace-cyan" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Validated Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-dynace-border p-6 sm:p-8 lg:p-10 shadow-2xs">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-dynace-deep">
                  Send an Inquiry or Message
                </h3>
                <p className="text-xs sm:text-sm text-dynace-muted mt-1">
                  Fill in your details below. You can submit directly or immediately dispatch your inquiry to WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-emerald-950">Inquiry Prepared Successfully!</h4>
                    <p className="text-xs text-emerald-800 mt-1 max-w-md mx-auto">
                      Thank you, <strong>{formData.fullName}</strong>. To ensure the fastest response, send this inquiry directly to B. Rama Mohan on WhatsApp or call our center.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Send to WhatsApp Now</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ fullName: '', phone: '', email: '', message: '' });
                      }}
                      className="inline-flex items-center justify-center py-2.5 px-4 bg-white border border-gray-300 text-dynace-deep font-semibold text-xs rounded-xl hover:bg-gray-50"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 text-xs sm:text-sm">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block font-semibold text-dynace-deep mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Rama Rao"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border ${
                        errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-dynace-border'
                      } focus:outline-hidden focus:ring-2 focus:ring-dynace-blue`}
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block font-semibold text-dynace-deep mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border ${
                        errors.phone ? 'border-red-500 bg-red-50/30' : 'border-dynace-border'
                      } focus:outline-hidden focus:ring-2 focus:ring-dynace-blue`}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email (Optional) */}
                  <div>
                    <label htmlFor="email" className="block font-semibold text-dynace-deep mb-1">
                      Email Address <span className="text-dynace-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-dynace-border'
                      } focus:outline-hidden focus:ring-2 focus:ring-dynace-blue`}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-semibold text-dynace-deep mb-1">
                      Your Message or Product Inquiry <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Share which Dynace product you are interested in (e.g. Dynace Rocenta, Ace Guard, etc.) or your query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border ${
                        errors.message ? 'border-red-500 bg-red-50/30' : 'border-dynace-border'
                      } focus:outline-hidden focus:ring-2 focus:ring-dynace-blue`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-600 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>



                  {/* Privacy Notice */}
                  <p className="text-[11px] text-dynace-muted pt-2 leading-relaxed">
                    <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-emerald-600" />
                    <strong>Privacy Notice:</strong> We respect your privacy. Contact information is strictly used to reply to your product inquiry and is never sold or shared with third-party advertisers.
                  </p>

                  {/* Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-dynace-blue hover:bg-dynace-deep text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (validate()) {
                          handleSendViaWhatsApp();
                        }
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Send Directly to WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-dynace-border overflow-hidden shadow-xs">
            <div className="p-4 bg-dynace-bg border-b border-dynace-border flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-dynace-deep">
                Center Location Map: #1-308, 1st Floor, Rajiv Park, Kadapa - 516001
              </span>
              <a
                href={businessInfo.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-dynace-blue hover:underline"
              >
                Open in Google Maps Application &rarr;
              </a>
            </div>
            <iframe
              title="Dynace Health Awareness Center Kadapa Google Maps"
              src={businessInfo.address.embedUrl}
              width="100%"
              height="400"
              className="w-full h-[400px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
