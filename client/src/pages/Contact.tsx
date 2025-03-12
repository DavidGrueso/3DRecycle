import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function Contact() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
      <Header />
      <main>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h1 className="text-3xl md:text-5xl font-semibold">Contact Us</h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
                Have questions about EcoFilament? We're here to help.
              </p>
            </div>
            
            <ContactSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}