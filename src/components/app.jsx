import React, { useState } from 'react';
import { fetchMovieByTitle } from '../api';
import './styles/app.css';

export const App = () => {
  const [searchText, setSearchText] = useState('');
  const [movie, setMovie] = useState('');
  const handleSearch = async () => {
    const response = await fetchMovieByTitle(searchText);
    setMovie(response);
  };

  const handleInputText = (title) => {
    if (title) setSearchText(title);
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Input title"
        onChange={({ target: { value } }) => handleInputText(value)}
      />
      <button type="button" onClick={handleSearch}>Search</button>
      {movie.Error || !movie ? (
        <h1>{movie && "Movie Not Found"}</h1>
      ) : (
        <>
          <h1>Title: {movie.Title}</h1>
          <h2>Year: {movie.Year}</h2>
          <h2>Plot: {movie.Plot}</h2>
          <h2>Genre: </h2>
          {movie.Genre ? (
            movie.Genre.split(',').map((g) => <p>{g}</p>)
          ) : (
            <p>N/A</p>
          )}
        </>
      )}
    </div>
  );
};

export default App;
