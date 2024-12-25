import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  href, 
  variant = 'primary', 
  children, 
  icon: Icon,
  className = '' 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg transition-all hover:scale-105 shadow-lg';
  
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700 hover:shadow-green-500/25',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/25',
    outline: 'bg-white text-gray-900 hover:bg-gray-50'
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-6 h-6 mr-2" />}
      {children}
    </a>
  );
};

export default Button;