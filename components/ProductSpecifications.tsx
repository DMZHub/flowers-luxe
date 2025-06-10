import React from 'react';
import { ProductSpecification } from '../types/product';
import { FiCheck } from 'react-icons/fi';

interface ProductSpecificationsProps {
  specifications: ProductSpecification[];
}

export default function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="font-cormorant text-xl font-bold mb-4 text-gray-900">
        Product Specifications
      </h3>
      
      <div className="space-y-4">
        {specifications.map((spec, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
              <FiCheck size={12} className="text-white" />
            </div>
            <div className="flex-grow">
              <dt className="font-medium text-gray-900 mb-1">
                {spec.name}
              </dt>
              <dd className="text-gray-600 text-sm leading-relaxed">
                {spec.value}
              </dd>
            </div>
          </div>
        ))}
      </div>

      {/* Care Instructions Highlight */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
          <FiCheck className="text-blue-600" size={16} />
          Care Instructions
        </h4>
        <p className="text-blue-800 text-sm">
          <strong>Cover:</strong> Machine wash separately in cold water on a gentle cycle with mild detergent and no bleach. Tumble dry low.
          <br />
          <strong>Insert:</strong> Spot clean/Dry Clean only
        </p>
      </div>

      {/* Quality Guarantee */}
      <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
        <h4 className="font-medium text-green-900 mb-2 flex items-center gap-2">
          <FiCheck className="text-green-600" size={16} />
          Quality Guarantee
        </h4>
        <p className="text-green-800 text-sm">
          Our Production Team establishes the highest quality standards for third-party printers who participate in the marketplace to ensure that every product sold is perfect.
        </p>
      </div>
    </div>
  );
}