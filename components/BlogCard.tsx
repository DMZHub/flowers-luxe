import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  imageSrc: string
  date: string
  readTime: string
  category: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  slug,
  imageSrc,
  date,
  readTime,
  category
}) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group h-full flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm hover:shadow-elevated transition-all duration-300"
    >
      <Link href={`/blog/${slug}`} className="block h-full">
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-medium rounded-full px-3 py-1 shadow-sm">
              {category}
            </span>
          </div>
          
          <div className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={16} className="text-primary" />
          </div>
        </div>
        
        <div className="p-5 flex-grow flex flex-col">
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readTime}</span>
            </div>
          </div>
          
          <h3 className="font-cormorant text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>
          
          <div className="mt-auto pt-3 border-t border-gray-100">
            <span className="inline-flex items-center text-primary font-medium text-sm group-hover:underline">
              Read Article
              <svg className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default BlogCard