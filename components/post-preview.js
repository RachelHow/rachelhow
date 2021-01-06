import Link from "next/link";

export default function PostPreview({ title, readingTime, coverImage, date, slug }) {
  return (
    <div className="flex mb-20 sm:flex-col">
      <div>
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          <a>
            <div className="mb-2">
                <img
                  src={coverImage}
                  alt={title}
                  className="rounded-lg mx-auto object-cover blogpreviewimg"
                />
            </div>
            <h4 className="text-l text-black font-sb leading-7 py-2">
              {title}
            </h4>
          </a>
        </Link>
        <p className="text-s md:text-xs text-medgray">
          {date} • {readingTime}
        </p>
      </div>
    </div>
  );
}
