'use client'

import { PagePadding, Container } from '@/components/layout'

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16">
        <PagePadding>
          <Container>
            <div className="text-center space-y-8">
              <div className="overflow-hidden px-4">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold font-sans leading-tight">
                  PRIVACY POLICY
                </h1>
              </div>
              <p className="text-lg md:text-xl font-serif text-muted max-w-3xl mx-auto leading-relaxed px-4">
                Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
              </p>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <PagePadding>
          <Container size="medium">
            <div className="prose prose-lg max-w-none space-y-8">

              <div>
                <h2 className="text-2xl font-semibold font-sans mb-4">1. Information We Collect</h2>
                <div className="font-serif text-gray-700 space-y-4">
                  <p>We collect information you provide directly to us, such as when you:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Create an account</li>
                    <li>Book styling services</li>
                    <li>Make purchases through our affiliate links</li>
                    <li>Contact us for support</li>
                    <li>Subscribe to our communications</li>
                  </ul>
                  <p>This may include your name, email address, phone number, payment information, and styling preferences.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-sans mb-4">2. How We Use Your Information</h2>
                <div className="font-serif text-gray-700 space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and improve our styling services</li>
                    <li>Process payments and fulfill orders</li>
                    <li>Send you service updates and promotional materials</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Analyze usage patterns to enhance our platform</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-sans mb-4">3. Information Sharing</h2>
                <div className="font-serif text-gray-700 space-y-4">
                  <p>We may share your information in the following circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With service providers who assist in our operations</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transaction</li>
                    <li>With your consent or at your direction</li>
                  </ul>
                  <p>We do not sell your personal information to third parties.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-sans mb-4">4. Data Security</h2>
                <div className="font-serif text-gray-700 space-y-4">
                  <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                  <p>However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-sans mb-4">5. Your Rights</h2>
                <div className="font-serif text-gray-700 space-y-4">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Withdraw consent where applicable</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-sans mb-4">6. Cookies and Tracking</h2>
                <div className="font-serif text-gray-700 space-y-4">
                  <p>We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-sans mb-4">7. Third-Party Links</h2>
                <div className="font-serif text-gray-700 space-y-4">
                  <p>Our service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-sans mb-4">8. Children's Privacy</h2>
                <div className="font-serif text-gray-700 space-y-4">
                  <p>Our services are not intended for children under 18. We do not knowingly collect personal information from children under 18.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-sans mb-4">9. Changes to This Policy</h2>
                <div className="font-serif text-gray-700 space-y-4">
                  <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-sans mb-4">10. Contact Us</h2>
                <div className="font-serif text-gray-700 space-y-4">
                  <p>If you have any questions about this privacy policy or our practices, please contact us at:</p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="font-semibold">The Elevated Gentleman</p>
                    <p>Email: privacy@theelevatedgentleman.com</p>
                    <p>Last Updated: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </PagePadding>
      </section>
    </>
  )
}