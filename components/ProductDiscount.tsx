// components/ProductDiscount.tsx
import React from 'react';
import { Tag } from 'lucide-react';

interface ProductDiscountProps {
  percentage: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Displays a simplified discount badge for products - just shows percentage
 */
const ProductDiscount: React.FC<ProductDiscountProps> = ({
  percentage,
  size = 'md',
  className = ""
}) => {
  // Size-based classes for the badge
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  };

  return (
    <div className={`inline-flex items-center gap-1 bg-red-600 text-white font-medium rounded-full ${sizeClasses[size]} ${className}`}>
      <Tag size={size === 'sm' ? 12 : size === 'md' ? 14 : 16} className="shrink-0" />
      <span>{percentage}% OFF</span>
    </div>
  );
};

export default ProductDiscount;
