import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
      <Header />
      <main>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h1 className="text-3xl md:text-5xl font-semibold">About Us</h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
                We're on a mission to transform plastic waste into innovative solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="animate-on-scroll">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-500 mb-6">
                  EcoFilament began in 2020 when our founder, an environmental engineer and 3D printing enthusiast, 
                  recognized the massive potential to address two critical issues: the global plastic waste crisis 
                  and the need for more sustainable materials in additive manufacturing.
                </p>
                <p className="text-gray-500">
                  After two years of research and development, the EcoFilament machine was born - a device capable 
                  of transforming ordinary plastic bottles into high-quality 3D printing filament, giving waste 
                  plastic a valuable second life.
                </p>
              </div>
              
              <div className="animate-on-scroll">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Our team" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="mb-16 animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
                >
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-gray-500">
                    We continuously push the boundaries of what's possible in recycling and 
                    additive manufacturing technology.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
                >
                  <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                  <p className="text-gray-500">
                    Environmental responsibility is at the core of everything we do, from our 
                    products to our operations.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
                >
                  <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                  <p className="text-gray-500">
                    We believe sustainable technology should be accessible to everyone, from hobbyists 
                    to professional manufacturers.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="animate-on-scroll order-2 md:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Our team collaborating" 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="animate-on-scroll order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Team</h2>
                <p className="text-gray-500 mb-6">
                  We're a passionate team of engineers, designers, environmental scientists, and 
                  manufacturing experts united by our commitment to sustainability and innovation.
                </p>
                <p className="text-gray-500">
                  Based in San Francisco with team members across the globe, we bring diverse 
                  perspectives and expertise to create technology that makes a meaningful impact 
                  on the planet.
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