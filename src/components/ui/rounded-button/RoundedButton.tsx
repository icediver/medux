import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface IRoundedButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "third";
  Icon?: IconType;
}
export default function RoundedButton({
  variant = "primary",
  Icon,
  className,
  ...rest
}: IRoundedButton) {
  return (
    <button
      {...rest}
      className={clsx(
        "w-10 h-10 rounded-full flex justify-center items-center text-1.5xl active:translate-y-1 hover:text-white",
        {
          ["bg-primary"]: variant === "primary",
          ["bg-background"]: variant === "secondary",
          ["bg-bg-light"]: variant === "third",
        },
        className,
      )}
    >
      {Icon && <Icon />}
    </button>
  );
}
