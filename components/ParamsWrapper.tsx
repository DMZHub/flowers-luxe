"use client"
import { useEffect, useState } from 'react'

interface ParamsWrapperProps<T = any> {
  params: Promise<T>
  children: (resolvedParams: T) => React.ReactNode
  loading?: React.ReactNode
}

export default function ParamsWrapper<T = any>({ 
  params, 
  children, 
  loading = <div className="flex items-center justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>
}: ParamsWrapperProps<T>) {
  const [resolvedParams, setResolvedParams] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const resolveParams = async () => {
      try {
        const resolved = await params
        setResolvedParams(resolved)
      } catch (error) {
        console.error('Error resolving params:', error)
      } finally {
        setIsLoading(false)
      }
    }

    resolveParams()
  }, [params])

  if (isLoading || !resolvedParams) {
    return <>{loading}</>
  }

  return <>{children(resolvedParams)}</>
}
