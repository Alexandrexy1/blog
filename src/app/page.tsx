import { PostImageCover } from "@/components/PostImageCover";
import { PostHeading } from "@/components/PostHeading";
import { SpinLoader } from "@/components/SpinLoader";
import { Container } from "@/components/Container";
import { PostsList } from "@/components/PostsList";
import { Header } from "@/components/Header";

import { MainTemplate } from "@/templates/MainTemplate";

import { Suspense } from "react";
import { PostFeatured } from "@/components/PostFeatured";

export default async function HomePage() {
  return (
    <MainTemplate>
      <Container>
        <Header />
        <PostFeatured />
        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
      </Container>
    </MainTemplate>
  );
}
