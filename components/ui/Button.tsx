import type ButtonTypes from "@/types/button";
import type { ButtonVariant } from "@/types/button";
import Link from "next/link";

const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-primary text-accent px-8 py-3 rounded-full hover:bg-primary-hover hover:text-secondary active:bg-primary-active active:text-secondary shadow-lg hover:shadow-xl",
    secondary: "bg-secondary text-accent px-8 py-3 rounded-full hover:bg-accent hover:text-secondary shadow-lg hover:shadow-xl active:bg-primary-active active:text-secondary",
    outline: "bg-transparent border-2 border-secondary px-8 py-3 rounded-full text-secondary hover:bg-secondary hover:text-accent active:bg-secondary-active active:border-secondary-active active:text-accent",
    "text-light": "text-primary hover:text-accent active:text-accent",
    "text-dark": "text-secondary hover:text-primary active:text-primary",
};

const baseStyles = "inline-flex items-center justify-center cursor-pointer text-base md:text-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

export default function Button({
    children,
    type,
    variant = "primary",
    htmlType = "button",
    href,
    className = "",
    disabled = false,
    target,
    rel,
    onClick,
}: ButtonTypes) {
    const selectedVariant = (type || variant || "primary") as ButtonVariant;
    const variantClass = variantStyles[selectedVariant] || variantStyles.primary;
    const combinedClassName = `${baseStyles} ${variantClass} ${className}`.trim();

    if (href) {
        return (
            <Link
                href={disabled ? "#" : href}
                className={`${combinedClassName} ${disabled ? "pointer-events-none opacity-50" : ""}`.trim()}
                onClick={disabled ? (e) => e.preventDefault() : onClick}
                target={target}
                rel={rel}
                aria-disabled={disabled}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={htmlType}
            className={combinedClassName}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}