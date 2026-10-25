import React, { useState } from 'react';

interface CompanyLogoProps {
  name: string;
  src: string;
  alt: string;
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ name, src, alt, className = '' }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 text-center truncate">
        {name}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={`h-6 object-contain hover:scale-105 transition-transform duration-250 ${className}`}
      loading="lazy"
    />
  );
};
