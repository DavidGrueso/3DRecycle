import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
      <Header />
      <main>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h1 className="text-3xl md:text-5xl font-semibold">Our Mission</h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
                Transforming waste plastic into opportunity while reducing environmental impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="animate-on-scroll">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Driving Sustainable Innovation</h2>
                <p className="text-gray-500 mb-6">
                  Our mission is to revolutionize how the world thinks about plastic waste by creating technology 
                  that transforms it from an environmental problem into a valuable resource for creation.
                </p>
                <p className="text-gray-500">
                  We believe that giving people the tools to recycle plastic locally and turn it into something 
                  useful has the power to create meaningful change in how we consume and dispose of plastics.
                </p>
              </div>
              
              <div className="animate-on-scroll">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Sustainability concept" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-16 animate-on-scroll">
              <blockquote className="text-2xl italic text-center">
                "Our vision is a world where plastic is never wasted, but instead becomes the material 
                for new innovation and creation."
              </blockquote>
            </div>

            <div className="mb-16 animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Environmental Impact Goals</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
                >
                  <div className="text-primary text-4xl font-bold mb-4">1B</div>
                  <h3 className="text-xl font-semibold mb-3">Bottles Diverted</h3>
                  <p className="text-gray-500">
                    Our goal is to divert 1 billion plastic bottles from landfills and oceans by 2030.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
                >
                  <div className="text-primary text-4xl font-bold mb-4">50%</div>
                  <h3 className="text-xl font-semibold mb-3">CO₂ Reduction</h3>
                  <p className="text-gray-500">
                    Reduce carbon emissions from filament production by 50% compared to traditional manufacturing.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
                >
                  <div className="text-primary text-4xl font-bold mb-4">10K</div>
                  <h3 className="text-xl font-semibold mb-3">Local Recyclers</h3>
                  <p className="text-gray-500">
                    Empower 10,000 local recycling micro-enterprises in communities around the world.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="animate-on-scroll order-2 md:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Our commitment" 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="animate-on-scroll order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Commitment</h2>
                <p className="text-gray-500 mb-6">
                  We believe in the circular economy, where materials are reused and recycled instead of discarded. 
                  The EcoFilament machine is our first step towards creating a more sustainable future.
                </p>
                <p className="text-gray-500">
                  Our commitment goes beyond products. We pledge 5% of our profits to ocean cleanup initiatives 
                  and educational programs about plastic waste and recycling.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}