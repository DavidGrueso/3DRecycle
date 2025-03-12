import { 
  users, type User, type InsertUser,
  products, type Product, type InsertProduct,
  cartItems, type CartItem, type InsertCartItem,
  type ContactFormData
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product operations
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Cart operations
  getCartItems(userId: number): Promise<CartItem[]>;
  addToCart(userId: number, productId: number, quantity: number): Promise<CartItem>;
  
  // Contact operations
  saveContactForm(formData: ContactFormData): Promise<ContactFormData>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private cart: Map<number, CartItem>;
  private contactForms: ContactFormData[];
  private userIdCounter: number;
  private productIdCounter: number;
  private cartIdCounter: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.cart = new Map();
    this.contactForms = [];
    this.userIdCounter = 1;
    this.productIdCounter = 1;
    this.cartIdCounter = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Product methods
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }
  
  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }
  
  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.productIdCounter++;
    
    // Create a Product object manually to ensure type safety
    const product: Product = {
      id,
      name: insertProduct.name,
      price: insertProduct.price,
      description: insertProduct.description,
      type: insertProduct.type,
      popular: insertProduct.popular !== undefined ? insertProduct.popular : false
    };
    
    this.products.set(id, product);
    return product;
  }
  
  // Cart methods
  async getCartItems(userId: number): Promise<CartItem[]> {
    return Array.from(this.cart.values()).filter(item => item.user_id === userId);
  }
  
  async addToCart(userId: number, productId: number, quantity: number): Promise<CartItem> {
    const id = this.cartIdCounter++;
    const cartItem: CartItem = {
      id,
      user_id: userId,
      product_id: productId,
      quantity
    };
    this.cart.set(id, cartItem);
    return cartItem;
  }
  
  // Contact form methods
  async saveContactForm(formData: ContactFormData): Promise<ContactFormData> {
    this.contactForms.push(formData);
    return formData;
  }
}

export const storage = new MemStorage();
