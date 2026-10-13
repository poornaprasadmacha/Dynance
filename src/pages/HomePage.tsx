import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, CheckCircle2, User, BookOpen, ExternalLink } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { products } from '../data/products';
import { articles } from '../data/articles';
import { ProductCard } from '../components/ProductCard';
import { SEOHead } from '../components/SEOHead';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Dynace Health Awareness Center, Kadapa | Dynace Products"
        description="Discover Dynace Global products at Dynace Health Awareness Center in Kadapa, Andhra Pradesh. Contact us for product information, availability, and customer assistance."
        canonicalPath="/"
      />

      {/* 1. HERO SECTION (Requirements Section 5) */}
      <section className="relative bg-gradient-to-b from-dynace-bg via-white to-dynace-bg border-b border-dynace-border py-12 md:py-20 lg:py-24 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-dynace-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-dynace-blue/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Small Introductory Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-dynace-border shadow-2xs text-xs font-semibold text-dynace-deep tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-dynace-cyan animate-pulse"></span>
                <span>DYNACE HEALTH AWARENESS CENTER | KADAPA</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-dynace-deep tracking-tight leading-[1.15]">
                Discover Dynace Global Products in Kadapa
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-dynace-body leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Connect with Dynace Health Awareness Center in Kadapa for product information, availability, and customer assistance.
              </p>

              {/* CTA Group & Verified Phone */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-dynace-blue hover:bg-dynace-deep text-white text-base font-semibold rounded-xl shadow-sm hover:shadow transition-all duration-200"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-dynace-bg text-dynace-deep text-base font-semibold rounded-xl border border-dynace-border shadow-2xs transition-all duration-200"
                >
                  <span>Contact Our Team</span>
                </Link>
              </div>

              {/* Phone Display Highlight */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-dynace-body">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-dynace-blue/10 flex items-center justify-center text-dynace-blue">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-dynace-muted">Call Us Directly:</span>
                    <a
                      href={businessInfo.phones.primary.telHref}
                      className="font-bold text-dynace-deep hover:text-dynace-blue transition-colors"
                    >
                      {businessInfo.phones.primary.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center p-1.5 flex-shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-dynace-muted">WhatsApp Assistance:</span>
                    <a
                      href={businessInfo.phones.primary.whatsappUrl("Hello B. Rama Mohan garu, I am interested in Dynace Global products in Kadapa.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:underline"
                    >
                      Instant Inquiry
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Asset (Logo & Representative Badge) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white rounded-2xl border border-dynace-border p-6 sm:p-8 shadow-sm">
                <div className="text-center space-y-4">
                  {/* Official Logo Display */}
                  <div className="bg-dynace-bg p-6 rounded-xl border border-dynace-border/60 flex items-center justify-center min-h-[120px]">
                    <img
                      src="/images/dynace-logo.webp"
                      alt="Dynace Global Brand Logo"
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>

                  {/* Representative Snapshot */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-dynace-bg/60 border border-dynace-border/50 text-left">
                    <img
                      src="/images/rama-mohan.png"
                      alt="B. Rama Mohan - Rising Ace of Dynace Global"
                      className="w-16 h-16 rounded-full object-cover object-top border-2 border-dynace-cyan shadow-xs flex-shrink-0 bg-white"
                    />
                    <div>
                      <h4 className="font-bold text-dynace-deep text-sm leading-tight">
                        {businessInfo.representative}
                      </h4>
                      <p className="text-xs font-semibold text-dynace-blue">
                        {businessInfo.designation}
                      </p>
                      <p className="text-[11px] text-dynace-muted mt-0.5">
                        Dynace Health Awareness Center, Kadapa
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 text-left text-xs text-dynace-muted">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Authentic Dynace Global product batches</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>In-person Kadapa center consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Direct WhatsApp guidance & inquiries</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT THE CENTER SECTION (Requirements Section 6) */}
      <section className="py-16 sm:py-20 bg-white border-b border-dynace-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-dynace-blue uppercase tracking-wider">
                <User className="w-4 h-4" />
                <span>Local Leadership & Community Presence</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dynace-deep tracking-tight leading-tight">
                Your Local Dynace Health Awareness Center in Kadapa
              </h2>

              <p className="text-base text-dynace-body leading-relaxed">
                The center connects local customers in Kadapa and Rayalaseema with verified information about <strong>Dynace Global</strong> products. We provide a welcoming, transparent space where community members can learn about botanical wellness formulations, review ingredient specifications, and understand how quality nutrition fits into an everyday balanced lifestyle.
              </p>

              <div className="p-5 rounded-xl bg-dynace-bg border border-dynace-border space-y-3">
                <h4 className="font-bold text-dynace-deep text-sm">
                  Center Representative & Affiliation:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-dynace-muted block">Representative:</span>
                    <strong className="text-dynace-deep text-sm">{businessInfo.representative}</strong>
                  </div>
                  <div>
                    <span className="text-dynace-muted block">Official Designation:</span>
                    <strong className="text-dynace-blue text-sm">{businessInfo.designation}</strong>
                  </div>
                </div>
                <div className="pt-2 border-t border-dynace-border/60">
                  <span className="text-dynace-muted block text-xs">Verified Business Address:</span>
                  <p className="text-xs text-dynace-body mt-0.5 font-medium leading-relaxed">
                    {businessInfo.address.full}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-dynace-blue hover:text-dynace-deep transition-colors"
                >
                  <span>Learn more about our center & mission</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-gray-300">|</span>
                <a
                  href={businessInfo.officialPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-dynace-muted hover:text-dynace-blue transition-colors"
                >
                  <span>View Official Dynace Global Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Representative Card & Verified Venue Snapshot */}
            <div className="lg:col-span-5 space-y-5">
              {/* Actual Venue Photo with Badge */}
              <div className="relative rounded-2xl overflow-hidden border border-dynace-border shadow-xs group">
                <img
                  src="/images/venue.png"
                  alt="Dynace Health Awareness Center building and signboard in Kadapa"
                  className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-4">
                  <div className="text-white space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-dynace-cyan text-slate-900 text-[10px] font-bold uppercase tracking-wider">
                      <MapPin className="w-3 h-3" />
                      Verified Kadapa Venue
                    </span>
                    <p className="text-xs font-semibold text-white/95 leading-tight">
                      Dynace Health Awareness Center — Rajiv Park, Kadapa
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dynace-bg rounded-2xl border border-dynace-border p-6 sm:p-7 space-y-5 shadow-2xs">
                <div className="flex items-center gap-4">
                  <img
                    src="/images/rama-mohan.png"
                    alt="B. Rama Mohan - Rising Ace of Dynace Global"
                    className="w-20 h-20 rounded-full object-cover object-top border-2 border-dynace-blue shadow-sm bg-white"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-dynace-deep">{businessInfo.representative}</h3>
                    <p className="text-xs font-semibold text-dynace-blue">{businessInfo.designation}</p>
                    <p className="text-xs text-dynace-muted mt-1">Kadapa, Andhra Pradesh</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-dynace-body pt-2 border-t border-dynace-border">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-dynace-muted">Direct Phone & WhatsApp:</span>
                    <a href={businessInfo.phones.primary.telHref} className="font-semibold text-dynace-deep">
                      {businessInfo.phones.primary.display}
                    </a>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <a
                    href={businessInfo.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-dynace-deep hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-dynace-cyan" />
                    <span>Get Directions to Center</span>
                  </a>
                  <a
                    href={businessInfo.phones.primary.whatsappUrl("Hello, I would like to schedule a visit to Dynace Health Awareness Center in Kadapa.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs rounded-lg transition-colors shadow-2xs"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp B. Rama Mohan</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG (Requirements Section 7) */}
      <section className="py-16 sm:py-20 bg-dynace-bg border-b border-dynace-border" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-dynace-blue uppercase tracking-wider">
              Verified Product Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dynace-deep tracking-tight mt-1">
              Dynace Global Products in Kadapa
            </h2>
            <p className="text-sm sm:text-base text-dynace-body mt-3 leading-relaxed">
              Explore the six authentic botanical wellness formulations available through Dynace Health Awareness Center. Every product is backed by manufacturer research and genuine batch delivery.
            </p>
          </div>

          {/* 3-Column Responsive Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Catalog Footer Guidance */}
          <div className="mt-12 text-center bg-white p-6 rounded-xl border border-dynace-border max-w-2xl mx-auto shadow-2xs">
            <h4 className="font-bold text-dynace-deep text-sm">
              Need assistance selecting the right product?
            </h4>
            <p className="text-xs text-dynace-body mt-1 leading-relaxed">
              Connect directly with our Kadapa team for verified ingredient details, usage guidelines, and current package availability in Andhra Pradesh.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href={businessInfo.phones.primary.whatsappUrl("Hello, I need guidance regarding Dynace Global products available in Kadapa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Ask on WhatsApp: +91 78010 65008</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-dynace-bg hover:bg-gray-100 text-dynace-deep text-xs font-semibold rounded-lg border border-dynace-border transition-colors"
              >
                <span>Contact Page</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HEALTH AWARENESS BLOG PREVIEW (Requirements Section 9) */}
      <section className="py-16 sm:py-20 bg-white border-b border-dynace-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-dynace-blue uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Public Health Education</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dynace-deep tracking-tight mt-1">
                Health Awareness & Wellness Guides
              </h2>
              <p className="text-sm text-dynace-body mt-2 max-w-xl">
                Practical, evidence-backed guides to help you read wellness labels, understand botanical ingredients, and evaluate nutritional claims with clarity.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/health-awareness"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-dynace-blue hover:text-dynace-deep transition-colors"
              >
                <span>View All 6 Guides</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((article) => (
              <div
                key={article.slug}
                className="bg-dynace-bg rounded-xl border border-dynace-border p-6 flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-dynace-muted mb-3">
                    <span className="font-semibold text-dynace-blue uppercase tracking-wider">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-lg text-dynace-deep group-hover:text-dynace-blue transition-colors leading-snug">
                    <Link to={`/health-awareness/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-dynace-body mt-2.5 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-dynace-border/60">
                  <Link
                    to={`/health-awareness/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-dynace-deep group-hover:text-dynace-blue transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-dynace-muted">
            <p>
              *Educational content published in English. Regional language support (Telugu guides) planned for upcoming releases.
            </p>
          </div>
        </div>
      </section>

      {/* 5. GOOGLE MAPS & LOCATION CARD (Requirements Section 12) */}
      <section className="py-16 sm:py-20 bg-dynace-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-dynace-border shadow-xs overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Address and Actions */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-dynace-cyan uppercase tracking-wider mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Kadapa Center Location</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-dynace-deep">
                    Visit Dynace Health Awareness Center
                  </h3>
                  <p className="text-xs sm:text-sm text-dynace-body mt-2 leading-relaxed">
                    Conveniently located in Rajiv Park, Maruthi Nagar, opposite SP Bunglow Road in Kadapa.
                  </p>

                  {/* Venue Exterior Preview */}
                  <div className="mt-4 rounded-xl overflow-hidden border border-dynace-border shadow-2xs group">
                    <img
                      src="/images/venue.png"
                      alt="Dynace Health Awareness Center building exterior and signboard in Kadapa"
                      className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="bg-slate-50 px-3 py-1.5 border-t border-dynace-border text-[11px] text-dynace-muted flex items-center justify-between">
                      <span className="font-semibold text-dynace-deep">Center Signboard & Exterior</span>
                      <span>1st Floor, Rajiv Park</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-dynace-bg border border-dynace-border space-y-2 text-xs">
                    <p className="font-semibold text-dynace-deep">Official Center Address:</p>
                    <p className="text-dynace-body leading-relaxed font-medium">
                      #1-308, 1st Floor, Rajiv Park,<br />
                      Road No. 05, Maruthi Nagar,<br />
                      SP Bunglow Opp. Road,<br />
                      Kadapa, Andhra Pradesh - 516001, India.
                    </p>
                  </div>

                  <div className="mt-4 text-xs text-dynace-muted">
                    <strong className="text-dynace-deep">Hours of Operation:</strong>
                    <p>{businessInfo.hours}</p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2.5 pt-4 border-t border-dynace-border/60">
                  <a
                    href={businessInfo.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-dynace-deep hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-colors shadow-2xs"
                  >
                    <MapPin className="w-4 h-4 text-dynace-cyan" />
                    <span>Get Directions on Google Maps</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={businessInfo.phones.primary.telHref}
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-dynace-bg hover:bg-gray-100 text-dynace-deep font-semibold text-xs rounded-xl border border-dynace-border transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-dynace-blue" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={businessInfo.phones.primary.whatsappUrl("Hello, I would like directions to Dynace Health Awareness Center in Kadapa.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs rounded-xl transition-colors shadow-2xs"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Embedded Interactive Map */}
              <div className="lg:col-span-7 bg-slate-100 min-h-[350px] lg:min-h-full relative overflow-hidden border-t lg:border-t-0 lg:border-l border-dynace-border">
                <iframe
                  title="Dynace Health Awareness Center Kadapa Map Location"
                  src={businessInfo.address.embedUrl}
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[350px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
