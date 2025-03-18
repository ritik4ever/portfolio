// src/components/ui/card.tsx
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => (
    <div className={`bg-gray-800 rounded-lg shadow-md p-4 ${className}`}>
        {children}
    </div>
);

export const CardHeader = ({ children }: CardProps) => (
    <div className="mb-4">{children}</div>
);

export const CardContent = ({ children }: CardProps) => (
    <div className="text-gray-300">{children}</div>
);

export const CardTitle = ({ children }: CardProps) => (
    <h3 className="text-xl font-bold text-white">{children}</h3>
);
