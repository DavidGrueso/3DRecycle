import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const companyLinks = [
    { label: "About Us", href: "/about", isPage: true },
    { label: "Our Mission", href: "/mission", isPage: true },
    { label: "Sustainability", href: "#", isPage: false },
    { label: "Careers", href: "#", isPage: false },
    { label: "Press", href: "#", isPage: false }
  ];

  const supportLinks = [
    { label: "Help Center", href: "/help-center", isPage: true, isSection: false },
    { label: "Contact Us", href: "/contact", isPage: true, isSection: false },
    { label: "Shipping Info", href: "/shipping-info", isPage: true, isSection: false },
    { label: "Warranty", href: "/warranty", isPage: true, isSection: false },
    { label: "Returns", href: "/returns", isPage: true, isSection: false }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy", isPage: true },
    { label: "Terms of Service", href: "/terms-of-service", isPage: true },
    { label: "Cookie Policy", href: "/cookie-policy", isPage: true },
    { label: "Compliance", href: "/compliance", isPage: true }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-xl font-semibold tracking-tight">
              <span className="text-primary">Eco</span>Filament
            </Link>
            <p className="mt-4 text-gray-500">
              Transforming plastic waste into innovative solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-gray-500 hover:text-primary transition"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {link.isPage ? (
                    <Link href={link.href} className="text-gray-500 hover:text-primary transition">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-gray-500 hover:text-primary transition">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  {link.isPage ? (
                    <Link href={link.href} className="text-gray-500 hover:text-primary transition">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-gray-500 hover:text-primary transition">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  {link.isPage ? (
                    <Link href={link.href} className="text-gray-500 hover:text-primary transition">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-gray-500 hover:text-primary transition">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} EcoFilament. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
