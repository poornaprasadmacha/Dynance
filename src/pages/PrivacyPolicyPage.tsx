import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Dynace Health Awareness Center, Kadapa"
        description="Privacy policy and consumer data disclosure for Dynace Health Awareness Center in Kadapa, Andhra Pradesh. We respect your data confidentiality."
        canonicalPath="/privacy-policy"
      />

      <div className="bg-white border-b border-dynace-border py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        </div>
      </div>

      <article className="py-12 md:py-16 bg-white border-b border-dynace-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <header className="space-y-3 pb-6 border-b border-dynace-border">
            <span className="text-xs font-bold text-dynace-blue uppercase tracking-wider">
              Transparency & Consumer Protection
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-dynace-deep tracking-tight">
              Privacy Policy & Data Practices
            </h1>
            <p className="text-sm text-dynace-muted">
              Last Updated: October 2026 | Dynace Health Awareness Center, Kadapa
            </p>
          </header>

          <div className="space-y-6 text-sm text-dynace-body leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-xl font-bold text-dynace-deep flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-dynace-blue" />
                <span>1. Overview and Commitment</span>
              </h2>
              <p>
                Dynace Health Awareness Center ("we," "our," or "the Center"), located at #1-308, 1st Floor, Rajiv Park, Kadapa, Andhra Pradesh, respects the privacy of our visitors and customers. This Privacy Policy discloses our data handling practices for this website (https://dynacekadapa.in/).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-dynace-deep flex items-center gap-2">
                <Eye className="w-5 h-5 text-dynace-blue" />
                <span>2. Information We Collect</span>
              </h2>
              <p>
                We only collect basic personal details that you voluntarily choose to share with us when requesting product information or assistance:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li><strong>Contact Inquiries:</strong> Your full name, mobile phone number, optional email address, and the specific product message you enter.</li>
                <li><strong>WhatsApp Communications:</strong> When you initiate a WhatsApp chat, your public WhatsApp username and phone number are visible to our center representative to reply to your inquiry.</li>
                <li><strong>No Sensitive Medical Data:</strong> We explicitly do not request, require, or collect personal medical diagnoses, laboratory reports, or confidential clinical records through this website.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-dynace-deep flex items-center gap-2">
                <Lock className="w-5 h-5 text-dynace-blue" />
                <span>3. How We Use Your Information</span>
              </h2>
              <p>Information provided is used exclusively for legitimate business communication:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>To respond to your inquiries regarding Dynace Global products and package availability in Kadapa.</li>
                <li>To coordinate in-person visits to our center at Rajiv Park, Maruthi Nagar, Kadapa.</li>
                <li>We do not sell, rent, lease, or monetize your contact details to third-party telemarketers or advertisers.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-dynace-deep flex items-center gap-2">
                <FileText className="w-5 h-5 text-dynace-blue" />
                <span>4. Health and Product Claims Distinction</span>
              </h2>
              <p>
                All product information and ingredient profiles presented on this website are derived from official manufacturer specifications published by Dynace Global. Our center does not manufacture pharmaceuticals or conduct clinical diagnostic tests.
              </p>
              <p>
                Products are nutritional wellness supplements and must not be construed as medical cures. We encourage visitors to consult licensed doctors for medical issues.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-dynace-border">
              <h2 className="text-lg font-bold text-dynace-deep">
                5. Contact for Privacy Inquiries
              </h2>
              <p className="text-xs">
                If you have questions about our data practices, or wish to update or delete your contact details from our records, please reach out directly:
              </p>
              <div className="p-4 rounded-xl bg-dynace-bg border border-dynace-border text-xs space-y-1">
                <p><strong>Dynace Health Awareness Center</strong></p>
                <p>Representative: {businessInfo.representative}</p>
                <p>Address: {businessInfo.address.full}</p>
                <p>Phone: {businessInfo.phones.primary.display} / {businessInfo.phones.secondary.display}</p>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
};
