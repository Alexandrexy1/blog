import { postRepository } from "@/repositories/json-post-repository";
import { PostImageCover } from "../PostImageCover";
import { PostSummary } from "../PostSummary";

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
            <PostSummary
              postHeading="h2"
              postLink={postLink}
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
            ></PostSummary>
          </div>
        );
      })}
    </section>
  );
}
