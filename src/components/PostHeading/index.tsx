import Link from "next/link";
import { PropsWithChildren } from "react";

type PostHeadingProps = PropsWithChildren & {
  href: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  href,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-2xl/tight sm:text-4xl/tight font-extrabold",
    h2: "text-2xl/tight font-bold",
  };
  return (
    <Tag className={headingClassesMap[Tag]}>
      <Link className="hover:text-slate-600 transition" href={href}>
        {children}
      </Link>
    </Tag>
  );
}
