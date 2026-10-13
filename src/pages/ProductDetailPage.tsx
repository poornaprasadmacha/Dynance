import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, ArrowLeft, CheckCircle2, ShieldAlert, ExternalLink, Leaf, Sparkles, AlertCircle } from 'lucide-react';
import { products } from '../data/products';
import { businessInfo } from '../data/businessInfo';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedNumber, setSelectedNumber] = useState<'primary' | 'secondary'>('primary');

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Schema for individual product (accurate, compliant with visible content)
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": `https://dynacekadapa.in${product.image}`,
    "description": product.shortDescription,
    "brand": {
      "@type": "Brand",
      "name": "Dynace Global"
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Dynace Health Awareness Center",
        "telephone": businessInfo.phones.primary.display,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": businessInfo.address.street,
          "addressLocality": "Kadapa",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "516001",
          "addressCountry": "IN"
        }
      }
    }
  };

  const currentWhatsappUrl = selectedNumber === 'primary'
    ? businessInfo.phones.primary.whatsappUrl(product.whatsappMessage)
    : businessInfo.phones.secondary.whatsappUrl(product.whatsappMessage);

  return (
    <>
      <SEOHead
        title={product.seoTitle}
        description={product.seoDescription}
        canonicalPath={`/products/${product.slug}`}
        schema={productSchema}
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-dynace-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', path: '/products' },
              { label: product.name }
            ]}
          />
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <article className="py-12 md:py-16 bg-white border-b border-dynace-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Product Image & Badges */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gradient-to-b from-dynace-bg to-white rounded-2xl border border-dynace-border p-8 sm:p-12 flex items-center justify-center min-h-[360px] sm:min-h-[420px] shadow-xs relative overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} - Official Dynace Global Product in Kadapa`}
                  className="max-h-[300px] sm:max-h-[340px] w-auto object-contain transition-transform hover:scale-105 duration-300"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white text-dynace-deep text-xs font-semibold px-3 py-1 rounded-full border border-dynace-border shadow-2xs">
                  <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Genuine Botanical Formula</span>
                </span>
              </div>

              {/* Back Link to Catalog */}
              <div className="flex items-center justify-between text-xs text-dynace-muted pt-2 px-1">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1 text-dynace-blue hover:text-dynace-deep font-semibold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Main Catalog</span>
                </Link>
                <span>Kadapa Stock Delivery</span>
              </div>
            </div>

            {/* Right: Product Details & Inquiry Action */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-dynace-cyan uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-4.5xl font-extrabold text-dynace-deep tracking-tight mt-1">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg font-medium text-dynace-blue mt-1">
                  {product.tagline}
                </p>
              </div>

              {/* Official Description */}
              <div className="prose prose-slate max-w-none text-sm sm:text-base text-dynace-body leading-relaxed">
                <p>{product.fullDescription}</p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3 pt-2">
                <h3 className="font-bold text-dynace-deep text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-dynace-blue" />
                  <span>Key Formulated Benefits</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-dynace-body">
                  {product.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-dynace-bg/60 p-2.5 rounded-lg border border-dynace-border/50">
                      <CheckCircle2 className="w-4 h-4 text-dynace-blue flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp & Call Inquiry Box */}
              <div className="bg-dynace-bg rounded-2xl border border-dynace-border p-6 space-y-4 shadow-2xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-dynace-border pb-3">
                  <div>
                    <h3 className="font-bold text-dynace-deep text-base">
                      Inquire About {product.name}
                    </h3>
                    <p className="text-xs text-dynace-muted">
                      Get verified Kadapa pricing, sachet packaging details, and availability.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                    Fresh Batch Direct
                  </span>
                </div>

                {/* Number Selector Toggle */}
                <div>
                  <span className="text-xs font-semibold text-dynace-deep block mb-1.5">
                    Select Contact Number for WhatsApp:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedNumber('primary')}
                      className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                        selectedNumber === 'primary'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-600'
                          : 'border-dynace-border bg-white text-dynace-body hover:bg-gray-50'
                      }`}
                    >
                      <span className="block text-[11px] text-dynace-muted">Primary (B. Rama Mohan)</span>
                      <span>{businessInfo.phones.primary.display}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedNumber('secondary')}
                      className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                        selectedNumber === 'secondary'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-600'
                          : 'border-dynace-border bg-white text-dynace-body hover:bg-gray-50'
                      }`}
                    >
                      <span className="block text-[11px] text-dynace-muted">Secondary Line</span>
                      <span>{businessInfo.phones.secondary.display}</span>
                    </button>
                  </div>
                </div>

                {/* Inquiry Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href={currentWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-xl shadow-xs transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <a
                    href={selectedNumber === 'primary' ? businessInfo.phones.primary.telHref : businessInfo.phones.secondary.telHref}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-dynace-bg text-dynace-deep font-semibold text-sm rounded-xl border border-dynace-border transition-colors"
                  >
                    <Phone className="w-4 h-4 text-dynace-blue" />
                    <span>Call Center Team</span>
                  </a>
                </div>

                {/* Direct Link to Rama Mohan's Official Dynace Page for this product */}
                <div className="pt-2 text-center">
                  <a
                    href={product.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-dynace-blue hover:text-dynace-deep underline underline-offset-4 font-medium"
                  >
                    <span>View Rama Mohan's Official {product.name} Page on Dynace Global</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Specifications & Verified Ingredients Section */}
      <section className="py-16 bg-dynace-bg border-b border-dynace-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Verified Ingredients */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-dynace-border p-6 sm:p-8 space-y-4 shadow-2xs">
              <h2 className="text-xl font-extrabold text-dynace-deep flex items-center gap-2">
                <Leaf className="w-5 h-5 text-emerald-600" />
                <span>{product.ingredients.title}</span>
              </h2>
              <p className="text-xs text-dynace-muted">
                Ingredients published and verified from official manufacturer product reference specifications:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {product.ingredients.items.map((ingredient, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-dynace-body p-2 bg-dynace-bg rounded-lg border border-dynace-border/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-dynace-cyan flex-shrink-0"></span>
                    <span className="font-medium">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Manufacturer Usage Instructions */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-dynace-border p-6 sm:p-8 space-y-4 shadow-2xs">
              <h2 className="text-xl font-extrabold text-dynace-deep">
                Manufacturer Usage Directions
              </h2>
              
              <div className="p-4 rounded-xl bg-dynace-bg border border-dynace-border text-xs sm:text-sm text-dynace-body leading-relaxed">
                <strong className="block text-dynace-deep mb-1">Recommended Serving:</strong>
                {product.usageInstructions.dosage}
              </div>

              {product.usageInstructions.notes && (
                <div className="space-y-2 text-xs text-dynace-muted">
                  <strong className="text-dynace-deep block">Usage Notes:</strong>
                  {product.usageInstructions.notes.map((note, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-dynace-cyan font-bold">&bull;</span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              )}

              {product.certifications && (
                <div className="pt-3 border-t border-dynace-border">
                  <span className="text-xs font-semibold text-dynace-deep block mb-1.5">
                    Manufacturing & Quality Standards:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.certifications.map((cert, idx) => (
                      <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Responsible Health & Medical Disclaimer */}
          <div className="mt-8 bg-amber-50/80 rounded-xl border border-amber-200/90 p-5 text-xs text-amber-950 space-y-1.5 leading-relaxed">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>Mandatory Consumer Wellness & Health Disclaimer</span>
            </div>
            <p>
              Information on this page is compiled directly from official Dynace Global product disclosures. This product is a dietary and botanical wellness supplement. <strong>It does not cure, prevent, or treat any medical disease.</strong> Statements regarding its benefits have not been evaluated as pharmaceutical drugs.
            </p>
            <p className="text-amber-900/80">
              Never discontinue or alter prescribed medical treatments without the direct supervision of your licensed physician.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Other Products Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-dynace-deep">
              Other Dynace Global Formulations in Kadapa
            </h3>
            <Link to="/products" className="text-xs font-semibold text-dynace-blue hover:text-dynace-deep">
              View All 6 &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {products.filter(p => p.id !== product.id).slice(0, 5).map(p => (
              <Link
                key={p.id}
                to={`/products/${p.slug}`}
                className="p-3 rounded-xl border border-dynace-border hover:border-dynace-blue bg-dynace-bg/50 hover:bg-white text-center transition-all group"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-20 w-auto object-contain mx-auto mb-2 group-hover:scale-105 transition-transform"
                />
                <span className="block text-xs font-bold text-dynace-deep truncate">
                  {p.name}
                </span>
                <span className="text-[10px] text-dynace-muted">Details &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
