import React from "react";
import { cn } from "../../libs/utils";

export const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      default: "bg-slate-900 text-white hover:bg-slate-700",
      outline: "border border-slate-300 hover:bg-slate-100",
      ghost: "hover:bg-slate-100",
    };

    const sizes = {
      default: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
      sm: "px-3 py-1 text-xs",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
