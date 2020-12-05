import Link from "next/link";
import CoverImage from '../components/cover-image'

export default function PostPreview({ title, readingTime, coverImage, date, slug }) {
  return (
    <div className="flex mb-20 sm:flex-col">
      <div className="my-auto">
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a>
            <div className="mb-2">
              {/* <CoverImage title={title} url={coverImage} className="blogpreviewimg"/>
               */}
                <img
                  src={coverImage}
                  alt={title}
                  className="rounded-lg mx-auto object-cover blogpreviewimg"
                />
            </div>
            <h3 className="text-l text-black font-sb leading-7 py-2">
              {title}
            </h3>
          </a>
        </Link>
        <p className="text-s md:text-xs text-lightgray">
          {date} • {readingTime}
        </p>
      </div>
    </div>
  );
}
