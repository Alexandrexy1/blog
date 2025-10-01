import { postRepository } from "@/repositories/json-post-repository";
import { PostImageCover } from "../PostImageCover";
import { PostBody } from "../PostBody";

export async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 gap-8">
      {" "}
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostImageCover
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                src: post.coverImageUrl,
                alt: post.title,
                width: 1200,
                height: 720,
              }}
            />
            <PostBody
              postHeadingProps={{
                href: postLink,
                as: "h2",
              }}
              postModelProps={{
                id: post.id,
                title: post.title,
                slug: post.slug,
                excerpt: post.excerpt,
                content: post.content,
                coverImageUrl: post.coverImageUrl,
                published: post.published,
                createdAt: post.createdAt,
                updatedAt: post.updatedAt,
                author: post.author,
              }}
            ></PostBody>
          </div>
        );
      })}
    </section>
  );
}
