import PropTypes from 'prop-types'

export default function Post({ title, author, contents }) {
  return (
    <article>
      <h3>{title}</h3>
      <div>{contents}</div>
      {author && (
        <em>
          Written by <strong>{author}</strong>
        </em>
      )}
    </article>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  contents: PropTypes.string,
}
