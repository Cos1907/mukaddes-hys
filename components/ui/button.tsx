
import { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-all";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  };

  return (
    <button
      {...props}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}
