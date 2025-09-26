import { PostHeading } from "../PostHeading";
import { PostModel } from "@/models/post/post-model";

type PostBodyProps = {
  postHeadingProps: React.ComponentProps<typeof PostHeading>;
  postModelProps: PostModel;
};

export function PostBody({ postHeadingProps, postModelProps }: PostBodyProps) {
  return (
    <div className="flex flex-col sm:justify-center">
      <time
        className="text-slate-600 text-sm/tight"
        dateTime={postModelProps.createdAt}
      >
        {postModelProps.createdAt}
      </time>
      <PostHeading {...postHeadingProps}>{postModelProps.title}</PostHeading>
      <p>{postModelProps.excerpt}</p>
    </div>
  );
}
