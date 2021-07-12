import React, { useState, useRef } from 'react';
import { fetchMovieByTitle } from '../api';
import './styles/app.css';

export const App = () => {
  const inputRef = useRef();
  const [movie, setMovie] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = async () => {
    const inputValue = inputRef.current.value;
    setIsLoading(true);
    try {
      const response = await fetchMovieByTitle(inputValue);
      if (response.Error) {
        setError(response.Error);
        setMovie();
      } else {
        setError(undefined);
        setMovie(response);
      }
    } catch (error) {
      setMovie();
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <input ref={inputRef} type="text" placeholder="Input title" />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      {isLoading && <h1>{'Loading...'}</h1>}
      {error && <h1>{'Something went wrong'}</h1>}
      {movie && !isLoading && (
        <>
          <h1>Title: {movie.Title}</h1>
          <h2>Year: {movie.Year}</h2>
          <h2>Plot: {movie.Plot}</h2>
        </>
      )}
      {movie && movie.Genre && !isLoading && (
        <ul>
          Genre:{' '}
          {movie.Genre.split(',').map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
