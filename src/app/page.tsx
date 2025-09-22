import { SpinLoader } from "@/components/SpinLoader";
import { PostsList } from "@/components/PostsList";
import { Header } from "@/components/Header";

import { Suspense } from "react";
import { MainTemplate } from "@/templates/MainTemplate";
import { Container } from "@/components/Container";

export default async function HomePage() {
  return (
    <MainTemplate>
      <Container>
        <Header />
        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
      </Container>
    </MainTemplate>
  );
}
