import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface CategoryCardProps {
  title: string
  slug: string
  imageSrc: string
  count?: number
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  slug, 
  imageSrc, 
  count = 0 
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl shadow-elevated bg-white border border-border"
    >
      <Link href={`/shop/category/${slug}`} className="block h-full">
        <div className="relative h-52 md:h-64 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${title} category`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-between p-5">
            <div className="bg-white/90 backdrop-blur-sm self-start px-3 py-1 rounded-full text-xs font-medium text-gray-800">
              {count} products
            </div>
            
            <div className="w-full">
              <h3 className="text-2xl font-cormorant font-semibold text-white mb-2">{title}</h3>
              
              <div className="flex items-center transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-white/90 text-sm font-medium mr-2">Explore</span>
                <span className="bg-white/20 backdrop-blur-sm p-1.5 rounded-full">
                  <ArrowRight size={14} className="text-white" />
                </span>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-2 -right-2 h-16 w-16 bg-white/10 backdrop-blur-sm rounded-full transition-transform group-hover:scale-150 duration-700 origin-bottom-right"></div>
          <div className="absolute top-1/3 left-0 h-6 w-6 bg-primary/20 backdrop-blur-sm rounded-full"></div>
        </div>
      </Link>
    </motion.div>
  )
}

export default CategoryCard
