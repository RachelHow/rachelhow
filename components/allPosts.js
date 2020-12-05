import PostPreview from "./post-preview";

export default function AllPosts({ posts }) {
  return (
    <div className="py-8">
      <div className="grid grid-cols-2 col-gap-12 md:grid-cols-1 sm:grid-cols-1">
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
    </div>
  );
}
