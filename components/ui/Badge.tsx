
import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    className = '',
}) => {
    const baseStyles = "inline-block px-4 py-1.5 border rounded-lg text-[10px] lg:text-[11px] font-bold tracking-[0.4em] uppercase font-futuristic";

    const variants = {
        primary: "bg-indigo-50 border-indigo-100 text-indigo-600",
        secondary: "bg-cyan-50 border-cyan-100 text-cyan-600",
        outline: "bg-transparent border-slate-200 text-slate-500",
        ghost: "bg-slate-50 border-transparent text-slate-600",
    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${className}`}>
            [ {children} ]
        </span>
    );
};

export default Badge;
