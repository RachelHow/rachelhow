import PostPreview from "./post-preview";

export default function AllPosts({ posts }) {
  return (
    <div>
        {posts.map((post) => (
          <PostPreview
            key={post.filePath}
            title={post.data.title}
            coverImage={post.image}
            date={post.publishedAt}
            readingTime={post.readingTime}
            slug={post.slug}
          />
        ))}
    </div>
  );
}
