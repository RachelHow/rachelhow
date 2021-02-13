import Link from 'next/link'
import { format } from 'timeago.js'

export default function PostPreview({
  title,
  readingTime,
  coverImage,
  date,
  post,
  slug,
}) {
  return (
    <div className='pb-8'>
      <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}}`} href='/blog/[slug]'>
        <a className='grid grid-cols-3 sm:grid-cols-1'>
          <div className='col-span-2 pr-8'>
            <h4 className='pb-2'>{post.data.title}</h4>
            <p>
              {format(date)} • {readingTime}
            </p>
          </div>

          <div className='col-span-1 sm:hidden'>
            <img
              src={coverImage}
              alt={title}
              className='rounded-lg object-cover'
            />
          </div>
        </a>
      </Link>
    </div>
  )
}