// src/components/ui/button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: 'outline' | 'solid';
}

export const Button = ({ children, className = '', variant = 'solid', ...props }: ButtonProps) => {
    const baseClasses = 'px-4 py-2 rounded-md font-semibold transition-colors';
    const variantClasses = variant === 'outline'
        ? 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
        : 'bg-blue-500 text-white hover:bg-blue-600';

    return (
        <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
            {children}
        </button>
    );
};
