import React, { useState } from 'react';
import { Search, ShieldCheck, HelpCircle } from 'lucide-react';
import { products } from '../data/products';
import { businessInfo } from '../data/businessInfo';
import { ProductCard } from '../components/ProductCard';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cellular Nutrition', 'Weight Management', 'Immune Defense', 'Women\'s Health', 'Functional Beverages'];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.keyBenefits.some(b => b.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (selectedCategory === 'All') return matchesSearch;
    if (selectedCategory === 'Cellular Nutrition') return matchesSearch && product.category.includes('Cellular');
    if (selectedCategory === 'Weight Management') return matchesSearch && product.category.includes('Weight');
    if (selectedCategory === 'Immune Defense') return matchesSearch && product.category.includes('Immune');
    if (selectedCategory === 'Women\'s Health') return matchesSearch && product.category.includes('Women');
    if (selectedCategory === 'Functional Beverages') return matchesSearch && product.category.includes('Beverages');
    return matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Products Catalog | Dynace Global in Kadapa, Andhra Pradesh"
        description="Browse all 6 verified Dynace Global wellness products in Kadapa: Dynace Rocenta, Urbanism, Ace Guard, Lyftmax, Ace Brew, and Triple Root. Inquire today."
        canonicalPath="/products"
      />

      <div className="bg-white border-b border-dynace-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Products' }]} />
        </div>
      </div>

      {/* Products Catalog Header */}
      <section className="py-12 bg-gradient-to-b from-dynace-bg to-white border-b border-dynace-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-dynace-blue uppercase tracking-wider">
              Official Dynace Global Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dynace-deep tracking-tight mt-1">
              Dynace Global Products in Kadapa
            </h1>
            <p className="text-base text-dynace-body mt-3 leading-relaxed">
              Discover the full lineup of six verified botanical supplements distributed by Dynace Health Awareness Center in Kadapa. Sourced directly through official channels to ensure authenticity and freshness.
            </p>
          </div>

          {/* Search and Category Filters */}
          <div className="mt-8 pt-6 border-t border-dynace-border flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-dynace-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products or ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-dynace-border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-dynace-blue focus:border-transparent transition-all shadow-2xs"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-dynace-deep text-white font-semibold'
                      : 'bg-white text-dynace-body hover:bg-gray-100 border border-dynace-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section className="py-16 bg-dynace-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-dynace-border p-8 max-w-lg mx-auto">
              <HelpCircle className="w-12 h-12 text-dynace-muted mx-auto mb-3" />
              <h3 className="text-lg font-bold text-dynace-deep">No products match your search</h3>
              <p className="text-xs text-dynace-muted mt-1">
                Try searching for another term like "NMN", "Coffee", or "Stem Cell".
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-4 px-4 py-2 bg-dynace-blue text-white text-xs font-semibold rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Authenticity & Consumer Notice */}
          <div className="mt-16 bg-white rounded-2xl border border-dynace-border p-6 sm:p-8 max-w-4xl mx-auto shadow-2xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between border-b border-gray-100 pb-5 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-dynace-blue flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dynace-deep text-sm sm:text-base">
                    Authentic Dynace Global Sourcing Guarantee
                  </h4>
                  <p className="text-xs text-dynace-muted">
                    Fresh batches delivered with verified seals and batch numbering.
                  </p>
                </div>
              </div>

              <a
                href={businessInfo.phones.primary.whatsappUrl("Hello, I would like to verify product batch details and pricing in Kadapa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shadow-2xs"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Product Inquiries</span>
              </a>
            </div>

            <div className="text-xs text-dynace-body space-y-2 leading-relaxed">
              <p>
                <strong>Local Market Pricing Notice:</strong> International prices published in foreign currencies on corporate landing pages do not reflect local Indian import tariffs, seasonal batch discounts, or regional promotional packs. Contact our Kadapa center directly on phone or WhatsApp to receive exact local INR pricing and current stock availability.
              </p>
              <p className="text-dynace-muted">
                <strong>Disclaimer:</strong> Dynace Global products are nutritional dietary supplements. They do not replace prescribed medical therapies and are not formulated to diagnose, cure, treat, or prevent any illness or disease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
