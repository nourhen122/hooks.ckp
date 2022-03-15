import './App.css';
// import MovieCard from './components/MovieCard';

import { useState } from 'react';
import StarRating from './components/StarRating';
import { MoviesList } from './Data';
import MovieList from './components/MovieList';
import Search from './components/Search';
import AddMovie from './components/AddMovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trailer from './components/Trailer';

function App() {
	const [ movie, setMovie ] = useState(MoviesList);

	const [ text, setText ] = useState('');
	const [ rating, setRating ] = useState(1);

  const handleAdd = (newMovie) => setMovie([ ...movie, newMovie ]);
	const handleText = (e) => setText(e.target.value);
  const handleRating = (x) => setRating(x)
	return (
		<div className="App">
		    <BrowserRouter>
			<Search text={text} handleText={handleText} rating={rating} handleRating={handleRating} />
			<Routes>
			{/* < MovieCard/> */}
			<Route path="/" element={<MovieList
				movie={movie.filter((el) => el.name.toLowerCase().includes(text.toLowerCase()) && el.rating >= rating)}
			/>} />
			{/* <StarRating /> */}
				<Route path='/:id' element={<Trailer movie={movie} />}  />
			</Routes>
			<AddMovie add={handleAdd} />
			</BrowserRouter>
		</div>
	);
}

export default App;
