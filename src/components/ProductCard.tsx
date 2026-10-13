import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { Product } from '../data/products';
import { businessInfo } from '../data/businessInfo';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showNumberChoice, setShowNumberChoice] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-dynace-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full overflow-hidden group">
      {/* Product Image Container */}
      <div className="relative bg-gradient-to-b from-dynace-bg to-white p-6 sm:p-8 flex items-center justify-center min-h-[220px] sm:min-h-[250px] border-b border-dynace-border/60 overflow-hidden">
        <Link to={`/products/${product.slug}`} className="w-full flex items-center justify-center">
          <img
            src={product.image}
            alt={`${product.name} - Official Dynace Global Product in Kadapa`}
            loading="lazy"
            className="max-h-[180px] sm:max-h-[200px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[11px] font-semibold text-dynace-deep px-2.5 py-1 rounded-full border border-dynace-border shadow-2xs">
          Authentic Batch
        </span>
      </div>

      {/* Product Information */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs font-semibold text-dynace-cyan uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-xl font-bold text-dynace-deep mt-1 group-hover:text-dynace-blue transition-colors">
            <Link to={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>
        </div>

        <p className="text-sm text-dynace-body line-clamp-3 mb-4 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Key Highlights preview */}
        <div className="space-y-1.5 mb-6 text-xs text-dynace-muted">
          {product.keyBenefits.slice(0, 2).map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-dynace-blue flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Buttons / Actions */}
        <div className="mt-auto space-y-2 pt-2 border-t border-dynace-border/40">
          <Link
            to={`/products/${product.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-dynace-bg hover:bg-dynace-blue hover:text-white text-dynace-deep font-semibold text-sm rounded-lg transition-colors border border-dynace-border hover:border-transparent"
          >
            <span>View Product Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* WhatsApp Direct Inquire */}
          <div className="relative">
            <button
              onClick={() => setShowNumberChoice(!showNumberChoice)}
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-lg shadow-2xs transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Ask About This Product</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showNumberChoice ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown to choose between Primary or Secondary contact */}
            {showNumberChoice && (
              <div className="absolute bottom-full left-0 right-0 mb-1 bg-white border border-dynace-border rounded-lg shadow-lg p-2 z-20 text-xs">
                <p className="font-semibold text-dynace-deep px-2 py-1 border-b border-gray-100 mb-1">
                  Connect on WhatsApp:
                </p>
                <a
                  href={businessInfo.phones.primary.whatsappUrl(product.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 hover:bg-dynace-bg rounded text-dynace-body hover:text-dynace-blue transition-colors"
                >
                  <span className="font-medium">Primary: {businessInfo.phones.primary.display}</span>
                  <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">B. Rama Mohan</span>
                </a>
                <a
                  href={businessInfo.phones.secondary.whatsappUrl(product.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 hover:bg-dynace-bg rounded text-dynace-body hover:text-dynace-blue transition-colors"
                >
                  <span className="font-medium">Secondary: {businessInfo.phones.secondary.display}</span>
                  <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-medium">Assistance</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
