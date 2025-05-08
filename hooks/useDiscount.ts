// hooks/useDiscount.ts
import { useState, useEffect } from 'react';

interface Discount {
  percentage: number;
  code?: string;  // Optional, not used in UI
  validUntil?: string;  // Optional, not used in UI
}

interface UseDiscountReturn {
  originalPrice: number;
  discountedPrice: number;
  savings: number;
  savingsPercentage: number;
  isDiscounted: boolean;
}

/**
 * Simplified hook for calculating discounted prices
 */
export function useDiscount(initialPrice: number, discount?: Discount): UseDiscountReturn {
  const [discountedPrice, setDiscountedPrice] = useState(initialPrice);
  const [isValid, setIsValid] = useState(false);
  
  useEffect(() => {
    if (!discount) {
      setDiscountedPrice(initialPrice);
      setIsValid(false);
      return;
    }
    
    // Always apply the discount regardless of expiration date
    // Only check validity if validUntil is provided
    const isDiscountValid = !discount.validUntil || new Date(discount.validUntil) > new Date();
    setIsValid(isDiscountValid);
    
    if (isDiscountValid) {
      const newPrice = initialPrice * (1 - discount.percentage / 100);
      setDiscountedPrice(parseFloat(newPrice.toFixed(2)));
    } else {
      setDiscountedPrice(initialPrice);
    }
  }, [initialPrice, discount]);
  
  return {
    originalPrice: initialPrice,
    discountedPrice,
    savings: parseFloat((initialPrice - discountedPrice).toFixed(2)),
    savingsPercentage: discount?.percentage || 0,
    isDiscounted: isValid && discountedPrice < initialPrice
  };
}

export default useDiscount;
