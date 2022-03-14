import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movie}) => {
    console.log(movie)
  return (
    <div className="movie-list">
        {movie.map((el , i)=> (  
            <MovieCard key={i} movie={el} />    ))}
    </div>
  )
}

export default MovieList