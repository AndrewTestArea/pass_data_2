import React from 'react'

function FansList({ fans }) {

  return (
    <>
      <div>We like this movie!</div>
      <ol>
        {fans.map((fan, idx) => <li key={idx}>{fan}</li>)}
      </ol>
    </>
  )
}

export default FansList