export default function ImpactSection() {
  const impacts = [
    {
      value: "1kg",
      title: "From 25 Bottles",
      description: "Each kilogram of filament produced diverts approximately 25 PET bottles from landfills or oceans."
    },
    {
      value: "70%",
      title: "Energy Efficient",
      description: "Requires up to 70% less energy compared to producing new filament from raw petroleum materials."
    },
    {
      value: "2 tons",
      title: "Annual Impact",
      description: "A single machine can divert over 2 tons of plastic waste per year with regular use."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-semibold">Making a difference.</h2>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Every EcoFilament machine can transform thousands of plastic bottles into useful material instead of waste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-primary text-5xl font-bold mb-4">{impact.value}</div>
              <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
              <p className="text-gray-500">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
