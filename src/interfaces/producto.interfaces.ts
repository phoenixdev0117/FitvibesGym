export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  //type: Type;
  gender: Gender;
  enabled: boolean;
  isOffer: boolean;
  offerPrice: number;
  offerDate: Date | null;
  byOrder: number;
  
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  size: Size;
  image: string;
}

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL" | "unica";
export type Type = "Shirts" | "Pants" | "Hoodies" | "Hats";
export type Gender = "men" | "women" | "kid" | "unisex";

export interface Country {
  id: string;
  name: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface ProductImages {
  id: number;
  url: string;
}
