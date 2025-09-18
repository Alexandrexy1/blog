import { PropsWithChildren } from "react";

export function MainTemplate({ children }: PropsWithChildren) {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen">{children}</div>
  );
}
