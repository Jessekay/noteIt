import React from 'react'

const NotePage = (props) => {
  console.log("props:", props.match.params.id);

  return (
    <div>
      <h1>This is my new page</h1>
    </div>
  )
}

export default NotePage