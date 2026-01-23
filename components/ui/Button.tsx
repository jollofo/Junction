
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'white';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const baseStyles = "font-bold uppercase tracking-widest transition-all active:scale-95 hover:translate-y-[-2px] inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none disabled:translate-y-0 disabled:scale-100";

    const variants = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-2xl shadow-indigo-100",
        secondary: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-indigo-100",
        outline: "bg-transparent text-slate-900 border border-slate-200 hover:bg-slate-50",
        ghost: "bg-transparent text-slate-600 hover:text-indigo-600 hover:bg-indigo-50",
        dark: "bg-slate-900 text-white hover:bg-slate-800 shadow-xl",
        white: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
    };

    const sizes = {
        sm: "px-4 py-2 text-[10px] rounded-lg",
        md: "px-8 py-4 text-[11px] lg:text-[13px] rounded-2xl",
        lg: "px-10 py-5 text-base lg:text-lg rounded-2xl",
        xl: "px-14 py-6 text-base lg:text-xl rounded-[2rem]",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
