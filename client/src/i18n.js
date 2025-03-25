import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "overview": "Overview",
      "features": "Features",
      "specifications": "Tech Specs",
      "faq": "FAQ",
      "contact": "Contact",
      "products": "Products",
      "buyNow": "Buy Now",
      "myAccount": "My Account",
      "shoppingCart": "Shopping Cart",
      "ecoFilamentStandard": "EcoFilament Standard",
      "ecoFilamentPro": "EcoFilament Pro",
      "ecoFilamentIndustrial": "EcoFilament Industrial",
      "getEcoFilament": "Get EcoFilament.",
      "recyclingRevolution": "Be part of the recycling revolution today.",
      "standardPlan": "EcoFilament Standard",
      "proPlan": "EcoFilament Pro",
      "mostPopular": "MOST POPULAR",
      "addToCart": "Add to Cart",
      "adding": "Adding...",
      "priceStandard": "$1,999",
      "pricePro": "$2,499",
      "standardFeatures": [
        "EcoFilament Machine",
        "1-year warranty",
        "5 empty spools",
        "Basic material starter kit",
        "Free shipping"
      ],
      "proFeatures": [
        "EcoFilament Machine",
        "3-year extended warranty",
        "10 empty spools",
        "Advanced material kit with colorants",
        "Priority customer support",
        "Free shipping + express option"
      ],
      "addedToCart": "has been added to your cart.",
      "errorAddingToCart": "There was an error adding the item to your cart."
    }
  },
  es: {
    translation: {
      "overview": "Resumen",
      "features": "Características",
      "specifications": "Especificaciones Técnicas",
      "faq": "Preguntas Frecuentes",
      "contact": "Contacto",
      "products": "Productos",
      "buyNow": "Comprar Ahora",
      "myAccount": "Mi Cuenta",
      "shoppingCart": "Carrito de Compras",
      "ecoFilamentStandard": "EcoFilamento Estándar",
      "ecoFilamentPro": "EcoFilamento Pro",
      "ecoFilamentIndustrial": "EcoFilamento Industrial",
      "getEcoFilament": "Consigue EcoFilament.",
      "recyclingRevolution": "Sé parte de la revolución del reciclaje hoy.",
      "standardPlan": "EcoFilamento Estándar",
      "proPlan": "EcoFilamento Pro",
      "mostPopular": "MÁS POPULAR",
      "addToCart": "Añadir al carrito",
      "adding": "Añadiendo...",
      "priceStandard": "$1,999",
      "pricePro": "$2,499",
      "standardFeatures": [
        "Máquina EcoFilament",
        "Garantía de 1 año",
        "5 bobinas vacías",
        "Kit de materiales básicos",
        "Envío gratis"
      ],
      "proFeatures": [
        "Máquina EcoFilament",
        "Garantía extendida de 3 años",
        "10 bobinas vacías",
        "Kit de materiales avanzados con colorantes",
        "Soporte prioritario al cliente",
        "Envío gratis + opción exprés"
      ],
      "addedToCart": "ha sido añadido a tu carrito.",
      "errorAddingToCart": "Hubo un error al añadir el artículo a tu carrito."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;