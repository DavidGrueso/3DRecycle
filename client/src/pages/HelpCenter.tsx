import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HelpCenter() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
      <Header />
      <main>
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h1 className="text-3xl md:text-5xl font-semibold">Help Center</h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
                Find answers to common questions about your EcoFilament machine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center"
              >
                <h3 className="text-xl font-semibold mb-3">Getting Started</h3>
                <p className="text-gray-500 mb-4">
                  Setup guides and first-time use
                </p>
                <button className="text-primary">View Guides</button>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center"
              >
                <h3 className="text-xl font-semibold mb-3">Troubleshooting</h3>
                <p className="text-gray-500 mb-4">
                  Fix common issues and problems
                </p>
                <button className="text-primary">View Solutions</button>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center"
              >
                <h3 className="text-xl font-semibold mb-3">Contact Support</h3>
                <p className="text-gray-500 mb-4">
                  Get personalized help
                </p>
                <button className="text-primary">Contact Us</button>
              </motion.div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I set up my EcoFilament machine?</AccordionTrigger>
                  <AccordionContent>
                    Setting up your EcoFilament machine is simple. Follow these steps:
                    <ol className="list-decimal pl-5 mt-2 space-y-2">
                      <li>Unbox your machine and remove all packaging materials</li>
                      <li>Place on a stable, level surface</li>
                      <li>Connect the power cable to a grounded outlet</li>
                      <li>Install the companion app on your smartphone</li>
                      <li>Follow the in-app setup wizard to complete configuration</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What types of plastic bottles can I use?</AccordionTrigger>
                  <AccordionContent>
                    The EcoFilament machine works with PET (polyethylene terephthalate) plastic bottles, which are the most common type used for beverages. Look for bottles with the recycling symbol #1. For best results, use clear bottles without colored tinting. The machine can process bottles ranging from 16oz (500ml) to 2-liter sizes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How much filament can I make from one bottle?</AccordionTrigger>
                  <AccordionContent>
                    On average, a standard 20oz (591ml) plastic bottle will produce approximately 8-10 grams of 3D printing filament. This varies slightly based on the exact bottle design and thickness. A typical 1kg spool of filament would require approximately 100-125 bottles.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How long does the conversion process take?</AccordionTrigger>
                  <AccordionContent>
                    The EcoFilament machine processes bottles at a rate of approximately 1 bottle every 10-15 minutes. This includes the entire process from bottle insertion to usable filament. The machine can be loaded with up to 5 bottles at once for continuous operation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What filament colors can I create?</AccordionTrigger>
                  <AccordionContent>
                    The EcoFilament machine comes with a color mixing system that allows you to create a wide range of filament colors. You can use the clear filament produced from transparent bottles, or add our eco-friendly colorant pellets (sold separately) to create custom colors. The app includes a color mixing guide to help you achieve specific shades.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Is maintenance required?</AccordionTrigger>
                  <AccordionContent>
                    Yes, regular maintenance will ensure optimal performance. We recommend cleaning the processing chamber every 50 bottles, replacing the air filter every 3 months, and performing a calibration check every 6 months. The app will remind you when maintenance is due and guide you through each procedure.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="animate-on-scroll">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
                <p className="text-gray-500 mb-6">
                  Our support team is ready to help you with any questions or issues.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <button className="px-6 py-3 bg-primary text-white rounded-full">Contact Support</button>
                  <button className="px-6 py-3 border border-gray-300 rounded-full">View Documentation</button>
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