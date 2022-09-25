import React from 'react'
import FansList from './FansList'


function Movie({ movie }) {


  return (
    <div>
      <hr></hr>
      {movie.fans.length > 0 ? <h2>Favorite!</h2> : <h3>Not Favorite :(</h3>}
      <h1>{movie.name}</h1>

      {movie.fans.length > 0 ? <FansList fans={movie.fans} /> : <p>Nobody likes it!</p>}
    </div>
  )
}

export default Movie