import { Check } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Precision Extrusion System",
      description: "Our advanced thermal control and precision motor systems ensure consistently perfect filament diameter within ±0.03mm tolerance. Professional-grade results every time.",
      benefits: [
        "Advanced thermal monitoring",
        "Real-time diameter adjustment",
        "Multi-material compatibility"
      ],
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Precision extrusion system",
      reverse: false
    },
    {
      title: "Intelligent Processing",
      description: "Built-in sensors and AI-powered algorithms automatically adjust processing parameters based on input material quality, ensuring optimal output regardless of source plastic variations.",
      benefits: [
        "AI material analysis",
        "Automatic parameter adjustment",
        "Quality consistency assurance"
      ],
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Intelligent processing",
      reverse: true
    },
    {
      title: "Intuitive Control",
      description: "The sleek touchscreen interface and companion app provide complete control over every aspect of the process, with preset profiles for common materials and the ability to create custom settings.",
      benefits: [
        "7\" high-resolution touchscreen",
        "iOS and Android companion app",
        "Cloud storage for custom profiles"
      ],
      //image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Intuitive control interface",
      reverse: false
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-semibold">Designed for innovation.</h2>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Every aspect of the EcoFilament machine is meticulously engineered to deliver perfect results while minimizing environmental impact.
          </p>
        </div>

        {features.map((feature, index) => (
          <div key={index} className="mb-32 last:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={`${feature.reverse ? 'order-1 md:order-2' : 'order-2 md:order-1'} animate-on-scroll`}>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-500 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <div className="rounded-full p-1 bg-primary/10 mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`${feature.reverse ? 'order-2 md:order-1' : 'order-1 md:order-2'} animate-on-scroll`}>
                <img 
                  src={feature.image}
                  alt={feature.alt}
                  className="product-image rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
