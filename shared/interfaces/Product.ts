import { Category } from "./Category";
import { Collection } from "./Collection";
import { Tag } from "./Tag";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  salePrice: number;
  colors: Color[];
  availability: "In Stock" | "Out Of Stock" | "Pre Order";
  category: Category;
  // collection: Collection | null;
  ages: string;
  gender: "Boy" | "Girl" | "Unisex";
  material: string[];
  sizes: Sizes[] | null;
  sku: string;
  status: "Sale" | "New" | "Hot";
  stockQuantity: number;
  tags: Tag[];
  slug?: string;
  sold?: number;
  weight: number;
}

export interface Sizes {
  size: string;
  price: number;
  salePrice: number;
  stockQuantity: number;
  _id: string;
}

export interface Color {
  id: string;
  color: string;
  images: string[];
  imageUrl: string;
}

export interface AddProductRequest {
  name: string;
  description: string;
  price: number;
  salePrice: number;
  stockQuantity: number;
  colors: Color[];
  category: string;
  tags: string[];
  collection: string | null;
  sizes: Sizes[];
  sku: string;
  status: "Sale" | "New" | "Hot";
  material: string[];
  ages: string;
  gender: "Boy" | "Girl" | "Unisex";
  availability: "In Stock" | "Out Of Stock" | "Pre Order";
}

export interface UpdateProductRequest {
  id: string;
  product: AddProductRequest;
}

interface FilterOptions {
  priceRange: PriceRange;
  category?: string | null;
  tags: string[] | null;
  collection?: string | null;
  status: string | null;
  availability: string | null;
  colors: string[] | null;
  sizes: string[] | null;
}

interface SortOption {
  sortBy: string | null;
}

export interface ProductFilter {
  filters?: FilterOptions;
  sortOption?: SortOption;
  query?: string | null;
  page: number;
  limit?: number;
}

export interface PriceRange {
  min: string | null;
  max: string | null;
}
