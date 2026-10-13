import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { SEOHead } from '../components/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | Dynace Health Awareness Center Kadapa"
        description="The page you requested could not be found. Return to Dynace Health Awareness Center Kadapa homepage or browse our product catalog."
      />

      <section className="py-20 md:py-32 bg-dynace-bg text-center">
        <div className="max-w-md mx-auto px-4 space-y-6">
          <div className="w-20 h-20 rounded-full bg-blue-100 text-dynace-blue flex items-center justify-center mx-auto text-3xl font-extrabold">
            404
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-dynace-deep">
            Page Not Found
          </h1>

          <p className="text-sm text-dynace-body leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let us help you find what you need.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center text-xs sm:text-sm">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 bg-dynace-blue hover:bg-dynace-deep text-white font-semibold rounded-xl transition-colors shadow-2xs"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 bg-white hover:bg-gray-50 text-dynace-deep font-semibold rounded-xl border border-dynace-border transition-colors shadow-2xs"
            >
              <Package className="w-4 h-4" />
              <span>Browse Products</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-dynace-border text-xs text-dynace-muted">
            Need urgent assistance? Call us at{' '}
            <a href={businessInfo.phones.primary.telHref} className="text-dynace-blue font-bold">
              {businessInfo.phones.primary.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
