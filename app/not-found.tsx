import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-6 text-center">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 max-w-md text-center mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        href="/" 
        className="btn-primary flex items-center gap-2"
      >
        <ArrowLeft size={18} />
        <span>Back to Home</span>
      </Link>
    </div>
  )
}