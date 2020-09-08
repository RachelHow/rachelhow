import PostPreview from "./post-preview";

export default function AllPosts({ posts }) {
  return (
    <div className="py-12">
      <div>
        {posts.map(({ node }) => (
          <PostPreview
            key={node._meta.uid}
            title={node.title}
            coverImage={node.coverimage}
            date={node.date}
            author={node.author}
            slug={node._meta.uid}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </div>
  );
}
