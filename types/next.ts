// types/next.ts
// Next.js 15 compatible page props types

import { ReactNode } from 'react'

// Base page props for Next.js 15 App Router
export interface PageProps {
  params: Promise<any>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

// Layout props for Next.js 15
export interface LayoutProps {
  children: ReactNode
  params: Promise<any>
}

// Specific page prop types
export interface StylePageProps {
  params: Promise<{ style: string }>
}

export interface ProductPageProps {
  params: Promise<{ style: string; slug: string }>
}

export interface BlogPostProps {
  params: Promise<{ slug: string }>
}

// Error page props
export interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

// Not found page props
export interface NotFoundProps {
  // Next.js not-found pages don't receive props
}
