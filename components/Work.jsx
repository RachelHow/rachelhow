export default function Work({ posts }) {
  return (
    <div className='container max-w-screen-md py-12'>
      <h6>Product design work</h6>
      <h3>I design digital experiences that your users will love.</h3>

      <div className='py-8'>
        <div className='grid grid-cols-2 gap-12 sm:grid-cols-1'>
          {posts.slice(0, 4).map((post) => (
            <div className='flex sm:flex-col' key={post.slug}>
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

        <button className='btn btn-primary mt-8'>Selected work</button>

      </div>
    </div>
  )
}
