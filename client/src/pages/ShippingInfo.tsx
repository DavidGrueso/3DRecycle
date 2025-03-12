import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ShippingInfo() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
      <Header />
      <main>
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h1 className="text-3xl md:text-5xl font-semibold">Shipping Information</h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
                Everything you need to know about our shipping policies and delivery times.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
              >
                <h3 className="text-xl font-semibold mb-3">Standard Shipping</h3>
                <p className="text-gray-500 mb-2">
                  7-10 business days
                </p>
                <p className="text-xl font-semibold text-primary">Free</p>
                <p className="text-gray-500 mt-4 text-sm">
                  Available for all orders within the contiguous United States
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
              >
                <h3 className="text-xl font-semibold mb-3">Express Shipping</h3>
                <p className="text-gray-500 mb-2">
                  3-5 business days
                </p>
                <p className="text-xl font-semibold text-primary">$29.99</p>
                <p className="text-gray-500 mt-4 text-sm">
                  Available for all orders within the contiguous United States
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
              >
                <h3 className="text-xl font-semibold mb-3">Priority Shipping</h3>
                <p className="text-gray-500 mb-2">
                  1-2 business days
                </p>
                <p className="text-xl font-semibold text-primary">$59.99</p>
                <p className="text-gray-500 mt-4 text-sm">
                  Available for all orders within the contiguous United States
                </p>
              </motion.div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-semibold mb-6">International Shipping</h2>
              <p className="text-gray-500 mb-6">
                We're proud to ship the EcoFilament machine to customers worldwide. International shipping rates and delivery times vary by location.
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shipping Cost</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Time</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Canada</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$49.99</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10-14 business days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">European Union</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$69.99</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14-21 business days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">United Kingdom</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$69.99</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14-21 business days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Australia/New Zealand</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$89.99</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21-28 business days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Other Regions</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$99.99</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21-35 business days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-500 mt-6 text-sm">
                Please note that international orders may be subject to import duties, taxes, and customs clearance fees imposed by the destination country. These charges are the responsibility of the recipient and are not included in our shipping fees.
              </p>
            </div>

            <div className="space-y-8 mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Tracking Your Order</h2>
                <p className="text-gray-500">
                  Once your order ships, you'll receive a confirmation email with your tracking number. You can track your package at any time by:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500">
                  <li>Clicking the tracking link in your shipping confirmation email</li>
                  <li>Logging into your account and viewing your order history</li>
                  <li>Contacting our customer support team with your order number</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Shipping Restrictions</h2>
                <p className="text-gray-500">
                  Due to shipping regulations and logistical constraints, we currently do not ship to the following regions:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500">
                  <li>Antarctica</li>
                  <li>Sanctioned countries</li>
                  <li>Remote island territories without regular postal service</li>
                </ul>
                <p className="text-gray-500 mt-4">
                  If you're in a region not listed but are experiencing difficulties placing an order, please contact our customer support team for assistance.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Need More Information?</h2>
                <p className="text-gray-500 mb-6">
                  Our customer service team is happy to answer any shipping related questions.
                </p>
                <button className="px-6 py-3 bg-primary text-white rounded-full">Contact Support</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}