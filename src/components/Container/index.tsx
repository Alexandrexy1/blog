import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="max-w-screen-lg mx-auto px-8">{children}</div>;
}
