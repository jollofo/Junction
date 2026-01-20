
import React from 'react';

interface SectionHeaderProps {
    badge?: string;
    title: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    align?: 'left' | 'center';
    light?: boolean;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    badge,
    title,
    subtitle,
    align = 'center',
    light = false,
    className = '',
}) => {
    const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';
    const textColor = light ? 'text-white' : 'text-slate-900';
    const subtitleColor = light ? 'text-white/80' : 'text-slate-600';
    const badgeBg = light ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300' : 'bg-indigo-50 border-indigo-100 text-indigo-600';

    return (
        <div className={`flex flex-col ${alignment} mb-16 lg:mb-32 ${className}`}>
            {badge && (
                <span className={`inline-block px-4 py-1.5 ${badgeBg} border rounded-lg text-[10px] lg:text-[11px] font-bold mb-8 lg:mb-10 tracking-[0.4em] uppercase font-futuristic`}>
                    [ {badge} ]
                </span>
            )}
            <h2 className={`text-3xl lg:text-7xl font-bold ${textColor} tracking-tight font-futuristic uppercase leading-tight mb-8`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg lg:text-3xl ${subtitleColor} leading-relaxed font-medium max-w-4xl italic`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
