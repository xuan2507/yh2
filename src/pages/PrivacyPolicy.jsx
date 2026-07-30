import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="pt-28 pb-32">
      <section className="px-6 md:px-10 pb-16 border-b border-line">
        <div className="max-w-[900px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">Legal</span>
          <h1 className="font-serif text-ink text-[clamp(2rem,4vw,3rem)] leading-[1.05]">Privacy Policy</h1>
          <p className="text-stone text-sm mt-4">Last updated: July 30, 2025</p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="max-w-[900px] mx-auto space-y-16">
          <div>
            <h2 className="font-serif text-xl text-ink mb-4">1. Introduction</h2>
            <p className="text-stone text-sm leading-[1.9]">
              xuantelier ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, and services (collectively, the "Platform"). Please read this policy carefully. By using the Platform, you consent to the practices described in this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">2. Information We Collect</h2>
            <div className="space-y-4 text-stone text-sm leading-[1.9]">
              <p><strong className="text-ink">Personal Information:</strong> When you create an account, make a purchase, or contact us, we may collect your name, email address, phone number, billing and shipping address, and payment information.</p>
              <p><strong className="text-ink">Room Photos and Design Preferences:</strong> When you use our AI Design Studio, you upload photos of your spaces and share style preferences, budget ranges, and functional requirements. These are used solely to generate your design concepts.</p>
              <p><strong className="text-ink">Usage Data:</strong> We collect information about how you interact with the Platform, including pages visited, features used, search queries, and products viewed.</p>
              <p><strong className="text-ink">Device Information:</strong> We may collect your IP address, browser type, operating system, and device identifiers to improve performance and security.</p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">3. How We Use Your Information</h2>
            <ul className="space-y-3 text-stone text-sm leading-[1.9] list-disc list-inside">
              <li>To provide and improve our design, visualization, and marketplace services</li>
              <li>To process transactions and deliver products from our partner brands</li>
              <li>To personalize your experience and recommend relevant products and designs</li>
              <li>To communicate with you about your projects, orders, and account</li>
              <li>To analyze usage patterns and improve our AI models</li>
              <li>To comply with legal obligations and protect our rights</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">4. AI and Machine Learning</h2>
            <p className="text-stone text-sm leading-[1.9]">
              Our platform uses artificial intelligence to generate design concepts and recommendations. Your uploaded room photos and preferences are processed by our AI systems to create personalized designs. We do not use your personal photos to train our general AI models without your explicit consent. Aggregated, anonymized data may be used to improve our algorithms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">5. Sharing Your Information</h2>
            <p className="text-stone text-sm leading-[1.9] mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="space-y-3 text-stone text-sm leading-[1.9] list-disc list-inside">
              <li><strong className="text-ink">Partner Brands:</strong> When you purchase a product, we share your shipping details with the relevant brand or retailer to fulfill your order.</li>
              <li><strong className="text-ink">Service Providers:</strong> We work with trusted third parties for payment processing, hosting, analytics, and customer support.</li>
              <li><strong className="text-ink">Professional Network:</strong> If you choose to connect with a property agent, architect, or contractor through our platform, we share your contact details with that professional.</li>
              <li><strong className="text-ink">Legal Requirements:</strong> We may disclose information if required by law, court order, or to protect our rights and safety.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">6. Data Security</h2>
            <p className="text-stone text-sm leading-[1.9]">
              We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">7. Your Rights</h2>
            <p className="text-stone text-sm leading-[1.9] mb-4">Depending on your location, you may have the right to:</p>
            <ul className="space-y-3 text-stone text-sm leading-[1.9] list-disc list-inside">
              <li>Access, correct, or delete your personal information</li>
              <li>Withdraw consent for data processing</li>
              <li>Request a copy of your data in a portable format</li>
              <li>Object to certain types of processing</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="text-stone text-sm leading-[1.9] mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@xuantelier.com" className="text-ink underline underline-offset-4">privacy@xuantelier.com</a>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">8. Cookies and Tracking</h2>
            <p className="text-stone text-sm leading-[1.9]">
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings. Essential cookies required for the Platform to function cannot be disabled.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">9. Children's Privacy</h2>
            <p className="text-stone text-sm leading-[1.9]">
              Our Platform is not intended for children under 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a minor, please contact us immediately.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">10. Changes to This Policy</h2>
            <p className="text-stone text-sm leading-[1.9]">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">11. Contact Us</h2>
            <p className="text-stone text-sm leading-[1.9]">
              If you have questions or concerns about this Privacy Policy, please contact us at:<br />
              <strong className="text-ink">xuantelier</strong><br />
              Email: <a href="mailto:privacy@xuantelier.com" className="text-ink underline underline-offset-4">privacy@xuantelier.com</a>
            </p>
          </div>

          <div className="pt-8 border-t border-line">
            <Link to="/" className="text-[11px] tracking-[0.12em] uppercase text-stone hover:text-ink transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
