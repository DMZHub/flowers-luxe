// components/SchemaMarkup.tsx
'use client';

import React from 'react';

interface SchemaMarkupProps {
  schema: Record<string, any>;
}

/**
 * Component to add structured data (schema.org) to pages
 * Renders JSON-LD script tags with the provided schema
 */
export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
