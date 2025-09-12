import clsx from "clsx";

export default async function HomePage() {
  console.log("olá!");

  return (
    <div>
      <h1 className={clsx("text-6xl", "font-bold", "text-blue")}>
        Olá, mundo!
      </h1>
    </div>
  );
}
