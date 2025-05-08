// components/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Heart, Paintbrush } from 'lucide-react';
import ProductDiscount from './ProductDiscount';
import DiscountedPrice from './DiscountedPrice';
import { Product } from '@/utils/products';

interface LegacyProductCardProps {
  title: string;
  category: string;
  price: string;
  imageSrc: string;
  externalUrl: string;
  isNew?: boolean;
  isCustom?: boolean;
}

interface ModernProductCardProps {
  product: Product;
  showDescription?: boolean;
}

type ProductCardProps = ModernProductCardProps | LegacyProductCardProps;

/**
 * ProductCard Component
 * Supports both new API (product object) and legacy API (individual props)
 */
const ProductCard: React.FC<ProductCardProps> = (props) => {
  // Check which API is being used
  const isModernAPI = 'product' in props;
  
  // If using modern API, extract product and showDescription
  const product = isModernAPI ? (props as ModernProductCardProps).product : null;
  const showDescription = isModernAPI ? (props as ModernProductCardProps).showDescription || false : false;
  
  // If using legacy API, extract individual props
  const {
    title = product?.title || '',
    category = product?.category || '',
    price = product?.price ? (typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price) : '',
    imageSrc = product?.imageSrc || '',
    externalUrl = product?.isCustom ? (product.customUrl || '') : (product.externalUrl || ''),
    isNew = product?.isNew || false,
    isCustom = product?.isCustom || false,
  } = isModernAPI ? {} : props as LegacyProductCardProps;
  
  // Get discount from product if using modern API
  const discount = product?.discount;
  // Get description from product if using modern API and showDescription is true
  const description = showDescription && product?.description;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group h-full flex flex-col overflow-hidden rounded-xl bg-white border border-border shadow-sm hover:shadow-elevated transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Wishlist button */}
        <button 
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
          aria-label="Add to wishlist"
        >
          <Heart size={16} className="text-gray-700 hover:text-primary transition-colors" />
        </button>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <div className="px-2 py-1 bg-primary text-white text-xs font-medium rounded shadow-sm">
              New
            </div>
          )}
          
          {isCustom && (
            <div className="px-2 py-1 bg-purple-600 text-white text-xs font-medium rounded shadow-sm flex items-center gap-1">
              <Paintbrush size={12} />
              <span>Custom</span>
            </div>
          )}
          
          {discount && isModernAPI && (
            <ProductDiscount 
              percentage={discount.percentage}
              size="sm"
            />
          )}
        </div>
        
        {/* Quick shop button */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a 
            href={externalUrl}
            target={isCustom ? "_self" : "_blank"}
            rel={isCustom ? undefined : "noopener noreferrer"}
            className="bg-white/90 backdrop-blur-sm text-primary hover:text-primary-dark text-sm font-medium py-2 px-4 rounded-md shadow-sm hover:shadow-md transition-all"
          >
            {isCustom ? 'Customize' : 'Shop Now'}
          </a>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <span className="text-xs text-primary-dark font-medium uppercase tracking-wider">{category}</span>
          {isModernAPI && product ? (
            <DiscountedPrice 
              price={product.price}
              discount={product.discount}
              className="font-medium text-gray-900"
            />
          ) : (
            <span className="font-medium text-gray-900">{price}</span>
          )}
        </div>
        
        <h3 className="font-cormorant text-lg font-medium mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        
        {description && (
          <p className="text-gray-600 text-sm mb-3">
            {description.substring(0, 100)}...
          </p>
        )}
        
        <div className="mt-auto pt-3 border-t border-gray-100">
          <a 
            href={externalUrl}
            target={isCustom ? "_self" : "_blank"}
            rel={isCustom ? undefined : "noopener noreferrer"}
            className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            <span>{isCustom ? 'Customize This Product' : 'View on TeePublic'}</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
