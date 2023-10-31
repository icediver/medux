"use client";

import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export enum WidgetSizeEnum {
  base = "col-span-1 row-span-1 w-full h-[182px]",
  md = "row-span-2",
  lg = "w-full row-span-4",
  xl = "col-span-2 row-span-2",
  "2xl" = "col-span-3 row-span-4",
}

interface IWidget extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "base" | "md" | "lg" | "xl" | "2xl";
  title: string;
  prevNextHandler?: (direction: "backward" | "forward") => void;
}
export default function Widget({
  size = "base",
  children,
  className,
  prevNextHandler,
  title,
}: IWidget) {
  return (
    <div
      className={clsx(
        WidgetSizeEnum[size],
        className,
        "bg-bg-light rounded-xl py-6",
      )}
    >
      <div className="text-lg mx-6 flex justify-between animate-opacity">
        <div className="">{title}</div>
        {prevNextHandler && (
          <div className="flex gap-2">
            <button
              onClick={() => prevNextHandler("backward")}
              className="hover:text-white"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={() => prevNextHandler("forward")}
              className="hover:text-white"
            >
              <IoIosArrowForward />
            </button>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
