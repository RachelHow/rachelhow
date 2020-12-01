import PostPreview from "./post-preview";

export default function AllPosts({ posts }) {
  return (
    <div className="py-12">
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            readingTime={post.readingTime}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
}
