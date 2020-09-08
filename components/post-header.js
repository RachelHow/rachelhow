import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <div className="mb-8 md:mb-16">
        <CoverImage title={RichText.asText(title)} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <h4 className="text-xxl sm:text-xl mb-4">{title[0].text}</h4>
        <div className="block mb-6">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}