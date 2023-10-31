"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react";
import { IconType } from "react-icons";

interface ICheckedButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isChecked: boolean;
  children: ReactNode;
  Icon?: IconType;
  variant?: "first" | "second";
}
export default function CheckedButton({
  isChecked,
  children,
  Icon,
  className,
  variant = "first",
  ...rest
}: ICheckedButton) {
  const bgButton = variant === "first" ? "bg-primary" : "bg-emergency";
  return (
    <button
      {...rest}
      className={clsx(
        "text-xs flex px-2 py-0.5 rounded-xl animate-opacity",
        isChecked && variant === "first"
          ? "bg-primary text-white"
          : "bg-background text-primary",
        isChecked && variant === "second"
          ? "bg-emergency text-white"
          : "bg-background text-primary",

        className,
      )}
    >
      {Icon && <Icon className="text-lg mr-1" />}
      {children}
    </button>
  );
}
