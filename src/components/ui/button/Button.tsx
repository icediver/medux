import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}
export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: IButton) {
  return (
    <button
      {...props}
      className={clsx(
        "text-base  py-2.5 rounded active:translate-y-1",
        variant === "primary" ? "bg-primary" : "bg-background",
        className,
      )}
    >
      {children}
    </button>
  );
}
