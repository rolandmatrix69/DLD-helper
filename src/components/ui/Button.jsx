import React, { useState } from "react";
import { cn } from "../../libs/utils";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "default",
      to, // optional: if you want navigation after delay
      delay = 5000, // default 2s delay
      children,
      ...props
    },
    ref
  ) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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

    const handleClick = (e) => {
      if (props.onClick) props.onClick(e);
      if (to) {
        setLoading(true);
        setTimeout(() => {
          navigate(to);
          setLoading(false);
        }, delay);
      }
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={loading}
        onClick={handleClick}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="animate-spin w-4 h-4" />
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
