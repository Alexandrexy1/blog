import { PostImageCover } from "@/components/PostImageCover";
import { PostHeading } from "@/components/PostHeading";
import { SpinLoader } from "@/components/SpinLoader";
import { Container } from "@/components/Container";
import { PostsList } from "@/components/PostsList";
import { Header } from "@/components/Header";

import { MainTemplate } from "@/templates/MainTemplate";

import { Suspense } from "react";

export default async function HomePage() {
  return (
    <MainTemplate>
      <Container>
        <Header />
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 group">
          <PostImageCover
            linkProps={{
              href: "#",
            }}
            imageProps={{
              src: "/images/bryen_0.png",
              alt: "Imagem do Post em destaque",
              width: 1200,
              height: 720,
              priority: true,
            }}
          />
          <div className="flex flex-col sm:justify-center">
            <time
              className="text-slate-600 text-sm/tight"
              dateTime="2025-09-24"
            >
              24/09/2025 10:07
            </time>
            <PostHeading href="#" as="h1">
              Olá, novo título do FeaturedPost
            </PostHeading>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            aliquam odio officiis pariatur cupiditate esse voluptatibus vitae
            alias magnam porro! Maxime numquam odit tenetur illum provident,
            tempora delectus. Quam, porro.
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
      </Container>
    </MainTemplate>
  );
}
