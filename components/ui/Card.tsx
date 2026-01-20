
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hover = true,
    padding = 'md',
}) => {
    const paddings = {
        none: "",
        sm: "p-6",
        md: "p-8 lg:p-10",
        lg: "p-10 lg:p-16",
        xl: "p-12 lg:p-24",
    };

    return (
        <div className={`
      bg-white border border-slate-100 rounded-[2.5rem] lg:rounded-[4rem] transition-all duration-700
      ${hover ? 'hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/5' : ''}
      ${paddings[padding]}
      ${className}
    `}>
            {children}
        </div>
    );
};

export default Card;
