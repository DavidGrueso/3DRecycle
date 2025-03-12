import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section id="overview" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-semibold">A new era of sustainable making.</h2>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            EcoFilament transforms plastic bottles into high-quality 3D printing filament, reducing waste while creating endless possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">From Waste to Creation</h3>
            <p className="text-gray-500 mb-6">
              The EcoFilament machine processes standard PET plastic bottles to create premium 3D printing filament with professional-grade consistency. Each bottle gives a new life to innovation.
            </p>
            <button className="flex items-center text-primary w-fit group">
              <span className="font-medium">Watch the transformation</span>
              <PlayCircle className="ml-2 group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          <div className="animate-on-scroll">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9 bg-black/5 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1605279591993-35850a03073e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Machine in operation" 
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-white hover:scale-105 transition-all">
                    <PlayCircle className="text-primary h-12 w-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
