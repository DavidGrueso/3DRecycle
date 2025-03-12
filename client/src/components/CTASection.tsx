export default function CTASection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 animate-on-scroll">
          Join the recycling revolution.
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-on-scroll">
          Transform waste into opportunity. Be part of the solution with EcoFilament.
        </p>
        <button
          onClick={() => scrollToSection("buy")}
          className="inline-block px-8 py-4 bg-primary text-white text-lg font-medium rounded-full hover:bg-primary/90 transition animate-on-scroll"
        >
          Get EcoFilament Now
        </button>
      </div>
    </section>
  );
}
