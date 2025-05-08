// components/DiscountedPrice.tsx
import React from 'react';
import { useDiscount } from '../hooks/useDiscount';

interface DiscountedPriceProps {
  price: number;
  discount?: {
    percentage: number;
    code?: string;
    validUntil?: string;
  };
  showOriginal?: boolean;
  className?: string;
  dollarSign?: boolean;
}

/**
 * Displays a product price, taking into account any active discounts
 * Shows both the discounted price and original price if a discount is active
 */
const DiscountedPrice: React.FC<DiscountedPriceProps> = ({
  price,
  discount,
  showOriginal = true,
  className = "",
  dollarSign = true
}) => {
  const { originalPrice, discountedPrice, isDiscounted } = useDiscount(price, discount);
  
  if (!isDiscounted) {
    return (
      <span className={className}>
        {dollarSign && '$'}{originalPrice.toFixed(2)}
      </span>
    );
  }
  
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="text-lg font-semibold text-red-600">
        {dollarSign && '$'}{discountedPrice.toFixed(2)}
      </span>
      {showOriginal && (
        <span className="text-gray-500 line-through text-sm">
          {dollarSign && '$'}{originalPrice.toFixed(2)}
        </span>
      )}
    </span>
  );
};

export default DiscountedPrice; 
