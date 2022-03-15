import React from 'react'
import { Link } from 'react-router-dom'
import MovieList from './MovieList'
import StarRating from './StarRating'

const MovieCard = ({movie}) => {
  return (
    <Link to={`/${movie.id}`} >
    <div className="movie-card">
    
    <h3> {movie.name} </h3>
    <StarRating rating={movie.rating} />
    <img src={movie.image} alt="" />
    <p> {movie.date} </p>
    </div>
    </Link>
  )
}

export default MovieCard