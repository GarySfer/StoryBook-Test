import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

// Definicja stylów dla przycisku za pomocą cva
const buttonStyles = cva(
  'inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2', // bazowe style
  {
    variants: {
        variant: {
            primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
            secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
            outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 focus:ring-gray-500',
            success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
            warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500',
            danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
            inverse: 'bg-black text-white hover:bg-gray-800 focus:ring-black',
            purple: 'bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-500',
          },
      size: {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-3 text-lg',
        xl: 'px-6 py-4 text-xl',
      },
      roundness: {
        square: 'rounded-none',
        sm: 'rounded-sm',
        base: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        circular: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface Button1Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  label: string;
}

export const Button1: React.FC<Button1Props> = ({ label, variant, size, className, ...props }) => {
  return (
    <button className={`${buttonStyles({ variant, size })} ${className || ''}`} {...props}>
      {label}
    </button>
  );
};
