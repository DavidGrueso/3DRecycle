export default function SpecificationsSection() {
  const specifications = [
    { label: "Dimensions", value: "45cm × 30cm × 35cm" },
    { label: "Weight", value: "12.5kg" },
    { label: "Power", value: "100-240V, 400W" },
    { label: "Filament Diameter", value: "1.75mm / 2.85mm (selectable)" },
    { label: "Diameter Accuracy", value: "±0.03mm" },
    { label: "Production Rate", value: "0.5-1.2kg/day" },
    { label: "Materials", value: "PET, PETG, HDPE, PP, ABS" },
    { label: "Interface", value: "7\" Touchscreen" },
    { label: "Connectivity", value: "Wi-Fi, Bluetooth, USB-C" }
  ];

  return (
    <section id="specifications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-semibold">Technical specifications.</h2>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Engineered for performance, built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1623275404693-51822af201cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="EcoFilament machine specifications" 
              className="product-image rounded-2xl shadow-xl" 
            />
          </div>

          <div className="animate-on-scroll">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-2xl font-semibold">EcoFilament Machine</h3>
                <p className="text-gray-500 mt-2">Technical Specifications</p>
              </div>
              <div className="divide-y divide-gray-100">
                {specifications.map((spec, index) => (
                  <div key={index} className="grid grid-cols-2 p-6">
                    <div className="font-medium">{spec.label}</div>
                    <div>{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
