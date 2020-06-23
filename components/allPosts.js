import PostPreview from './post-preview'

export default function AllPosts({ posts }) {
  return (
    <div className="container mx-auto py-16 sm:px-10 sm:py-8">
      <div className="grid grid-cols-2 col-gap-16 row-gap-16 text-center sm:grid-cols-1 sm:px-0">
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
        ))
        }
      </div>
    </div>
  )
}
