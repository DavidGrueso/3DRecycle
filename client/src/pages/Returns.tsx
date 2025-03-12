import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Returns() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
      <Header />
      <main>
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h1 className="text-3xl md:text-5xl font-semibold">Returns & Refunds</h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
                Simple, hassle-free returns. We stand behind our products 100%.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 mb-16">
              <h2 className="text-2xl font-semibold mb-6">Our Return Policy</h2>
              <p className="text-gray-500 mb-6">
                We want you to be completely satisfied with your EcoFilament machine. If you're not entirely happy with your purchase, we're here to help.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-primary text-4xl font-bold mb-2">60</div>
                  <p className="font-medium">Day Return Window</p>
                  <p className="text-gray-500 text-sm mt-2">
                    From date of delivery
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-primary text-4xl font-bold mb-2">100%</div>
                  <p className="font-medium">Satisfaction Guarantee</p>
                  <p className="text-gray-500 text-sm mt-2">
                    No questions asked
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-primary text-4xl font-bold mb-2">Free</div>
                  <p className="font-medium">Return Shipping</p>
                  <p className="text-gray-500 text-sm mt-2">
                    We cover return costs
                  </p>
                </div>
              </div>
              
              <p className="text-gray-500">
                If for any reason you're not completely satisfied with your EcoFilament machine, you can return it within 60 days of delivery for a full refund of the purchase price. We believe in our product so much that we offer this guarantee with absolutely no restocking fees.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">How To Return Your Machine</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h3 className="font-medium">Initiate Your Return</h3>
                      <p className="text-gray-500">Contact our support team or log into your account to start the return process.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h3 className="font-medium">Receive Return Label</h3>
                      <p className="text-gray-500">We'll email you a prepaid return shipping label for your convenience.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h3 className="font-medium">Package Your Return</h3>
                      <p className="text-gray-500">Repack the machine in its original packaging if possible, or contact us for packaging assistance.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
                    <div>
                      <h3 className="font-medium">Send & Track</h3>
                      <p className="text-gray-500">Drop off your package at any carrier location and track your return through your account.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-semibold mb-6">Return Policy FAQ</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What condition should the product be in for returns?</AccordionTrigger>
                  <AccordionContent>
                    We accept returns of EcoFilament machines that are in resalable condition. While we understand that you'll need to test the machine, please try to keep all original packaging materials. The machine should be free from excessive wear and damage beyond normal testing use. All accessories, documentation, and free items that came with the purchase must be included with your return.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How long will it take to receive my refund?</AccordionTrigger>
                  <AccordionContent>
                    Once we receive your returned machine, our team will inspect it within 1-2 business days. After inspection, refunds are typically processed within 3-5 business days. The time it takes for the refund to appear in your account depends on your payment method and financial institution:
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500">
                      <li>Credit cards: 2-7 business days</li>
                      <li>Debit cards: 5-10 business days</li>
                      <li>PayPal: 1-3 business days</li>
                      <li>Bank transfers: 5-7 business days</li>
                    </ul>
                    You'll receive email confirmation once your refund has been processed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What if my machine arrived damaged?</AccordionTrigger>
                  <AccordionContent>
                    If your EcoFilament machine arrived damaged, please contact us immediately (within 48 hours of delivery) with photos of the damage to both the packaging and the product. Do not return damaged products without contacting us first. We'll provide special instructions and arrange either a replacement or refund. Shipping damage claims require documentation to process properly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I exchange my machine instead of returning it?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer exchanges if you'd like to switch from the Standard to the Pro model (or vice versa). For upgrades, we'll simply charge the price difference. For downgrades, we'll refund the difference. To arrange an exchange, contact our customer support team with your order number and specify which model you'd like to exchange for.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What if I don't have the original packaging?</AccordionTrigger>
                  <AccordionContent>
                    While original packaging is preferred, we understand it's not always possible to keep it. If you no longer have the original packaging, please secure the machine in a sturdy box with appropriate padding to prevent damage during transit. Contact our support team for specific packaging guidelines. Please note that the machine must still arrive back to us in good condition for a full refund.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Refund Options</h2>
                <p className="text-gray-500 mb-6">
                  We offer several convenient refund methods:
                </p>
                <ul className="space-y-4">
                  {[
                    { title: "Original Payment Method", description: "Refunded to the same card or account used for purchase" },
                    { title: "Store Credit", description: "Get 110% of your purchase value as store credit for future purchases" },
                    { title: "Gift Card", description: "Receive the refund as a digital gift card that can be used or transferred" }
                  ].map((option, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">✓</div>
                      <div>
                        <h3 className="font-medium">{option.title}</h3>
                        <p className="text-gray-500 text-sm">{option.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Exceptions</h2>
                <p className="text-gray-500 mb-4">
                  While we strive to make our return process as accommodating as possible, there are a few exceptions:
                </p>
                <ul className="space-y-3 text-gray-500">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Consumable accessories (filters, specific replacement parts) that have been opened</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Machines that have been heavily modified or customized beyond factory specifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Returns requested after the 60-day return window has elapsed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Machines damaged due to improper use or negligence (although warranty may still apply)</span>
                  </li>
                </ul>
                <p className="text-gray-500 mt-4 text-sm">
                  If you have questions about whether your situation qualifies for our return policy, please contact our support team.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
                <p className="text-gray-500 mb-6">
                  Our support team is happy to help with any return or refund questions.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <button className="px-6 py-3 bg-primary text-white rounded-full">Contact Support</button>
                  <button className="px-6 py-3 border border-gray-300 rounded-full">View Full Policy</button>
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