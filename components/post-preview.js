import Link from 'next/link'

export default function PostPreview({
  title,
  readingTime,
  coverImage,
  date,
  slug,
}) {
  return (
    <div className='pb-8 sm:flex-col'>
      <Link as={`/articles/${slug}`} href='/articles/[slug]'>
        <a className='grid grid-cols-3'>
          <div className='col-span-2 pr-8'>
            <h4 className='pb-2'>{title}</h4>
            <p>
              {date} • {readingTime}
            </p>
          </div>

          <div className='col-span-1'>
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
