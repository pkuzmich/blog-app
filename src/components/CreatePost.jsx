export function CreatePost() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor='title'>Title:</label>
        <input type='text' name='title' id='title' />
      </div>
      <div>
        <label htmlFor='author'>Author:</label>
        <input type='text' name='author' id='author' />
      </div>
      <div>
        <label htmlFor='content'>Content:</label>
        <textarea name='content' id='content'></textarea>
      </div>
      <button type='submit'>Create</button>
    </form>
  )
}
