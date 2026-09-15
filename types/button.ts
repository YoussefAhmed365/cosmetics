import type { ReactNode, MouseEventHandler } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "text-light" | "text-dark";

export default interface ButtonTypes {
    children?: ReactNode;
    type?: ButtonVariant;
    variant?: ButtonVariant;
    htmlType?: "button" | "submit" | "reset";
    href?: string;
    className?: string;
    disabled?: boolean;
    target?: string;
    rel?: string;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}