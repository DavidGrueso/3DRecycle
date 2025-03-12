import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/lib/CartContext";
import { NavStyleProvider } from "@/components/Header";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Mission from "@/pages/Mission";
import Contact from "@/pages/Contact";
import HelpCenter from "@/pages/HelpCenter";
import ShippingInfo from "@/pages/ShippingInfo";
import Warranty from "@/pages/Warranty";
import Returns from "@/pages/Returns";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import Compliance from "@/pages/Compliance";
import Account from "@/pages/Account";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import ProductDetail from "@/pages/ProductDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/mission" component={Mission} />
      <Route path="/contact" component={Contact} />
      <Route path="/help-center" component={HelpCenter} />
      <Route path="/shipping-info" component={ShippingInfo} />
      <Route path="/warranty" component={Warranty} />
      <Route path="/returns" component={Returns} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/compliance" component={Compliance} />
      <Route path="/account" component={Account} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/products/:id" component={ProductDetail} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <NavStyleProvider />
        <Router />
        <Toaster />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
