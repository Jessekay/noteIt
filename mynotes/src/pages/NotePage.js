import React from 'react'

const NotePage = (match) => {
  let noteId= match;
  console.log("note id:", noteId);

  return (
    <div>
      <h1>This is my new page</h1>
    </div>
  )
}

export default NotePage