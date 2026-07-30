import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="pt-28 pb-32">
      <section className="px-6 md:px-10 pb-16 border-b border-line">
        <div className="max-w-[900px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">Legal</span>
          <h1 className="font-serif text-ink text-[clamp(2rem,4vw,3rem)] leading-[1.05]">Terms of Service</h1>
          <p className="text-stone text-sm mt-4">Last updated: July 30, 2025</p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="max-w-[900px] mx-auto space-y-16">
          <div>
            <h2 className="font-serif text-xl text-ink mb-4">1. Agreement to Terms</h2>
            <p className="text-stone text-sm leading-[1.9]">
              Welcome to xuantelier. These Terms of Service ("Terms") govern your access to and use of the xuantelier website, mobile applications, and services (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree, you may not use the Platform.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">2. Services Overview</h2>
            <p className="text-stone text-sm leading-[1.9] mb-4">
              xuantelier provides the following services:
            </p>
            <ul className="space-y-3 text-stone text-sm leading-[1.9] list-disc list-inside">
              <li><strong className="text-ink">AI Design Studio:</strong> Upload photos of your space and receive AI-generated interior design concepts, mood boards, and layouts.</li>
              <li><strong className="text-ink">Visualization:</strong> Professional-grade 3D renders, 360° panoramas, and virtual walkthroughs of architectural projects.</li>
              <li><strong className="text-ink">Marketplace:</strong> A curated platform connecting users with furniture, lighting, decor, and home improvement products from partner brands.</li>
              <li><strong className="text-ink">Expert Network:</strong> Connections to verified property agents, architects, interior designers, contractors, and other building professionals.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">3. User Accounts</h2>
            <p className="text-stone text-sm leading-[1.9] mb-4">
              To access certain features, you must create an account. You are responsible for:
            </p>
            <ul className="space-y-3 text-stone text-sm leading-[1.9] list-disc list-inside">
              <li>Providing accurate and complete registration information</li>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
            <p className="text-stone text-sm leading-[1.9] mt-4">
              We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, abusive, or illegal activity.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">4. AI-Generated Designs</h2>
            <p className="text-stone text-sm leading-[1.9] mb-4">
              Our AI Design Studio generates design concepts based on your uploaded photos and preferences. You acknowledge that:
            </p>
            <ul className="space-y-3 text-stone text-sm leading-[1.9] list-disc list-inside">
              <li>AI-generated designs are conceptual recommendations, not professional architectural or engineering advice</li>
              <li>We recommend consulting licensed professionals before undertaking structural changes</li>
              <li>Product availability, pricing, and specifications are subject to change by partner brands</li>
              <li>Colors and materials may appear differently in renders than in physical reality</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">5. Marketplace and Purchases</h2>
            <p className="text-stone text-sm leading-[1.9] mb-4">
              Products available through our Marketplace are sold by third-party partner brands and retailers. When you make a purchase:
            </p>
            <ul className="space-y-3 text-stone text-sm leading-[1.9] list-disc list-inside">
              <li>The sales contract is between you and the partner brand, not xuantelier</li>
              <li>Payment is processed securely through our payment partners</li>
              <li>Shipping, returns, and warranties are governed by the partner brand's policies</li>
              <li>xuantelier earns a commission on qualifying purchases, which is already included in the listed price</li>
              <li>We act as an intermediary and are not liable for product defects, shipping delays, or partner brand disputes</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">6. Expert Network</h2>
            <p className="text-stone text-sm leading-[1.9] mb-4">
              Our Expert Network connects you with independent professionals. You understand that:
            </p>
            <ul className="space-y-3 text-stone text-sm leading-[1.9] list-disc list-inside">
              <li>Professionals in our network are independently verified but not employed by xuantelier</li>
              <li>All contracts, payments, and project terms are negotiated directly between you and the professional</li>
              <li>xuantelier is not liable for the quality of work, timeliness, or conduct of any professional</li>
              <li>We recommend verifying licenses, insurance, and references before engaging any professional</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">7. Intellectual Property</h2>
            <p className="text-stone text-sm leading-[1.9] mb-4">
              All content on the Platform, including logos, text, graphics, software, and AI models, is owned by xuantelier or our licensors. AI-generated designs created for you are licensed to you for personal, non-commercial use. You may not:
            </p>
            <ul className="space-y-3 text-stone text-sm leading-[1.9] list-disc list-inside">
              <li>Reproduce, distribute, or create derivative works from our content without permission</li>
              <li>Use our trademarks or branding without written consent</li>
              <li>Reverse engineer or attempt to extract our AI models or algorithms</li>
              <li>Upload content that infringes on third-party intellectual property rights</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">8. User Content</h2>
            <p className="text-stone text-sm leading-[1.9]">
              By uploading room photos, reviews, or other content to the Platform, you grant xuantelier a non-exclusive, royalty-free license to use, display, and process that content for the purpose of providing our services. You represent that you own or have the right to share any content you upload.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">9. Limitation of Liability</h2>
            <p className="text-stone text-sm leading-[1.9]">
              To the maximum extent permitted by law, xuantelier and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform. Our total liability for any claim shall not exceed the amount you paid to xuantelier in the 12 months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">10. Indemnification</h2>
            <p className="text-stone text-sm leading-[1.9]">
              You agree to indemnify and hold harmless xuantelier, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Platform, violation of these Terms, or infringement of any third-party rights.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">11. Governing Law</h2>
            <p className="text-stone text-sm leading-[1.9]">
              These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions. Any disputes shall be resolved through binding arbitration in Singapore.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">12. Changes to Terms</h2>
            <p className="text-stone text-sm leading-[1.9]">
              We may modify these Terms at any time. Changes will be effective upon posting. Your continued use of the Platform after changes constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink mb-4">13. Contact</h2>
            <p className="text-stone text-sm leading-[1.9]">
              For questions about these Terms, contact us at:<br />
              <strong className="text-ink">xuantelier</strong><br />
              Email: <a href="mailto:legal@xuantelier.com" className="text-ink underline underline-offset-4">legal@xuantelier.com</a>
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
