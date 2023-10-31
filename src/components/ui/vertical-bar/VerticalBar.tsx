import clsx from "clsx";
import styles from "./VerticalBar.module.scss";

interface IVerticalBar {
  value: number;
  time: string;
}
export default function VerticalBar({ value, time }: IVerticalBar) {
  const height = `${Math.round((value / 90) * 100)}%`;

  return (
    <div className="group relative w-7 mt-3 text-center cursor-pointer">
      <div className="h-[90px] w-2.5 bg-background rounded-sm flex justify-end flex-col items-center mx-auto">
        <div
          className={clsx(
            "w-2.5 bg-primary rounded-sm animate-height",
            styles.bar,
          )}
          style={{ height }}
        />
      </div>
      <div className="text-xs mt-1">{time}</div>
      <span className="absolute hidden top-0 bg-gray-300 text-xs text-black rounded-sm p-1   group-hover:block left-0">
        {value}
      </span>
    </div>
  );
}
