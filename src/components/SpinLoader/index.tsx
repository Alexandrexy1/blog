import clsx from "clsx";

type SpinLoaderProps = {
  className?: string;
};

export function SpinLoader({ className = "" }: SpinLoaderProps) {
  return (
    <div className={clsx("flex", "items-center", "justify-center", className)}>
      <div
        className={clsx(
          "h-10",
          "w-10",
          "border-5",
          "border-t-transparent",
          "rounded-full",
          "animate-spin",
          "border-slate-800"
        )}
      ></div>
    </div>
  );
}
