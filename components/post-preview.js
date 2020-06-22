import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import CoverImage from './cover-image'

export default function PostPreview({ title, coverImage, excerpt, slug, }) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
      </div>
      <h3 className="text-l mb-3">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">
            <RichText render={title} />
          </a>
        </Link>
      </h3>
      <p className="text-base mb-4 text-lightgray">{excerpt}</p>
    </div>
  )
}
