import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, ShoppingCart, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    { id: "contact", label: "Contact" },
  ];
  
  // Product versions
  const productVersions = [
    { id: "standard", label: "EcoFilament Standard", path: "/products/standard" },
    { id: "pro", label: "EcoFilament Pro", path: "/products/pro" },
    { id: "industrial", label: "EcoFilament Industrial", path: "/products/industrial" }
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
            
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium hover:text-primary transition cursor-pointer flex items-center">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {productVersions.map((product) => (
                  <DropdownMenuItem key={product.id} asChild>
                    <Link href={product.path} className="w-full cursor-pointer">
                      {product.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Account Button */}
            <Link href="/account" className="hidden md:flex text-gray-700 hover:text-primary transition">
              <User className="h-5 w-5" />
            </Link>
            
            {/* Cart Button */}
            <Link href="/cart" className="hidden md:flex text-gray-700 hover:text-primary transition">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            
            {/* Buy Now Button */}
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
                  
                  {/* Products in mobile menu */}
                  <div className="py-2">
                    <p className="text-base font-medium mb-2">Products</p>
                    <div className="pl-4 space-y-2">
                      {productVersions.map((product) => (
                        <Link
                          key={product.id}
                          href={product.path}
                          className="block text-sm py-1 text-gray-600 hover:text-primary transition"
                          onClick={() => {
                            document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                          }}
                        >
                          {product.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link 
                      href="/account"
                      className="flex items-center py-2 text-base font-medium hover:text-primary transition"
                      onClick={() => {
                        document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                      }}
                    >
                      <User className="h-5 w-5 mr-2" />
                      My Account
                    </Link>
                    
                    <Link 
                      href="/cart"
                      className="flex items-center py-2 text-base font-medium hover:text-primary transition"
                      onClick={() => {
                        document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                      }}
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Shopping Cart
                    </Link>
                  </div>
                  
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
