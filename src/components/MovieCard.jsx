import React from 'react'
import MovieList from './MovieList'
import StarRating from './StarRating'

const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
    <h3> {movie.name} </h3>
    <StarRating rating={movie.rating} />
    <img src={movie.image} alt="" />
    <p> {movie.date} </p>
    </div>
  )
}

export default MovieCard