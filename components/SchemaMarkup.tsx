// components/SchemaMarkup.tsx - updated version
'use client';

import React, { useEffect, useId } from 'react';

interface SchemaMarkupProps {
  schema: Record<string, any>;
  schemaType?: string; // Optional type identifier
}

export default function SchemaMarkup({ schema, schemaType = "default" }: SchemaMarkupProps) {
  const id = useId(); // Generate a unique ID for this instance
  const schemaId = `schema-${schemaType}-${id}`;
  
  useEffect(() => {
    // Clean up any duplicate schemas with the same @type
    if (schema["@type"]) {
      const type = schema["@type"];
      const scripts = document.querySelectorAll(`script[data-schema-type="${type}"]`);
      
      // Remove all but the current one if there are duplicates
      if (scripts.length > 1) {
        scripts.forEach(script => {
          if (script.id !== schemaId) {
            script.remove();
          }
        });
      }
    }
    
    return () => {
      // Cleanup when component unmounts
      const script = document.getElementById(schemaId);
      if (script) {
        script.remove();
      }
    };
  }, [schema, schemaId]);

  return (
    <script
      id={schemaId}
      type="application/ld+json"
      data-schema-type={schema["@type"] || "unknown"}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
