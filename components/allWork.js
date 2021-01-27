export default function AllWork({ posts }) {
  return (
    <div className='py-8'>
      <div className='grid grid-cols-2 gap-8 sm:grid-cols-1'>
        {posts.map( (post) => (
          <div className='flex sm:pb-8' key={post.slug}>
            <div>
              <img
                src={post.coverImage.url}
                alt={post.name}
                className='rounded-md object-contain'
              />
              <h3 className='py-2'>{post.name}</h3>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
