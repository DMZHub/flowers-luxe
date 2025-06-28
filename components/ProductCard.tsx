import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiHeart } from 'react-icons/fi';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  showQuickView?: boolean;
}

export default function ProductCard({ product, showQuickView = false }: ProductCardProps) {
  const currentPrice = product.discount 
    ? product.price * (1 - product.discount.percentage / 100)
    : product.price;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/flower-throw-pillows/${product.style}/${product.slug}`}>
          <Image
            src={`/images/${product.mainImage}`}
            alt={product.images[0]?.alt || `${product.title} - ${product.style} flower throw pillow`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.featured && (
            <span className="bg-primary text-white text-xs font-medium py-1 px-2 rounded">
              Featured
            </span>
          )}
          {product.discount && (
            <span className="bg-red-500 text-white text-xs font-medium py-1 px-2 rounded">
              -{product.discount.percentage}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button 
          className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-label="Add to wishlist"
        >
          <FiHeart size={16} className="text-gray-600 hover:text-red-500 transition-colors" />
        </button>

        {/* Quick View Overlay */}
        {showQuickView && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link 
              href={`/flower-throw-pillows/${product.style}/${product.slug}`}
              className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Quick View
            </Link>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category & Style */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-primary-dark uppercase tracking-wide font-medium">
            {product.style} Style
          </span>
          <span className="text-xs text-gray-500 capitalize">
            {product.flowerType}
          </span>
        </div>

        {/* Product Title */}
        <Link href={`/flower-throw-pillows/${product.style}/${product.slug}`}>
          <h3 className="font-cormorant text-lg font-medium text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>

        {/* Short Description */}
        {product.shortDescription && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.shortDescription}
          </p>
        )}

        {/* Colors */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-gray-500">Colors:</span>
          <div className="flex gap-1">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full border border-gray-200 ${getColorClass(color)}`}
                title={color}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-gray-500 ml-1">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(currentPrice)}
            </span>
            {product.discount && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          
          <a
            href={product.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-primary hover:bg-primary-dark text-white text-sm font-medium py-2 px-3 rounded-md transition-colors"
            aria-label={`Shop ${product.title} on TeePublic`}
          >
            <span>Shop</span>
            <FiExternalLink size={14} />
          </a>
        </div>

        {/* Stock Status */}
        <div className="mt-2">
          {product.inStock ? (
            <span className="text-xs text-green-600 font-medium">In Stock</span>
          ) : (
            <span className="text-xs text-red-600 font-medium">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper function to get Tailwind color classes
function getColorClass(color: string): string {
  const colorMap: Record<string, string> = {
    'multicolor': 'bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400',
    'blue': 'bg-blue-500',
    'green': 'bg-green-500',
    'purple': 'bg-purple-500',
    'black': 'bg-black',
    'pink': 'bg-pink-500',
    'white': 'bg-white border-2',
    'black-and-white': 'bg-gradient-to-r from-black to-white',
    'orange': 'bg-orange-500',
    'gold': 'bg-yellow-400',
    'red': 'bg-red-500',
    'yellow': 'bg-yellow-500',
    'navy': 'bg-blue-900',
  };
  
  return colorMap[color] || 'bg-gray-400';
}