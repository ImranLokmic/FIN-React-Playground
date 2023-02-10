import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx";

//98ce47be

const API_URL = "http://www.omdbapi.com/?apikey=98ce47be";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const startMovies = async (name,year) => {
    const response = await fetch(`${API_URL}&s=${name}&y=${year}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    startMovies('Marvel','2022');
  }, []);

  return (
    <div className="App">
      <h1>MovieLookup</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={()=> searchMovies(searchTerm)}/>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
