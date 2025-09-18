import { SpinLoader } from "@/components/SpinLoader";
import { PostsList } from "@/components/PostsList";

import { Suspense } from "react";
import { MainTemplate } from "@/templates/MainTemplate";

export default async function HomePage() {
  return (
    <div>
      <MainTemplate>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é a header</h1>
        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
      </MainTemplate>
    </div>
  );
}
