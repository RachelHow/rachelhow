import Link from "next/link";
import { RichText } from "prismic-reactjs";
import CoverImage from "./cover-image";
import Ic_RightArrow from "../src/Ic_RightArrow";

export default function PostPreview({ title, coverImage, excerpt, slug }) {
  return (
    <div className="flex mb-20 sm:flex-col">
      <div className="my-auto w-1/2 sm:w-full">
        <p className="text-xs md:text-xxs text-lightgray uppercase tracking-wide mb-2">
          {excerpt}
        </p>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>
            <h4 className="text-xl mb-8 font-b md:text-l sm:text-l">
              {RichText.asText(title)}
              <p className="text-s md:text-xxs text-lightgray mt-2">
                Read the case study <Ic_RightArrow size="16" color="#525252" />
              </p>
            </h4>
          </a>
        </Link>
      </div>

      <div className="mx-auto w-1/2 sm:w-full">
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
      </div>
    </div>
  );
}
