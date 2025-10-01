import { PostHeading } from "../PostHeading";
import { PostImageCover } from "../PostImageCover";

export function PostFeatured() {
  const slug = "Something";
  const postLink = `/post/${slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostImageCover
        linkProps={{
          href: postLink,
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
        <time className="text-slate-600 text-sm/tight" dateTime="2025-09-24">
          24/09/2025 10:07
        </time>
        <PostHeading href={postLink} as="h1">
          Olá, novo título do FeaturedPost
        </PostHeading>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam
        odio officiis pariatur cupiditate esse voluptatibus vitae alias magnam
        porro! Maxime numquam odit tenetur illum provident, tempora delectus.
        Quam, porro.
      </div>
    </section>
  );
}
