import PostPreview from "./post-preview";

export default function AllPosts({ posts }) {
  return (
    <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage.url}
            date={post.date}
            readingTime={post.readingTime}
            author={post.author}
            slug={post.slug}
          />
        ))}
    </div>
  );
}
