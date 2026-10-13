import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ShieldCheck, CheckCircle2, Award, ExternalLink, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Us | Dynace Health Awareness Center in Kadapa"
        description="Learn about Dynace Health Awareness Center in Kadapa, Andhra Pradesh. Meet B. Rama Mohan, Rising Ace of Dynace Global. Verified address, mission and contact."
        canonicalPath="/about"
      />

      <div className="bg-white border-b border-dynace-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
        </div>
      </div>

      {/* Main About Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-dynace-bg to-white border-b border-dynace-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-dynace-blue uppercase tracking-wider">
              Local Center Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dynace-deep tracking-tight mt-1">
              Your Local Dynace Health Awareness Center in Kadapa
            </h1>
            <p className="text-base sm:text-lg text-dynace-body mt-4 leading-relaxed">
              Dedicated to connecting the community of Kadapa and Andhra Pradesh with verified information, authentic products, and transparent guidance on <strong>Dynace Global</strong> botanical wellness formulations.
            </p>
          </div>
        </div>
      </section>

      {/* Representative & Mission Section */}
      <section className="py-16 bg-white border-b border-dynace-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Representative Profile Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-dynace-bg rounded-2xl border border-dynace-border p-8 text-center max-w-md w-full shadow-xs">
                <div className="relative inline-block mx-auto mb-4">
                  <img
                    src="/images/rama-mohan.png"
                    alt="B. Rama Mohan - Rising Ace of Dynace Global in Kadapa"
                    className="w-32 h-32 rounded-full object-cover object-top border-4 border-white shadow-md mx-auto bg-white"
                  />
                  <div className="absolute bottom-1 right-1 bg-dynace-blue text-white p-1.5 rounded-full shadow-xs">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                <h2 className="text-xl font-extrabold text-dynace-deep">
                  {businessInfo.representative}
                </h2>
                <p className="text-sm font-bold text-dynace-blue mt-0.5">
                  {businessInfo.designation}
                </p>
                <p className="text-xs text-dynace-muted mt-1">
                  Dynace Health Awareness Center, Kadapa
                </p>

                <div className="mt-6 pt-6 border-t border-dynace-border text-xs text-dynace-body text-left space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-dynace-muted">Phone & WhatsApp:</span>
                    <a href={businessInfo.phones.primary.telHref} className="font-bold text-dynace-deep">
                      {businessInfo.phones.primary.display}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dynace-muted">Location:</span>
                    <span className="font-semibold text-dynace-deep">Kadapa, AP - 516001</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-dynace-border/60">
                  <a
                    href={businessInfo.officialPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-dynace-blue hover:text-dynace-deep underline underline-offset-4"
                  >
                    <span>Verify Rama Mohan's Official Dynace Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Narrative & Center Objectives */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dynace-deep">
                Connecting Kadapa with Dynace Global Wellness
              </h2>

              <p className="text-sm sm:text-base text-dynace-body leading-relaxed">
                Founded and managed by <strong>B. Rama Mohan</strong> (recognized as the <em>Rising Ace of Dynace Global</em>), the Dynace Health Awareness Center serves as the primary regional point of contact for individuals seeking original Dynace Global products in Kadapa, Andhra Pradesh.
              </p>

              <p className="text-sm sm:text-base text-dynace-body leading-relaxed">
                Our initiative was created to address a critical need in local health and nutrition: consumer clarity. Rather than relying on second-hand information or unverified web distributors, consumers in Kadapa can now directly inspect verified manufacturer specifications, receive genuine product batches, and ask questions in person or via WhatsApp.
              </p>

              {/* Business Objectives Checklist */}
              <div className="bg-dynace-bg rounded-xl border border-dynace-border p-6 space-y-3">
                <h4 className="font-bold text-dynace-deep text-sm">
                  Core Objectives of Our Center:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-dynace-body">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-dynace-blue flex-shrink-0" />
                    <span>Showcase genuine Dynace Global products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-dynace-blue flex-shrink-0" />
                    <span>Build a trusted, verifiable online identity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-dynace-blue flex-shrink-0" />
                    <span>Publish evidence-based health awareness guides</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-dynace-blue flex-shrink-0" />
                    <span>Provide direct WhatsApp & phone consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-dynace-blue flex-shrink-0" />
                    <span>Integrate clear location & direction access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-dynace-blue flex-shrink-0" />
                    <span>Maintain strict consumer ethics & transparency</span>
                  </div>
                </div>
              </div>

              {/* Responsible Healthcare Boundary Statement */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-dynace-blue" />
                  <span>Important Professional Healthcare Distinction</span>
                </div>
                <p>
                  Dynace Health Awareness Center is an independent local awareness and product distribution office. <strong>We are not a clinic, hospital, diagnostic laboratory, or registered medical facility.</strong> B. Rama Mohan is an authorized business representative and not a medical doctor. Products discussed are food supplements intended for nutritional wellness support and are not intended to cure, treat, diagnose, or prevent any illness.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dynace-blue hover:bg-dynace-deep text-white text-sm font-semibold rounded-xl shadow-2xs transition-colors"
                >
                  <span>Explore Verified Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-dynace-bg text-dynace-deep text-sm font-semibold rounded-xl border border-dynace-border transition-colors"
                >
                  <span>Contact Our Center</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Business Details & Physical Venue Location */}
      <section className="py-16 sm:py-20 bg-dynace-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-dynace-blue uppercase tracking-wider">
              Physical Presence & Verified Premises
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dynace-deep mt-1">
              Visit Our Center in Kadapa
            </h2>
            <p className="text-sm text-dynace-body mt-2 leading-relaxed">
              Feel free to walk in during business hours or call ahead to arrange a personal product consultation.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-dynace-border shadow-xs overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Venue Photograph */}
              <div className="lg:col-span-6 relative overflow-hidden bg-slate-100 min-h-[300px] lg:min-h-full">
                <img
                  src="/images/venue.png"
                  alt="Dynace Health Awareness Center building with billboard sign in Kadapa"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dynace-cyan text-slate-900 text-[11px] font-bold uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" />
                      Verified Center Signboard
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      Dynace Health Awareness Center, Rajiv Park, Kadapa
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Details & Actions */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-dynace-muted block text-xs">Official Physical Address:</span>
                    <p className="font-semibold text-dynace-deep mt-1 leading-relaxed">
                      {businessInfo.address.full}
                    </p>
                  </div>

                  <div>
                    <span className="text-dynace-muted block text-xs">Center Working Hours:</span>
                    <p className="font-medium text-dynace-body mt-0.5">
                      {businessInfo.hours}
                    </p>
                  </div>

                  <div>
                    <span className="text-dynace-muted block text-xs">Verified GPS Coordinates:</span>
                    <p className="font-mono text-xs text-dynace-muted mt-0.5">
                      Lat: {businessInfo.address.coordinates.lat}, Lng: {businessInfo.address.coordinates.lng}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-dynace-border/70">
                  <a
                    href={businessInfo.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-dynace-deep hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-2xs"
                  >
                    <MapPin className="w-4 h-4 text-dynace-cyan" />
                    <span>Open Directions on Google Maps</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={businessInfo.phones.primary.whatsappUrl("Hello B. Rama Mohan garu, I would like to visit the center in Kadapa.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs rounded-xl transition-colors shadow-2xs"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={businessInfo.phones.primary.telHref}
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-dynace-bg hover:bg-gray-100 text-dynace-deep font-semibold text-xs rounded-xl border border-dynace-border transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-dynace-blue" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
