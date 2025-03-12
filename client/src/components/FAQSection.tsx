import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What types of plastic can I use?",
      answer: "The EcoFilament machine can process PET, PETG, HDPE, PP, and ABS plastics. Standard PET bottles (like water or soda bottles) work best and produce the highest quality filament."
    },
    {
      question: "How much filament can I make per bottle?",
      answer: "On average, one standard 500ml PET bottle can produce approximately 40 grams of filament. Results may vary depending on the thickness and size of the bottle."
    },
    {
      question: "What's the quality of the filament?",
      answer: "Our filament matches commercial-grade quality with ±0.03mm diameter accuracy. It's suitable for all standard FDM/FFF 3D printers and produces high-quality prints."
    },
    {
      question: "Do I need any special skills to operate it?",
      answer: "No special skills are required. The machine features an intuitive touchscreen interface, and our companion app guides you through the entire process with preset profiles for different materials."
    },
    {
      question: "How long does it take to produce filament?",
      answer: "The machine produces filament at a rate of 0.5-1.2kg per day, depending on the selected material and quality settings. A typical 1kg spool can be produced in 12-24 hours."
    },
    {
      question: "Is it noisy or smelly?",
      answer: "The EcoFilament machine operates at under 45dB, quieter than a typical refrigerator. Our advanced filtration system eliminates odors, making it suitable for home or office use."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-semibold">Frequently asked questions.</h2>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Everything you need to know about the EcoFilament machine.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-semibold py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-500 text-lg py-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
