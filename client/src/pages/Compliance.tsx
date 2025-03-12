import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Compliance() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
      <Header />
      <main>
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h1 className="text-3xl md:text-5xl font-semibold">Compliance & Certifications</h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
                Our commitment to safety, quality, and environmental responsibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="animate-on-scroll">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Standards</h2>
                <p className="text-gray-500 mb-6">
                  At EcoFilament, we hold ourselves to the highest standards of quality, safety, and environmental responsibility. Our products are designed and manufactured to meet or exceed all relevant regulatory requirements in the markets we serve.
                </p>
                <p className="text-gray-500">
                  We are committed to continuous improvement and regularly review our compliance processes to ensure we remain at the forefront of industry best practices.
                </p>
              </div>
              
              <div className="animate-on-scroll">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Quality testing lab" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-center">Certifications & Compliance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
                >
                  <div className="h-16 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Safety Standards</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-500">
                    <li>UL Certified (UL 60335-1)</li>
                    <li>CE Marking for European Market</li>
                    <li>CAN/CSA-C22.2 No. 60335-1 (Canada)</li>
                    <li>IEC 60335-1 (International)</li>
                    <li>RCM Mark (Australia/New Zealand)</li>
                  </ul>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
                >
                  <div className="h-16 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Environmental Compliance</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-500">
                    <li>RoHS Compliant (EU Directive 2011/65/EU)</li>
                    <li>REACH Compliant (EC 1907/2006)</li>
                    <li>Energy Star® Certified</li>
                    <li>California Proposition 65 Compliant</li>
                    <li>WEEE Registration for proper disposal</li>
                  </ul>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
                >
                  <div className="h-16 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="M8 12h8"></path>
                      <path d="M12 8v8"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Quality Management</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-500">
                    <li>ISO 9001:2015 Certified</li>
                    <li>ISO 14001:2015 Certified</li>
                    <li>Six Sigma Manufacturing Processes</li>
                    <li>100% Final Product Testing</li>
                    <li>Quality Assurance Documented Procedures</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-semibold mb-6">Materials & Sustainability</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Sustainable Materials</h3>
                  <p className="text-gray-500">
                    Our EcoFilament machine is designed with sustainability at its core. We've carefully selected materials that minimize environmental impact while maintaining durability and performance:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500">
                    <li>50% of plastic components made from recycled materials</li>
                    <li>Aluminum components from facilities using renewable energy</li>
                    <li>VOC-free paints and finishes</li>
                    <li>Recyclable packaging made from 80% post-consumer waste</li>
                    <li>Soy-based inks for all printed materials</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Responsible Manufacturing</h3>
                  <p className="text-gray-500">
                    Our manufacturing facilities maintain the highest standards of environmental responsibility:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500">
                    <li>Solar-powered production facilities</li>
                    <li>Zero waste to landfill operations</li>
                    <li>Closed-loop water recycling systems</li>
                    <li>Carbon-neutral shipping program</li>
                    <li>Regular third-party sustainability audits</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Regulatory Information</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Regulations</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">United States</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>FCC Part 15 Class B</li>
                          <li>UL 60335-1</li>
                          <li>California Proposition 65</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Compliant</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">European Union</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>CE Marking</li>
                          <li>Low Voltage Directive 2014/35/EU</li>
                          <li>EMC Directive 2014/30/EU</li>
                          <li>RoHS Directive 2011/65/EU</li>
                          <li>WEEE Directive 2012/19/EU</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Compliant</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Canada</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>ICES-003</li>
                          <li>CAN/CSA-C22.2 No. 60335-1</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Compliant</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Australia/New Zealand</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>RCM Mark</li>
                          <li>AS/NZS 60335.1</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Compliant</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Need Compliance Documentation?</h2>
                <p className="text-gray-500 mb-6">
                  For detailed compliance information or certification documentation, please contact our compliance team.
                </p>
                <button className="px-6 py-3 bg-primary text-white rounded-full">Contact Compliance Team</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}