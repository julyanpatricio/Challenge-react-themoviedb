import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMoviesByName } from "../actions";
import { getMovies } from "../actions";
import { useHistory } from "react-router-dom";

function Search() {
  const dispatch = useDispatch();
  const [movieSearch, setMovieSearch] = useState({
    name: '',
  });
  const { push } = useHistory()

  function handleChange(e) {
    setMovieSearch(movieSearch => ({
      ...movieSearch,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    movieSearch.name ? dispatch(getMoviesByName(movieSearch.name)) :
      dispatch(getMovies())
    push('/')
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        id='search-bar'
        type="text"
        name="name"
        autoComplete="off"
        value={movieSearch.name}
        onChange={handleChange} 
      />
      <button type="submit" className='button-search is-green'>Search movies</button>
    </form>
  )
}

export default Search