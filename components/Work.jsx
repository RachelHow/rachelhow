export default function Work({ posts }) {
  return (
    <div className='text-center pb-20 px-48 md:px-4 sm:px-8'>
      <h3 className='pb-4 text-xl md:text-xl sm:text-xl'>Selected work</h3>
          <p className='pb-10 mx-48 md:mx-24 sm:mx-0 text-medgray tracking-tight text-base md:text-s'>
          I design thoughtful experiences that your users will love.
          </p>
      <div className='py-8 px-24 sm:px-0'>
        <div className='grid grid-cols-2 gap-12 sm:grid-cols-1'>
          {posts.slice(0, 4).map((post) => (
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
    </div>
  )
}