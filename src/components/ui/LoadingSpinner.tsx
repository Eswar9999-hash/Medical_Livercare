import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="absolute w-full h-full border-4 border-current border-t-transparent rounded-full opacity-20"></div>
        <div className="absolute w-full h-full border-4 border-current border-l-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;