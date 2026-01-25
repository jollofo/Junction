
import React, { useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div
                ref={modalRef}
                className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl p-8 sm:p-10 transform transition-all animate-scale-in mx-auto border border-white/20"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                {title && (
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-slate-900 font-futuristic uppercase tracking-tight">
                            {title}
                        </h3>
                    </div>
                )}

                <div className="text-slate-600">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
