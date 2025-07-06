export interface ProductImage {
  src: string;
  alt: string;
  title?: string;
}

export interface ProductSpecification {
  name: string;
  value: string;
}

export interface ProductDiscount {
  percentage: number;
  validUntil?: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  style: ProductStyle;
  flowerType: FlowerType;
  colors: ProductColor[];
  price: number;
  originalPrice?: number;
  discount?: ProductDiscount;
  featured: boolean;
  mainImage: string;
  images: ProductImage[];
  description: string;
  shortDescription?: string;
  specifications: ProductSpecification[];
  externalUrl: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  dateAdded: string;
  inStock: boolean;
  category: 'Flower Throw Pillows';
}

export type ProductStyle = 
  | 'watercolor'
  | 'floral'
  | 'solid-color'
  | 'abstract'
  | 'vintage'
  | 'modern'
  | 'boho'
  | 'farmhouse';

export type FlowerType =
  | 'sunflower'
  | 'rose'
  | 'peony'
  | 'daisy'
  | 'tulip'
  | 'lavender'
  | 'orchid'
  | 'poppy'
  | 'hibiscus'
  | 'cherry-blossom'
  | 'wildflower'
  | 'lily'
  | 'magnolia'
  | 'marigold'
  | 'camellia'
  | 'iris'
  | 'hydrangea'
  | 'jasmine'
  | 'anemone'
  | 'dahlia'
  | 'lotus'
  | 'plumeria'
  | 'bougainvillea'
  | 'ranunculus'
  | 'quicksand-rose'
  | 'pampas-grass';



export type ProductColor =
  | 'multicolor'
  | 'blue'
  | 'green'
  | 'purple'
  | 'black'
  | 'pink'
  | 'white'
  | 'black-and-white'
  | 'orange'
  | 'gold'
  | 'red'
  | 'yellow'
  | 'navy'
  | 'beige'
  | 'brown'
  | 'burgundy'
  | 'teal'
  | 'turquoise'
  | 'coral'
  | 'mint'
  | 'cream'
  | 'gray'
  | 'light-gray'
  | 'dark-gray'
  | 'olive'
  | 'mustard'
  | 'lavender'
  | 'peach'
  | 'charcoal'
  | 'tan'
  | 'cyan'
  | 'indigo'
  | 'maroon'
  | 'rose'
  | 'blush'
  | 'aqua'
  | 'sand'
  | 'ivory'
  | 'mauve';
  | 'rust';


export interface ProductFilters {
  style?: ProductStyle;
  flowerType?: FlowerType;
  color?: ProductColor;
  priceRange?: [number, number];
  featured?: boolean;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
}
