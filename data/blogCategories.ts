import { getBlogCategoryCount } from './blogPosts'

export interface BlogCategory {
  name: string
  slug: string
  count: number
  color: string
  description: string
}

export const blogCategories: BlogCategory[] = [
  {
    name: 'Home Decor',
    slug: 'home-decor',
    count: getBlogCategoryCount('home-decor'),
    color: 'bg-blue-100 text-blue-700',
    description: 'Interior design tips and styling guides'
  },
  {
    name: 'Design Tips',
    slug: 'design-tips',
    count: getBlogCategoryCount('design-tips'),
    color: 'bg-green-100 text-green-700',
    description: 'Professional design advice and techniques'
  },
  {
    name: 'Care Guides',
    slug: 'care-guides',
    count: getBlogCategoryCount('care-guides'),
    color: 'bg-purple-100 text-purple-700',
    description: 'Maintenance and care for your pillows'
  },
  {
    name: 'Styling Ideas',
    slug: 'styling-ideas',
    count: getBlogCategoryCount('styling-ideas'),
    color: 'bg-orange-100 text-orange-700',
    description: 'Creative styling inspiration'
  },
  {
    name: 'Seasonal Decor',
    slug: 'seasonal-decor',
    count: getBlogCategoryCount('seasonal-decor'),
    color: 'bg-pink-100 text-pink-700',
    description: 'Seasonal decorating tips'
  },
  {
    name: 'Pattern Mixing',
    slug: 'pattern-mixing',
    count: getBlogCategoryCount('pattern-mixing'),
    color: 'bg-teal-100 text-teal-700',
    description: 'Master the art of combining patterns'
  },
  {
    name: 'Room Design',
    slug: 'room-design',
    count: getBlogCategoryCount('room-design'),
    color: 'bg-indigo-100 text-indigo-700',
    description: 'Complete room design concepts'
  },
  {
    name: 'Color Theory',
    slug: 'color-theory',
    count: getBlogCategoryCount('color-theory'),
    color: 'bg-yellow-100 text-yellow-700',
    description: 'Understanding color in design'
  }
]
