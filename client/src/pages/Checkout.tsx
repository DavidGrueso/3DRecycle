import { useState } from "react";
import { Link, useLocation } from "wouter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/lib/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Form schema for shipping info
const shippingFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  state: z.string().min(2, { message: "State must be at least 2 characters" }),
  zipCode: z.string().min(5, { message: "ZIP code must be at least 5 characters" }),
  country: z.string().min(2, { message: "Country must be at least 2 characters" }),
  specialInstructions: z.string().optional(),
});

type ShippingFormValues = z.infer<typeof shippingFormSchema>;

export default function Checkout() {
  const [, setLocation] = useLocation();
  const { cartItems, cartCount, clearCart } = useCart();
  const { toast } = useToast();
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping");

  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Form for shipping information
  const form = useForm<ShippingFormValues>({
    resolver: zodResolver(shippingFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "United States",
      specialInstructions: "",
    },
  });

  // Handle shipping form submission
  const onSubmitShipping = (data: ShippingFormValues) => {
    console.log("Shipping information:", data);
    toast({
      title: "Shipping information saved",
      description: "Proceeding to payment",
    });
    setStep("payment");
  };

  // Handle payment completion
  const handlePaymentSuccess = () => {
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase",
      variant: "default",
    });
    clearCart();
    setStep("confirmation");
  };

  // Handle any payment errors
  const handlePaymentError = (message: string) => {
    toast({
      title: "Payment failed",
      description: message,
      variant: "destructive",
    });
  };

  // Simulated payment processing (to be replaced with Stripe integration)
  const processPayment = () => {
    // Simulate payment processing success for demo
    setTimeout(() => {
      handlePaymentSuccess();
    }, 2000);
  };

  // If cart is empty, redirect to cart page
  if (cartCount === 0 && step !== "confirmation") {
    return (
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto text-center py-16 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Your cart is empty</h1>
          <p className="text-lg text-gray-600">Add some products to your cart before checkout</p>
          <Button asChild>
            <Link href="/">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Checkout</h1>

          {/* Checkout Steps */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className={`rounded-full w-8 h-8 flex items-center justify-center ${step === "shipping" || step === "payment" || step === "confirmation" ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <div className="ml-2 font-medium">Shipping</div>
            </div>
            <div className={`h-0.5 w-16 ${step === "payment" || step === "confirmation" ? 'bg-primary' : 'bg-gray-200'}`}></div>
            <div className="flex items-center">
              <div className={`rounded-full w-8 h-8 flex items-center justify-center ${step === "payment" || step === "confirmation" ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <div className="ml-2 font-medium">Payment</div>
            </div>
            <div className={`h-0.5 w-16 ${step === "confirmation" ? 'bg-primary' : 'bg-gray-200'}`}></div>
            <div className="flex items-center">
              <div className={`rounded-full w-8 h-8 flex items-center justify-center ${step === "confirmation" ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <div className="ml-2 font-medium">Confirmation</div>
            </div>
          </div>

          {/* Checkout Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Checkout Form Area */}
            <div className="lg:col-span-2">
              {step === "shipping" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                    <CardDescription>Enter your shipping details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmitShipping)} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" {...form.register("fullName")} />
                          {form.formState.errors.fullName && (
                            <p className="text-sm text-red-500">{form.formState.errors.fullName.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" {...form.register("email")} />
                          {form.formState.errors.email && (
                            <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input id="phoneNumber" {...form.register("phoneNumber")} />
                        {form.formState.errors.phoneNumber && (
                          <p className="text-sm text-red-500">{form.formState.errors.phoneNumber.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" {...form.register("address")} />
                        {form.formState.errors.address && (
                          <p className="text-sm text-red-500">{form.formState.errors.address.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" {...form.register("city")} />
                          {form.formState.errors.city && (
                            <p className="text-sm text-red-500">{form.formState.errors.city.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input id="state" {...form.register("state")} />
                          {form.formState.errors.state && (
                            <p className="text-sm text-red-500">{form.formState.errors.state.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input id="zipCode" {...form.register("zipCode")} />
                          {form.formState.errors.zipCode && (
                            <p className="text-sm text-red-500">{form.formState.errors.zipCode.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select defaultValue="United States" onValueChange={(value) => form.setValue("country", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="United States">United States</SelectItem>
                            <SelectItem value="Canada">Canada</SelectItem>
                            <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                            <SelectItem value="Australia">Australia</SelectItem>
                            <SelectItem value="Germany">Germany</SelectItem>
                            <SelectItem value="France">France</SelectItem>
                          </SelectContent>
                        </Select>
                        {form.formState.errors.country && (
                          <p className="text-sm text-red-500">{form.formState.errors.country.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                        <Textarea id="specialInstructions" {...form.register("specialInstructions")} />
                      </div>

                      <Button type="submit" className="w-full">Continue to Payment</Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              {step === "payment" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                    <CardDescription>Enter your payment details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input id="expiryDate" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nameOnCard">Name on Card</Label>
                      <Input id="nameOnCard" placeholder="John Doe" />
                    </div>

                    <div className="flex justify-between mt-8">
                      <Button variant="outline" onClick={() => setStep("shipping")}>Back</Button>
                      <Button onClick={processPayment}>Place Order</Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === "confirmation" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Order Confirmation</CardTitle>
                    <CardDescription>Thank you for your purchase!</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                      <h3 className="text-lg font-semibold text-green-700 mb-2">Your order has been placed successfully!</h3>
                      <p className="text-green-600">An email confirmation has been sent to your inbox.</p>
                    </div>
                    
                    <div className="space-y-2 mt-6">
                      <h3 className="font-medium">What's next?</h3>
                      <p className="text-gray-600 text-sm">Your EcoFilament machine will be shipped within 1-3 business days. You'll receive tracking information via email once your order ships.</p>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                      <Button asChild>
                        <Link href="/">Return to Home</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="bg-gray-50 sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {step !== "confirmation" && (
                    <>
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="text-xs text-gray-500">x{item.quantity}</div>
                          </div>
                          <div className="text-sm">${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                      ))}
                      
                      <Separator className="my-2" />
                      
                      <div className="space-y-2 text-sm">
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
                      </div>
                      
                      <Separator className="my-2" />
                      
                      <div className="flex justify-between font-semibold text-base">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </>
                  )}

                  {step === "confirmation" && (
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Order number:</span>
                        <span className="font-medium">#EF{Math.floor(100000 + Math.random() * 900000)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Order date:</span>
                        <span className="font-medium">{new Date().toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Estimated delivery:</span>
                        <span className="font-medium">
                          {new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString()} - 
                          {new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                        </span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-semibold">
                        <span>Total paid:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}