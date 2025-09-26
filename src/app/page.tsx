import { SpinLoader } from "@/components/SpinLoader";
import { PostsList } from "@/components/PostsList";
import { Header } from "@/components/Header";

import { Suspense } from "react";
import { MainTemplate } from "@/templates/MainTemplate";
import { Container } from "@/components/Container";

import Link from "next/link";
import Image from "next/image";
import { PostHeading } from "@/components/PostHeading";

export default async function HomePage() {
  return (
    <MainTemplate>
      <Container>
        <Header />
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 group">
          <Link href="#" className="w-full h-full overflow-hidden rounded-xl">
            <Image
              className="w-full h-full object-cover object-center group-hover:scale-105 transition"
              src="/images/bryen_0.png"
              width={1200}
              height={720}
              alt="Título do post"
              priority
            />
          </Link>
          <div className="flex flex-col sm:justify-center">
            <time
              className="text-slate-600 text-sm/tight"
              dateTime="2025-09-24"
            >
              24/09/2025 10:07
            </time>
            <PostHeading href="#">Olá, novo título do FeaturedPost</PostHeading>
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
