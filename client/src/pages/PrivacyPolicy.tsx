import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
      <Header />
      <main>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h1 className="text-3xl md:text-5xl font-semibold">Privacy Policy</h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
                Last updated: March 1, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-16">
              <h2>Introduction</h2>
              <p>
                EcoFilament ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, purchase our products, or interact with us in any way.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect several types of information from and about users of our website and products, including:
              </p>
              <h3>Personal Information</h3>
              <ul>
                <li>Contact information (name, email address, mailing address, phone number)</li>
                <li>Account credentials (username, password)</li>
                <li>Payment information (processed through secure third-party payment processors)</li>
                <li>Purchase and order history</li>
                <li>Customer service interactions</li>
              </ul>

              <h3>Device and Usage Information</h3>
              <ul>
                <li>IP address and browser type</li>
                <li>Device identifiers</li>
                <li>Pages visited and actions taken on our website</li>
                <li>Referral sources</li>
                <li>Usage patterns within our mobile application</li>
                <li>Product usage data (when you connect your EcoFilament machine to our app)</li>
              </ul>

              <h2>How We Collect Information</h2>
              <p>
                We collect information through:
              </p>
              <ul>
                <li>Direct interactions when you create accounts, make purchases, or contact us</li>
                <li>Automated technologies such as cookies and similar tracking technologies</li>
                <li>Third-party sources such as business partners, analytics providers, and payment processors</li>
                <li>IoT connectivity from your EcoFilament machine when connected to our app (with your permission)</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>
                We use your information for various purposes, including:
              </p>
              <ul>
                <li>Processing and fulfilling your orders</li>
                <li>Creating and managing your account</li>
                <li>Providing customer support</li>
                <li>Sending transactional emails (order confirmations, shipping updates)</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Improving our products and services</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Detecting and preventing fraudulent activity</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2>Sharing Your Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul>
                <li>Service providers who perform services on our behalf (payment processors, shipping companies, cloud service providers)</li>
                <li>Business partners for joint marketing efforts or co-branded offerings (with your consent)</li>
                <li>Affiliated companies within our corporate family</li>
                <li>Legal authorities when required by law or to protect our rights</li>
              </ul>
              <p>
                We do not sell your personal information to third parties.
              </p>

              <h2>Your Choices and Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data (subject to certain exceptions)</li>
                <li>Restriction or objection to certain processing activities</li>
                <li>Data portability to transfer your data to another service</li>
                <li>Withdrawal of consent (where processing is based on consent)</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided at the end of this policy.
              </p>

              <h2>Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>

              <h2>International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place for such transfers.
              </p>

              <h2>Retention of Information</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <address>
                EcoFilament Privacy Team<br />
                1234 Innovation Way<br />
                San Francisco, CA 94107<br />
                Email: privacy@ecofilament.com<br />
                Phone: (555) 123-4567
              </address>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}