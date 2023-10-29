import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export default function Button({ children, className, ...props }: IButton) {
  return (
    <button
      {...props}
      className={clsx(
        "text-base bg-primary py-2.5 rounded active:translate-y-1",
        className,
      )}
    >
      {children}
    </button>
  );
}
