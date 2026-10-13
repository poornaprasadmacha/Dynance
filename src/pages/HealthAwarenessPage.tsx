import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, ArrowRight, ShieldCheck, Clock, Languages, Heart } from 'lucide-react';
import { articles } from '../data/articles';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const HealthAwarenessPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter(
    (art) =>
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="Health Awareness & Wellness Guides | Dynace Center Kadapa"
        description="Read educational health awareness guides on nutrition labels, wellness ingredients, and healthy lifestyle habits from Dynace Health Awareness Center in Kadapa."
        canonicalPath="/health-awareness"
      />

      <div className="bg-white border-b border-dynace-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Health Awareness' }]} />
        </div>
      </div>

      {/* Blog Hero Section */}
      <section className="py-12 bg-gradient-to-b from-dynace-bg to-white border-b border-dynace-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-dynace-blue uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Evidence-Based Community Education</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dynace-deep tracking-tight mt-1">
              Health Awareness & Wellness Guides
            </h1>
            <p className="text-base text-dynace-body mt-3 leading-relaxed">
              Empowering consumers in Kadapa and beyond with objective, clear, and science-grounded education. Learn how to evaluate wellness products, read nutritional labels, and cultivate sustainable everyday vitality.
            </p>

            {/* Regional Language Future Notice */}
            <div className="mt-6 inline-flex items-center gap-2 p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
              <Languages className="w-4 h-4 text-dynace-blue flex-shrink-0" />
              <span>
                <strong>Telugu Language Support Notice:</strong> All articles are currently published in English. Telugu translations (తెలుగు కథనాలు) are being developed to serve our local Andhra Pradesh community.
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-8 pt-6 border-t border-dynace-border max-w-md">
            <div className="relative">
              <Search className="w-4 h-4 text-dynace-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search health guides or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-dynace-border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-dynace-blue focus:border-transparent transition-all shadow-2xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-dynace-bg border-b border-dynace-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-dynace-border overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center justify-between text-xs text-dynace-muted">
                    <span className="font-semibold text-dynace-cyan uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-dynace-deep group-hover:text-dynace-blue transition-colors leading-snug">
                    <Link to={`/health-awareness/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-dynace-body leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="p-6 pt-0 mt-auto border-t border-dynace-border/50 flex items-center justify-between text-xs">
                  <span className="text-dynace-muted">{article.publishedDate}</span>
                  <Link
                    to={`/health-awareness/${article.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-dynace-blue group-hover:text-dynace-deep transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Educational Principles & Medical Guidance Box */}
          <div className="mt-16 bg-white rounded-2xl border border-dynace-border p-6 sm:p-8 max-w-4xl mx-auto shadow-2xs space-y-4">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <ShieldCheck className="w-6 h-6 text-dynace-blue flex-shrink-0" />
              <div>
                <h4 className="font-bold text-dynace-deep text-sm sm:text-base">
                  Editorial Standards & Medical Integrity
                </h4>
                <p className="text-xs text-dynace-muted">
                  How Dynace Health Awareness Center curates and verifies health content.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-dynace-body leading-relaxed">
              <div className="p-3.5 rounded-xl bg-dynace-bg border border-dynace-border/60">
                <strong className="block text-dynace-deep mb-1">General Wellness vs. Medical Treatment:</strong>
                Our guides focus on nutritional literacy, balanced habits, and understanding product formulations. We strictly distinguish general wellness from proven medical cures.
              </div>
              <div className="p-3.5 rounded-xl bg-dynace-bg border border-dynace-border/60">
                <strong className="block text-dynace-deep mb-1">Physician Consultation is Paramount:</strong>
                Supplements are designed to complement daily lifestyle choices. We urge all community members to consult qualified doctors for individual medical diagnosis.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
