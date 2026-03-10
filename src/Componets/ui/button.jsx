import React from 'react';

export function Button({ children, size = "default", variant = "default", className = "", ...props }) {
    const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        default: "bg-zinc-900 text-white shadow hover:bg-zinc-800",
        outline: "border border-zinc-200 bg-transparent hover:bg-zinc-100 text-zinc-900",
        ghost: "hover:bg-zinc-100 hover:text-zinc-900"
    };

    const sizes = {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
