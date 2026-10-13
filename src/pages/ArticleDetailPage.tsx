import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { articles } from '../data/articles';
import { businessInfo } from '../data/businessInfo';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/health-awareness" replace />;
  }

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.summary,
    "author": {
      "@type": "Organization",
      "name": "Dynace Health Awareness Center, Kadapa"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dynace Health Awareness Center",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dynacekadapa.in/images/dynace-logo.webp"
      }
    },
    "datePublished": "2026-10-13",
    "mainEntityOfPage": `https://dynacekadapa.in/health-awareness/${article.slug}`
  };

  const shareText = `Check out this health guide from Dynace Health Awareness Center in Kadapa: ${article.title}`;
  const shareUrl = `https://dynacekadapa.in/health-awareness/${article.slug}`;

  return (
    <>
      <SEOHead
        title={`${article.title} | Dynace Health Awareness Center Kadapa`}
        description={article.summary}
        canonicalPath={`/health-awareness/${article.slug}`}
        schema={articleSchema}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-dynace-border py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Health Awareness', path: '/health-awareness' },
              { label: article.title }
            ]}
          />
        </div>
      </div>

      {/* Article Container */}
      <article className="py-12 md:py-16 bg-white border-b border-dynace-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Article Header */}
          <header className="space-y-4 pb-8 border-b border-dynace-border">
            <div className="flex items-center gap-3 text-xs text-dynace-muted">
              <span className="font-semibold text-dynace-cyan uppercase tracking-wider bg-dynace-bg px-2.5 py-1 rounded-md border border-dynace-border">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishedDate}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4.5xl font-extrabold text-dynace-deep tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-dynace-body leading-relaxed font-normal">
              {article.summary}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-dynace-muted">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-dynace-blue" />
                <span>Published by: <strong className="text-dynace-deep">{article.author}</strong></span>
              </div>

              {/* Share on WhatsApp button */}
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold border border-emerald-200 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Guide on WhatsApp</span>
              </a>
            </div>
          </header>

          {/* Key Takeaways Box */}
          <div className="my-8 p-6 rounded-2xl bg-dynace-bg border border-dynace-border shadow-2xs space-y-3">
            <h3 className="font-bold text-dynace-deep text-sm uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-dynace-blue" />
              <span>Key Takeaways for Readers</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-dynace-body">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-dynace-cyan flex-shrink-0 mt-2"></span>
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body Sections */}
          <div className="space-y-8 text-sm sm:text-base text-dynace-body leading-relaxed">
            {article.sections.map((section, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-dynace-deep tracking-tight">
                  {section.heading}
                </h2>
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Medical Integrity Disclaimer */}
          <div className="my-10 p-5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1.5 leading-relaxed">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              <span>Medical & Health Information Disclaimer</span>
            </div>
            <p>{article.disclaimer}</p>
          </div>

          {/* Navigation & WhatsApp Questions */}
          <div className="pt-6 border-t border-dynace-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/health-awareness"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-dynace-blue hover:text-dynace-deep transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Health Guides</span>
            </Link>

            <a
              href={businessInfo.phones.primary.whatsappUrl(`Hello, I read your article "${article.title}" and would like to ask a question.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Discuss With Kadapa Center</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
};
