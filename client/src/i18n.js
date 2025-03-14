// filepath: /c:/Users/dgruesoc/Desktop/FunFridays/plasticM/3DRecycle/client/src/i18n.js
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
      "ecoFilamentIndustrial": "EcoFilament Industrial"
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
      "ecoFilamentIndustrial": "EcoFilamento Industrial"
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