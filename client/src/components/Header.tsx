import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, ShoppingCart, ChevronDown } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useCart();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Handle scroll effect for the header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items
  const navItems = [
    { id: "overview", label: t("overview") },
    { id: "features", label: t("features") },
    { id: "specifications", label: t("specifications") },
    { id: "contact", label: t("contact") },
    { id: "pro", label: t("EcoFilament Pro"), href: "/products/pro" } // Actualizamos este botón

  ];


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-100 ${isScrolled ? 'bg-white/70 backdrop-blur-md border-b border-gray-200/70' : 'bg-white/80'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              <span className="text-primary">Eco</span>Filament
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
                item.id === "pro" && item.href ? (
                  <Link
                    key={item.id}
                    href={item.href} // Redirige a la página del producto
                    className="text-sm font-medium hover:text-primary transition cursor-pointer relative nav-item"
                  >
                    {item.label}
                  </Link>
                ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:text-primary transition cursor-pointer relative nav-item"
              >
                {item.label}
              </button>
                )
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex space-x-2">
              <button onClick={() => changeLanguage('en')} className="text-sm font-medium hover:text-primary transition">EN</button>
              <button onClick={() => changeLanguage('es')} className="text-sm font-medium hover:text-primary transition">ES</button>
            </div>
            
            {/* Account Button */}
            <Link href="/account" className="hidden md:flex text-gray-700 hover:text-primary transition">
              <User className="h-5 w-5" />
            </Link>
            
            {/* Cart Button with Counter */}
            <Link href="/cart" className="hidden md:flex items-center text-gray-700 hover:text-primary transition relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Link>
            
            {/* Buy Now Button */}
            <button
              onClick={() => scrollToSection("buy")}
              className="hidden md:inline-flex text-sm font-medium px-5 py-2 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
            >
              {t("buyNow")}
            </button>
            
            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger className="md:hidden p-2">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                      }}
                      className="text-base py-2 font-medium hover:text-primary transition"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link 
                      href="/account"
                      className="flex items-center py-2 text-base font-medium hover:text-primary transition"
                      onClick={() => {
                        document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                      }}
                    >
                      <User className="h-5 w-5 mr-2" />
                      {t("myAccount")}
                    </Link>
                    
                    <Link 
                      href="/cart"
                      className="flex items-center py-2 text-base font-medium hover:text-primary transition"
                      onClick={() => {
                        document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                      }}
                    >
                      <div className="relative">
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        {cartCount > 0 && (
                          <Badge variant="destructive" className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center p-0 text-[10px]">
                            {cartCount}
                          </Badge>
                        )}
                      </div>
                      {t("shoppingCart")} {cartCount > 0 && `(${cartCount})`}
                    </Link>
                  </div>
                  
                  <button
                    onClick={() => {
                      scrollToSection("buy");
                      document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                    }}
                    className="mt-4 w-full text-sm font-medium px-5 py-2 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
                  >
                    {t("buyNow")}
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export function NavStyleProvider() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .nav-item {
        position: relative;
      }
      .nav-item::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 1px;
        background-color: currentColor;
        transition: width 0.3s ease;
      }
      .nav-item:hover::after {
        width: 100%;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return null;
}
