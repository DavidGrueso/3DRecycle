import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
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
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "specifications", label: "Tech Specs" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/70' : 'bg-white/80'}`}>
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
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:text-primary transition cursor-pointer relative nav-item"
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("buy")}
              className="hidden md:inline-flex text-sm font-medium px-5 py-2 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
            >
              Buy Now
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
                  <button
                    onClick={() => {
                      scrollToSection("buy");
                      document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                    }}
                    className="mt-4 w-full text-sm font-medium px-5 py-2 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
                  >
                    Buy Now
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

// Add the custom nav item styling
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
