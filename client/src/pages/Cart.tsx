import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface CartItem {
  id: string;
  name: string;
  model: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "EcoFilament Standard",
      model: "EF-100",
      price: 599,
      quantity: 1,
      image: "/placeholder.svg"
    }
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="max-h-20 max-w-20 object-contain" 
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="font-semibold">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <p className="text-sm text-gray-500">Model: {item.model}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-gray-500 hover:text-primary transition"
                            aria-label="Decrease quantity"
                          >
                            <MinusCircle className="h-5 w-5" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-gray-500 hover:text-primary transition"
                            aria-label="Increase quantity"
                          >
                            <PlusCircle className="h-5 w-5" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-500 transition"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="/">Continue Shopping</Link>
                </Button>
              </div>
            </div>
            
            <div>
              <div className="border rounded-lg p-6 bg-gray-50 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <Separator className="my-2" />
                  
                  <div className="flex justify-between font-semibold text-base">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6">
                  Proceed to Checkout
                </Button>
                
                <div className="mt-6 text-xs text-gray-500 text-center">
                  <p>Shipping calculated at checkout</p>
                  <p className="mt-2">Taxes calculated based on shipping address</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 space-y-4">
            <p className="text-lg text-gray-600">Your cart is empty</p>
            <Button asChild>
              <Link href="/">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}