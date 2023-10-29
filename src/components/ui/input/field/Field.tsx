import clsx from "clsx";
import { FC, forwardRef } from "react";

import { IField } from "./field.interface";

const Field = forwardRef<HTMLInputElement, IField>(
  (
    { placeholder, error, className, type = "text", style, Icon, ...rest },
    ref,
  ) => {
    return (
      <div className={clsx("w-full", className)} style={style}>
        <label htmlFor="" className="text-xs  px-4">
          <span className="px-4 mb-1 block">
            {Icon && <Icon className="mr-3" />}
            {placeholder}
          </span>
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...rest}
            className={clsx("text-sm py-2.5 rounded bg-bg-light px-4 w-full", {
              "border-red": !!error,
            })}
          />
        </label>
        <div className="h-5">
          {error && <div className="text-red-700  text-sm">{error}</div>}
        </div>
      </div>
    );
  },
);

Field.displayName = "Field";
export default Field;
