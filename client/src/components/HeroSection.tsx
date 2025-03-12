import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            <span className="text-primary">Recycling.</span> Reimagined.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl text-gray-500 max-w-3xl"
          >
            Transform plastic waste into premium 3D printing filament with revolutionary precision.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => scrollToSection("overview")}
              className="px-8 py-4 text-sm font-medium rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition"
            >
              Learn more
            </button>
            <button 
              onClick={() => scrollToSection("buy")}
              className="px-8 py-4 text-sm font-medium rounded-full bg-primary text-white hover:bg-primary/90 hover:shadow-md transition"
            >
              Buy EcoFilament Machine
            </button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-full max-w-4xl"
      >
        <img 
          src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
          alt="EcoFilament Machine" 
          className="w-full product-image"
        />
      </motion.div>
    </section>
  );
}

// Add the custom product image styling
const style = document.createElement('style');
style.textContent = `
  .product-image {
    filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.1));
    transition: transform 0.5s ease, filter 0.5s ease;
  }
  .product-image:hover {
    transform: scale(1.02) translateY(-5px);
    filter: drop-shadow(0 25px 35px rgba(0, 0, 0, 0.15));
  }
`;
document.head.appendChild(style);
