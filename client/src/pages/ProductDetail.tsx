import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ShoppingCart } from "lucide-react";
import { Link, useRoute, useLocation } from "wouter";
import { useCart } from "@/lib/CartContext";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Product data for all product versions
const products = {
  "standard": {
    id: "standard",
    name: "EcoFilament Standard",
    tagline: "The Perfect Entry-Level Converter",
    price: 599,
    description: "The EcoFilament Standard is perfect for hobbyists and small businesses looking to start recycling plastic bottles into 3D printing filament. This compact model offers excellent quality at an affordable price.",
    features: [
      "Converts up to 3 plastic bottles per hour",
      "Creates 1.75mm standard filament",
      "Easy one-touch operation",
      "Compact design for home or small studio use",
      "12-month warranty",
      "Energy-efficient operation"
    ],
    specs: {
      "Dimensions": "18 × 12 × 15 inches",
      "Weight": "22 pounds",
      "Power": "120V, 300W",
      "Filament Diameter": "1.75mm ± 0.05mm",
      "Materials": "PET, PETG",
      "Conversion Rate": "Up to 3 bottles/hour",
      "Temperature Range": "160-240°C",
      "Noise Level": "<65 dB"
    },
    image: "/placeholder.svg",
    recommended: false
  },
  "pro": {
    id: "pro",
    name: "EcoFilament Pro",
    tagline: "Professional Performance for Dedicated Makers",
    price: 999,
    description: "Take your recycling capabilities to the next level with EcoFilament Pro. Designed for dedicated makers and small production environments with higher volume needs and professional-grade output.",
    features: [
      "Converts up to 7 plastic bottles per hour",
      "Dual filament sizes (1.75mm and 2.85mm)",
      "Touch screen control panel",
      "Advanced temperature monitoring",
      "WiFi connectivity for remote operation",
      "24-month warranty with extended options",
      "Automatic material detection",
      "Filament quality sensor"
    ],
    specs: {
      "Dimensions": "22 × 15 × 18 inches",
      "Weight": "35 pounds",
      "Power": "120-240V, 500W",
      "Filament Diameter": "1.75mm or 2.85mm ± 0.03mm",
      "Materials": "PET, PETG, HDPE, PP",
      "Conversion Rate": "Up to 7 bottles/hour",
      "Temperature Range": "160-280°C",
      "Noise Level": "<60 dB"
    },
    image: "/placeholder.svg",
    recommended: true
  },
  "industrial": {
    id: "industrial",
    name: "EcoFilament Industrial",
    tagline: "Commercial-Grade Recycling Solution",
    price: 2499,
    description: "The EcoFilament Industrial is our flagship model designed for businesses, schools, and manufacturing environments requiring high-volume, continuous filament production with exceptional precision.",
    features: [
      "Converts up to 20 plastic bottles per hour",
      "Multi-material processing capability",
      "Touchscreen interface with custom programming",
      "Cloud-based monitoring and analytics",
      "Automatic cleaning and maintenance cycles",
      "36-month comprehensive warranty",
      "Dedicated technical support line",
      "Multiple color masterbatch integration",
      "Continuous operation design"
    ],
    specs: {
      "Dimensions": "36 × 24 × 28 inches",
      "Weight": "78 pounds",
      "Power": "220-240V, 1200W",
      "Filament Diameter": "1.75mm/2.85mm/3.00mm ± 0.02mm",
      "Materials": "PET, PETG, HDPE, PP, ABS, PC",
      "Conversion Rate": "Up to 20 bottles/hour",
      "Temperature Range": "160-320°C",
      "Noise Level": "<70 dB"
    },
    image: "/placeholder.svg",
    recommended: false
  }
};

export default function ProductDetail() {
  // Get the product ID from the URL (standard, pro, or industrial)
  const [, params] = useRoute("/products/:id");
  const productId = params?.id || "standard";
  const [, setLocation] = useLocation();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  // Get the product data
  const product = products[productId as keyof typeof products] || products.standard;

  // Handle adding product to cart
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      model: product.specs["Filament Diameter"],
      price: product.price,
      image: product.image
    });
    
    toast({
      title: "Product added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  // Handle buy now - add to cart and go to checkout
  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      model: product.specs["Filament Diameter"],
      price: product.price,
      image: product.image
    });
    
    setLocation("/checkout");
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header />
      <main className="pt-24 pb-16">
        {/* Product hero section */}
        <section className="bg-gray-50 py-12 mb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    {product.name}
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">{product.tagline}</p>
                  <p className="text-gray-600 mb-8">{product.description}</p>
                  
                  <div className="flex items-baseline mb-8">
                    <span className="text-3xl font-bold">${product.price}</span>
                    <span className="ml-2 text-gray-500">USD</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <Button className="px-8" onClick={handleAddToCart}>
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </Button>
                    
                    <Button variant="outline" asChild>
                      <Link href="#features">Learn More</Link>
                    </Button>
                  </div>
                  
                  {product.recommended && (
                    <div className="mt-6 inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      <Check className="h-4 w-4 mr-1" /> Most Popular Choice
                    </div>
                  )}
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="aspect-square w-full flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features and specifications tabs */}
        <section id="features" className="container mx-auto px-4 max-w-6xl">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Technical Specifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                  <ul className="space-y-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Why Choose {product.name}?</h3>
                  <p className="text-gray-600 mb-4">
                    The {product.name} transforms plastic waste into valuable 3D printing filament, 
                    helping you reduce your environmental footprint while saving money on printing materials.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Whether you're a hobbyist, educator, or business owner, our easy-to-use machine 
                    provides a sustainable solution for creating high-quality filament from used plastic bottles.
                  </p>
                  <Button className="mt-2" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications">
              <div className="bg-white rounded-lg border">
                <h2 className="text-2xl font-semibold p-6 border-b">Technical Specifications</h2>
                <div className="divide-y">
                  {Object.entries(product.specs).map(([key, value], index) => (
                    <div key={index} className="flex px-6 py-4">
                      <div className="w-1/3 font-medium">{key}</div>
                      <div className="w-2/3 text-gray-600">{value}</div>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-gray-50 rounded-b-lg">
                  <p className="text-sm text-gray-500">
                    * Specifications are subject to change. Please refer to the user manual for the most up-to-date information.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Product comparison section */}
        <section className="container mx-auto px-4 max-w-6xl mt-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Compare EcoFilament Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(products).map((prod) => (
              <div 
                key={prod.id} 
                className={`border rounded-lg p-6 ${
                  prod.id === product.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : ''
                }`}
              >
                <h3 className="text-xl font-medium mb-2">{prod.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{prod.tagline}</p>
                <p className="text-2xl font-bold mb-6">${prod.price}</p>
                
                <ul className="mb-8 space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Converts {prod.specs["Conversion Rate"]}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Filament: {prod.specs["Filament Diameter"]}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Materials: {prod.specs["Materials"].split(',')[0]}...</span>
                  </li>
                </ul>
                
                {prod.id === product.id ? (
                  <Button variant="secondary" disabled className="w-full">Current Selection</Button>
                ) : (
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/products/${prod.id}`}>View Details</Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* Call to action */}
        <section className="bg-gray-50 mt-16 py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to transform plastic waste into 3D printing filament?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who are making a positive environmental impact while creating high-quality 3D printing materials.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="px-8" onClick={handleBuyNow}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Buy Now
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}