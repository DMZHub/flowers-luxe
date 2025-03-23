import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Heart } from 'lucide-react'

interface ProductCardProps {
  title: string
  category: string
  price: string
  imageSrc: string
  externalUrl: string
  isNew?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  category,
  price,
  imageSrc,
  externalUrl,
  isNew = false
}) => {
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
        
        {/* New badge */}
        {isNew && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-white text-xs font-medium rounded">
            New
          </div>
        )}
        
        {/* Quick shop button */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a 
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur-sm text-primary hover:text-primary-dark text-sm font-medium py-2 px-4 rounded-md shadow-sm hover:shadow-md transition-all"
          >
             Shop Now
          </a>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <span className="text-xs text-primary-dark font-medium uppercase tracking-wider">{category}</span>
          <span className="font-medium text-gray-900">{price}</span>
        </div>
        
        <h3 className="font-cormorant text-lg font-medium mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        
        <div className="mt-auto pt-3 border-t border-gray-100">
          <a 
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            <span>View on TeePublic</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard