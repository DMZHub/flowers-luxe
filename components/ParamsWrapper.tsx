// components/ParamsWrapper.tsx
import React from 'react';

// Generic type for params - can be extended for different route types
export interface PageParams {
  [key: string]: string | string[] | undefined;
}

// Props for the wrapper component
interface ParamsWrapperProps<T extends PageParams> {
  params: Promise<T>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
  Component: React.ComponentType<{
    params: T;
    searchParams?: { [key: string]: string | string[] | undefined };
  }>;
}

// Generic wrapper component that resolves async params
export default async function ParamsWrapper<T extends PageParams>({
  params,
  searchParams,
  Component
}: ParamsWrapperProps<T>) {
  // Resolve the async params and searchParams
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  // Render the original component with resolved params
  return (
    <Component 
      params={resolvedParams} 
      searchParams={resolvedSearchParams}
    />
  );
}

// Specific type interfaces for your routes
export interface StylePageParams {
  style: string;
}

export interface ProductPageParams {
  style: string;
  product: string;
}

// Helper function to create wrapped page components
export function createWrappedPage<T extends PageParams>(
  OriginalComponent: React.ComponentType<{
    params: T;
    searchParams?: { [key: string]: string | string[] | undefined };
  }>
) {
  return function WrappedPage({
    params,
    searchParams
  }: {
    params: Promise<T>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
  }) {
    return (
      <ParamsWrapper
        params={params}
        searchParams={searchParams}
        Component={OriginalComponent}
      />
    );
  };
}