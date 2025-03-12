import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

export default function Warranty() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
      <Header />
      <main>
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h1 className="text-3xl md:text-5xl font-semibold">Warranty Information</h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
                Our commitment to quality and your peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="animate-on-scroll">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Warranty Promise</h2>
                <p className="text-gray-500 mb-6">
                  Every EcoFilament machine comes with a comprehensive warranty that reflects our confidence in the quality and durability of our products. We stand behind our technology and are committed to ensuring your complete satisfaction.
                </p>
                <p className="text-gray-500">
                  Our warranty covers all manufacturer defects and ensures your machine performs to our exacting standards. Should any issues arise, our dedicated support team is ready to assist you promptly and effectively.
                </p>
              </div>
              
              <div className="animate-on-scroll">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Quality assurance" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
              >
                <h3 className="text-xl font-semibold mb-3">Standard Warranty</h3>
                <div className="text-primary text-4xl font-bold mb-4">1 Year</div>
                <p className="text-gray-500">
                  Our standard warranty includes:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500">
                  <li>All electronic components</li>
                  <li>Processing mechanism</li>
                  <li>Heating elements</li>
                  <li>Control systems</li>
                  <li>Operational software</li>
                </ul>
                <p className="text-gray-500 mt-4">
                  <span className="font-semibold">Included with:</span> EcoFilament Standard model
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl border border-primary shadow-lg p-8"
              >
                <h3 className="text-xl font-semibold mb-3">Extended Warranty</h3>
                <div className="text-primary text-4xl font-bold mb-4">3 Years</div>
                <p className="text-gray-500">
                  Our extended warranty includes everything in the standard warranty, plus:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500">
                  <li>Annual maintenance check</li>
                  <li>Priority support</li>
                  <li>One-time accidental damage protection</li>
                  <li>Free replacement parts</li>
                  <li>Software updates for life</li>
                </ul>
                <p className="text-gray-500 mt-4">
                  <span className="font-semibold">Included with:</span> EcoFilament Pro model
                </p>
              </motion.div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-semibold mb-6">Warranty FAQ</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I register my warranty?</AccordionTrigger>
                  <AccordionContent>
                    Your warranty is automatically activated when you purchase your EcoFilament machine. However, we recommend registering your product on our website to streamline any potential warranty claims. To register, simply create an account, enter your machine's serial number (found on the bottom of the unit), and upload your proof of purchase.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What isn't covered by the warranty?</AccordionTrigger>
                  <AccordionContent>
                    Our warranty does not cover:
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500">
                      <li>Damage from improper use or failure to follow operating instructions</li>
                      <li>Normal wear and tear of consumable parts (including filters and certain seals)</li>
                      <li>Cosmetic damage that doesn't affect functionality</li>
                      <li>Damage from unauthorized modifications or repairs</li>
                      <li>Damage from external factors like power surges or liquid exposure</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I make a warranty claim?</AccordionTrigger>
                  <AccordionContent>
                    To make a warranty claim:
                    <ol className="list-decimal pl-5 mt-2 space-y-1 text-gray-500">
                      <li>Contact our support team via email, phone, or through your account portal</li>
                      <li>Provide your order number, machine serial number, and a description of the issue</li>
                      <li>Our technical team will troubleshoot with you to determine if repair or replacement is needed</li>
                      <li>If required, we'll arrange shipping for repair or replacement (at no cost to you for valid warranty claims)</li>
                    </ol>
                    Most claims are processed within 1-2 business days.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I purchase additional warranty coverage?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer extended warranty options for purchase:
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500">
                      <li>1-Year Extension: $99.99</li>
                      <li>2-Year Extension: $179.99</li>
                      <li>3-Year Extension: $249.99</li>
                    </ul>
                    Extended warranties can be purchased at checkout or within 30 days of your original purchase. These extensions begin after your included warranty period ends.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Is my warranty transferable if I sell my machine?</AccordionTrigger>
                  <AccordionContent>
                    Yes, our warranty stays with the machine, not the original purchaser. If you sell or gift your EcoFilament machine, the remaining warranty period transfers to the new owner. The new owner should contact our customer service to update the registration information.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-semibold mb-4">Our Warranty Process</h2>
                <div className="space-y-6 mt-6">
                  <div className="flex gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h3 className="font-medium">Contact Support</h3>
                      <p className="text-gray-500">Reach out to our team with your issue</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h3 className="font-medium">Troubleshooting</h3>
                      <p className="text-gray-500">We'll work with you to identify the problem</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h3 className="font-medium">Solution</h3>
                      <p className="text-gray-500">Repair or replace as needed</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
                    <div>
                      <h3 className="font-medium">Follow Up</h3>
                      <p className="text-gray-500">We'll ensure you're satisfied with the resolution</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">Extended Protection Plan</h3>
                  <p className="text-gray-500 mb-6">
                    For ultimate peace of mind, consider our Premium Protection Plan, which includes:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "5-year comprehensive coverage",
                      "48-hour replacement guarantee",
                      "Annual maintenance service",
                      "Unlimited technical support",
                      "Free upgrades to newer models (after 3 years)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-primary text-white rounded-full flex items-center justify-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Need Warranty Assistance?</h2>
                <p className="text-gray-500 mb-6">
                  Our support team is ready to help with any warranty questions or claims.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <button className="px-6 py-3 bg-primary text-white rounded-full">Contact Warranty Support</button>
                  <button className="px-6 py-3 border border-gray-300 rounded-full">Download Warranty PDF</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}