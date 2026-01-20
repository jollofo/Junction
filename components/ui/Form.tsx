
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
    return (
        <div>
            {label && <label className="block text-[11px] font-bold text-indigo-600 mb-3 uppercase tracking-widest">{label}</label>}
            <input
                className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-5 lg:px-6 py-4 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-300 ${className}`}
                {...props}
            />
        </div>
    );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: { value: string; label: string }[] | string[];
}

export const Select: React.FC<SelectProps> = ({ label, options, className = '', ...props }) => {
    return (
        <div>
            {label && <label className="block text-[11px] font-bold text-indigo-600 mb-3 uppercase tracking-widest">{label}</label>}
            <div className="relative">
                <select
                    className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-5 lg:px-6 py-4 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm appearance-none cursor-pointer ${className}`}
                    {...props}
                >
                    {props.placeholder && <option value="" disabled>{props.placeholder}</option>}
                    {options.map((option) => {
                        const val = typeof option === 'string' ? option : option.value;
                        const lab = typeof option === 'string' ? option : option.label;
                        return <option key={val} value={val}>{lab}</option>;
                    })}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
            </div>
        </div>
    );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, className = '', ...props }) => {
    return (
        <div>
            {label && <label className="block text-[11px] font-bold text-indigo-600 mb-3 uppercase tracking-widest">{label}</label>}
            <textarea
                className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-5 lg:px-6 py-4 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm resize-none placeholder:text-slate-300 ${className}`}
                {...props}
            />
        </div>
    );
};
