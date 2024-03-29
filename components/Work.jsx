import Link from 'next/link'

export default function Work({ posts }) {
  return (
    <div className='container max-w-600	py-12 sm:px-8'>
      <h6>Product design work</h6>
      <h3>I design digital experiences that your users will love.</h3>

      <div className='pt-6 pb-8'>
        <div className='grid grid-cols-2 gap-12 sm:grid-cols-1'>
          {posts.slice(0, 4).map((post) => (
            <div className='flex sm:flex-col' key={post.slug}>
              <div>
                <img
                  src={post.coverImage.url}
                  alt={post.name}
                  className='rounded-md object-contain'
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

        <Link href='/work'>
          <button className='btn btn-primary mt-8'>Selected work ➝</button>
        </Link>
      </div>
    </div>
  )
}
