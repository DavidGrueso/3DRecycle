export type Product = {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular: boolean;
};

export type CartItem = {
  productId: string;
  quantity: number;
};

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
