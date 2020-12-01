import Link from "next/link";
import Ic_RightArrow from "../src/Ic_RightArrow";

export default function PostPreview({ title, readingTime, date, excerpt, slug }) {
  return (
    <div className="flex mb-20 sm:flex-col">
      <div className="my-auto">
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a>
            <h4 className="text-xl mb-2 font-b md:text-l sm:text-l">
              {title}
            </h4>
          </a>
        </Link>
        <p className="text-s md:text-xs text-lightgray">
          {date} • {readingTime}
          <br/>
          {excerpt}
        </p>
      </div>
    </div>
  );
}
