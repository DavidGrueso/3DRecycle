import { Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';

export default function BuySection() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isAddingStandard, setIsAddingStandard] = useState(false);
  const [isAddingPro, setIsAddingPro] = useState(false);

  const standardFeatures = t("standardFeatures", { returnObjects: true }) as string[];
  const proFeatures = t("proFeatures", { returnObjects: true }) as string[];

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
        title: t("addToCart"),
        description: `EcoFilament ${plan === "standard" ? t("standardPlan") : t("proPlan")} ${t("addedToCart")}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: t("errorAddingToCart"),
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
          <h2 className="text-3xl md:text-5xl font-semibold">{t("getEcoFilament")}</h2>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            {t("recyclingRevolution")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 animate-on-scroll"
          >
            <h3 className="text-2xl font-semibold mb-4">{t("standardPlan")}</h3>
            <div className="text-4xl font-bold mb-6">{t("priceStandard")}</div>
            <ul className="space-y-3 mb-8">
              {Array.isArray(standardFeatures) && standardFeatures.map((feature: string, index: number) => (
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
              {isAddingStandard ? t("adding") : t("addToCart")}
            </button>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-50 rounded-2xl border border-primary shadow-lg p-8 animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-2">{t("mostPopular")}</div>
            <h3 className="text-2xl font-semibold mb-4">{t("proPlan")}</h3>
            <div className="text-4xl font-bold mb-6">{t("pricePro")}</div>
            <ul className="space-y-3 mb-8">
              {Array.isArray(proFeatures) && proFeatures.map((feature: string, index: number) => (
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
              {isAddingPro ? t("adding") : t("addToCart")}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
