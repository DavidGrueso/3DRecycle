import { Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function BuySection() {
  const { toast } = useToast();
  const [isAddingStandard, setIsAddingStandard] = useState(false);
  const [isAddingPro, setIsAddingPro] = useState(false);

  const standardFeatures = [
    "EcoFilament Machine",
    "1-year warranty",
    "5 empty spools",
    "Basic material starter kit",
    "Free shipping"
  ];

  const proFeatures = [
    "EcoFilament Machine",
    "3-year extended warranty",
    "10 empty spools",
    "Advanced material kit with colorants",
    "Priority customer support",
    "Free shipping + express option"
  ];

  const handleAddToCart = async (plan: string) => {
    if (plan === "standard") {
      setIsAddingStandard(true);
    } else {
      setIsAddingPro(true);
    }

    try {
      // Make API request to add to cart
      await apiRequest("POST", "/api/cart", { plan });
      
      toast({
        title: "Added to cart",
        description: `EcoFilament ${plan === "standard" ? "Standard" : "Pro"} has been added to your cart.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error adding the item to your cart. Please try again.",
        variant: "destructive",
      });
      console.error("Error adding to cart:", error);
    } finally {
      setIsAddingStandard(false);
      setIsAddingPro(false);
    }
  };

  return (
    <section id="buy" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-semibold">Get EcoFilament.</h2>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Be part of the recycling revolution today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 animate-on-scroll"
          >
            <h3 className="text-2xl font-semibold mb-4">EcoFilament Standard</h3>
            <div className="text-4xl font-bold mb-6">$1,999</div>
            <ul className="space-y-3 mb-8">
              {standardFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="rounded-full p-1 bg-primary/10 mt-1 mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleAddToCart("standard")}
              disabled={isAddingStandard}
              className="w-full py-4 bg-gray-900 text-white rounded-full hover:bg-black transition disabled:opacity-70"
            >
              {isAddingStandard ? "Adding..." : "Add to Cart"}
            </button>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-50 rounded-2xl border border-primary shadow-lg p-8 animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-2">MOST POPULAR</div>
            <h3 className="text-2xl font-semibold mb-4">EcoFilament Pro</h3>
            <div className="text-4xl font-bold mb-6">$2,499</div>
            <ul className="space-y-3 mb-8">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="rounded-full p-1 bg-primary/10 mt-1 mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleAddToCart("pro")}
              disabled={isAddingPro}
              className="w-full py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition disabled:opacity-70"
            >
              {isAddingPro ? "Adding..." : "Add to Cart"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
