import postStyles from './post-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div
      className={`pb-20 post ${postStyles.post}`}
      dangerouslySetInnerHTML={{ __html: content?.html }}
    />
  )
}
