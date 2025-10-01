import { PostImageCover } from "../PostImageCover";
import { PostSummary } from "../PostSummary";

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
      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt={"2025-02-22T04:32:54"}
        excerpt="Next.js é um framework de desenvolvimento criado para facilitar a construção de aplicações web modernas usando React."
        title="Como manter o foco no mundo digital"
      ></PostSummary>
    </section>
  );
}
