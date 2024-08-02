import PropTypes from 'prop-types'

export function PostSorting({ fields = [] }) {
  return (
    <>
      <label htmlFor='sortBy'>Sort by:</label>
      <select name='sortBy' id='sortBy'>
        {fields.map((field) => (
          <option value={field} key={field}>
            {field}
          </option>
        ))}
      </select>
      {' / '}
      <label htmlFor='sortOrder'>Sort order:</label>
      <select name='sortOrder' id='sortOrder'>
        <option value='ascending'>Ascending</option>
        <option value='descending'>Descending</option>
      </select>
    </>
  )
}

PostSorting.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
}
