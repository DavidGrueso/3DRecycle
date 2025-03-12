import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing required environment variable: STRIPE_SECRET_KEY");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16"
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiRouter = "/api";
  
  // Product endpoints
  app.get(`${apiRouter}/products`, async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Error fetching products" });
    }
  });

  app.get(`${apiRouter}/products/:id`, async (req, res) => {
    try {
      const productId = parseInt(req.params.id);
      const product = await storage.getProduct(productId);
      
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Error fetching product" });
    }
  });

  // Cart endpoints
  app.post(`${apiRouter}/cart`, async (req, res) => {
    try {
      const { plan } = req.body;
      
      if (!plan || (plan !== "standard" && plan !== "pro")) {
        return res.status(400).json({ message: "Invalid plan type" });
      }
      
      // For demo purposes, we'll use user ID 1 (anonymous user)
      const userId = 1;
      
      // Get the product ID based on the plan
      const products = await storage.getProducts();
      const product = products.find((p: { type: string }) => p.type === plan);
      
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      // Add to cart
      const cartItem = await storage.addToCart(userId, product.id, 1);
      
      res.status(201).json({ message: "Product added to cart", cartItem });
    } catch (error) {
      res.status(500).json({ message: "Error adding product to cart" });
    }
  });

  app.get(`${apiRouter}/cart/:userId`, async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const cartItems = await storage.getCartItems(userId);
      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ message: "Error fetching cart items" });
    }
  });

  // Contact form endpoint
  app.post(`${apiRouter}/contact`, async (req, res) => {
    try {
      const formData = contactFormSchema.parse(req.body);
      
      // Save the contact form data
      const contact = await storage.saveContactForm(formData);
      
      res.status(201).json({ 
        message: "Message received successfully", 
        contact 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      
      res.status(500).json({ message: "Error saving contact form" });
    }
  });

  // Stripe payment endpoints
  app.post(`${apiRouter}/create-payment-intent`, async (req, res) => {
    try {
      const { amount } = req.body;

      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error: any) {
      res.status(500).json({
        error: {
          message: error.message,
        },
      });
    }
  });

  // Initialize the server
  const httpServer = createServer(app);

  // Seed initial product data if needed
  await seedInitialData();

  return httpServer;
}

// Helper function to seed initial data
async function seedInitialData() {
  try {
    const products = await storage.getProducts();
    
    if (products.length === 0) {
      // No products exist, create initial products
      await storage.createProduct({
        name: "EcoFilament Standard",
        price: 199900, // $1,999.00 in cents
        description: "The standard EcoFilament machine with 1-year warranty and basic accessories.",
        type: "standard",
        popular: false
      });
      
      await storage.createProduct({
        name: "EcoFilament Pro",
        price: 249900, // $2,499.00 in cents
        description: "The premium EcoFilament machine with 3-year warranty and advanced accessories.",
        type: "pro",
        popular: true
      });
    }
  } catch (error) {
    console.error("Error seeding initial data:", error);
  }
}
