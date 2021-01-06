export default function AllWork({ posts }) {
  return (
    <div className='py-8'>
      <div className='grid grid-cols-2 gap-12 md:grid-cols-1 sm:grid-cols-1'>
        {posts.map( (post) => (
          <div className='flex sm:flex-col'>
            <div>
              <img
                src={post.coverImage.url}
                alt={post.name}
                className='workpreviewimg object-contain'
              />
              <h4 className='text-l text-black font-sb leading-7 pt-4 pb-2'>
                {post.name}
              </h4>
              <p className='text-s md:text-xs text-medgray'>
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
