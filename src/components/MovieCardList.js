import React from 'react'
import MovieCard from './MovieCard';

function MovieCardList({ profiles, users, movies }) {

  return (
    <div>
      <h1>Results of Movie Survey</h1>

      <ul>
        {movies.map((movie, idx) => {
          // goal - add array of fans to movie
          movies[idx].fans = profiles
            // 1) get matching profiles related to this movie
            .filter(profile => profile.favoriteMovieID === movie.id)
            // 2) for each profile/movie, get names of fans
            .map(profile => {
              return users
                .filter(user => user.id === profile.userID)
                .map(user => {
                  return user.name
                })
            })

          return (
            <li key={idx}>
              <MovieCard movie={movies[idx]} />
            </li>
          )

        })}

      </ul>
      {console.log('movies :>> ', movies)}

    </div>
  )
}

export default MovieCardList