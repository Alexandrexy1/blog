import { postRepository } from "@/repositories/json-post-repository";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div>
      {" "}
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
